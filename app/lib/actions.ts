"use server";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/ui/EmailTemplate";
import { EmailState } from "./definitions";

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter at least 2 characters",
  }),
  company: z.string().optional(),
  mailMessage: z.string().min(5, {
    message: "Please enter at least 5 characters",
  }),
  email: z.union([
    z.literal(""),
    z.string().email({ message: "Invalid email" }),
  ]),
});

export async function sendEmail(prevState: EmailState, formData: FormData) {

  // Validate form using Zod
  const formFields = {
    name: String(formData.get("mail-name")),
    company: String(formData.get("mail-company")),
    mailMessage: String(formData.get("mail-message")),
    email: String(formData.get("mail-email")),
  };
  const validatedFields = FormSchema.safeParse(formFields);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }

  try {
    const { data } = await resend.emails.send({
      from: `${formFields.name} <onboarding@resend.dev>`,
      to: ["wecreus@gmail.com"],
      subject: `${formFields.name}${formFields.company ? " from " + formFields.company : ""}`,
      react: EmailTemplate({ ...formFields }),
      text: `${formFields.mailMessage}`,
    });

    console.log("Email sent", data);
    return {
      errors: {},
      message: "Message sent",
    };
  } catch (error) {
    console.error("Failed to send email", error);

    return {
      errors: { status: "Failed to send email" },
      message: "Failed to send email",
    };
  }
}
