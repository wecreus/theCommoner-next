"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter at least 2 characters",
  }),
  company: z.string().optional(),
  mailMessage: z.string().min(5, {
    message: "Please enter at least 5 characters",
  }),
});

export type State = {
  errors?: {
    name?: string;
    company?: string;
    message?: string;
  };
  message?: string | null;
};

export async function sendEmail(prevState: State, formData: FormData) {

  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    name: formData.get("mail-name"),
    company: formData.get("mail-company"),
    mailMessage: formData.get("mail-message"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }

    //   const mailName = String(e.target["mail-name"].value) || "";
  //   const mailCompany = String(e.target["mail-company"].value) || "";
  //   const mailMessage = String(e.target["mail-message"].value) || "";
  //   const subject = `${mailName}${mailCompany ? " from " + mailCompany : ""}`;

  //   const result = `mailto:wecreus@gmail.com?subject=${subject}&body=${mailMessage}`;

  return {
    errors: {},
    message: "Message sent",
  };
  // // Prepare data for insertion into the database
  // const { customerId, amount, status } = validatedFields.data;
  // const amountInCents = amount * 100;
  // const date = new Date().toISOString().split('T')[0];

  // // Insert data into the database
  // try {

  // } catch (error) {
  //   // If a database error occurs, return a more specific error.
  //   return {
  //     message: 'Database Error: Failed to Create Invoice.',
  //   };
  // }
}
