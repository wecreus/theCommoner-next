"use client";

import "./Contact.scss";
import { useActionState, useEffect, useState, useRef } from "react";
import FormSidebar from "@/ui/FormSiderbar/FormSidebar";
import { sendEmail } from "@/lib/actions";
import TooltipAbout from "@/ui/common/TooltipAbout/TooltipAbout";
import type { EmailState } from "@/lib/definitions";
import clsx from "clsx";

const initialState = { message: "", errors: {} };
const ContactMe = () => {
  const [messageShown, setMessageShown] = useState(true);
  const [state, dispatch]: [EmailState, (payload: FormData) => void, boolean] =
    useActionState(sendEmail, initialState);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (state.message) {
      setMessageShown(true);

      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        setMessageShown(false);
      }, 3000);
    }

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [state]);

  return (
    <section className="section Contact">
      <form className="Form" action={dispatch}>
        <div className="Form-content">
          <div className="Form-content__group">
            <span className="Form-content__title">
              <b>Would love to hear from you</b>
              <TooltipAbout text="Here you can send me a message even without entering your own email address" />
            </span>
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-name" className="Form-content__label">
              Name*
            </label>
            <input
              id="mail-name"
              name="mail-name"
              className={clsx("Form-content__input Form-content__input--name", {
                "Form-content__input--error":
                  messageShown && state.errors?.name,
              })}
              required
              minLength={2}
              placeholder="Your name"
              type="text"
            />
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-email" className="Form-content__label">
              Email
            </label>
            <input
              id="mail-email"
              type="email"
              name="mail-email"
              className={clsx(
                "Form-content__input Form-content__input--email",
                {
                  "Form-content__input--error":
                    messageShown && state.errors?.email,
                }
              )}
              placeholder="Your email address"
            />
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-company" className="Form-content__label">
              Company
            </label>
            <input
              id="mail-company"
              type="text"
              name="mail-company"
              className={clsx(
                "Form-content__input Form-content__input--company",
                {
                  "Form-content__input--error":
                    messageShown && state.errors?.company,
                }
              )}
              placeholder="Company you are from"
              autoComplete="off"
            />
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-message" className="Form-content__label">
              Message*
            </label>
            <textarea
              id="mail-message"
              name="mail-message"
              className={clsx(
                "Form-content__input Form-content__input--message",
                {
                  "Form-content__input--error":
                    messageShown && state.errors?.mailMessage,
                }
              )}
              placeholder="Your message..."
              minLength={5}
              required
              rows={4}
              autoComplete="off"
            />
          </div>
          <div className="Form-content__group Form-content__group--submit">
            <div
              className={clsx("Form-message", {
                "Form-message--error": Object.keys(state.errors || {}).length,
              })}
              aria-live="polite"
              aria-atomic="true"
            >
              {state.message && messageShown && <span>{state.message}</span>}
            </div>
            <input
              type="submit"
              value={"Send email"}
              className="Form-content__submit"
            />
          </div>
        </div>
        <FormSidebar />
      </form>
    </section>
  );
};

export default ContactMe;
