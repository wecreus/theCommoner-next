"use client";

import "./Contact.scss";
import { useActionState, useEffect, useState, useRef } from "react";
import FormSidebar from "@/app/ui/FormSiderbar/FormSidebar";
import { sendEmail } from "@/app/lib/actions";
import clsx from "clsx";

// TODO: update links across the website

// TODO: validate with zod the minLength and display custom error

const initialState = { message: "", errors: {} };
const ContactMe = () => {
  
  const [messageShown, setMessageShown] = useState(true);
  const [state, dispatch] = useActionState(sendEmail, initialState);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  useEffect(() => {
    if(!!Object.keys(state.message)) {
      setMessageShown(true);

      if(timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        setMessageShown(false);
      }, 3000);
    }
  
    return () => {
      timer.current && clearTimeout(timer.current)
    };
  }, [state]);

  return (
    <section className="section Contact">
      <form className="Form" action={dispatch}>
        <div className="Form-content">
          <div className="Form-content__group">
            <span className="Form-content__title">
              <b>Would love to hear from you</b>
            </span>
          </div>
          <div className="Form-content__group">
            <label htmlFor="mail-name" className="Form-content__label">
              Name*
            </label>
            <input
              id="mail-name"
              name="mail-name"
              className="Form-content__input Form-content__input--name"
              required
              placeholder="Your name"
              type="text"
              
              autoComplete="off"
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
              className="Form-content__input Form-content__input--company"
              placeholder="Company"
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
              className="Form-content__input Form-content__input--message"
              placeholder="Your message..."
              minLength={5}
              required
              rows={6}
              autoComplete="off"
            />
          </div>
          <div className="Form-content__group Form-content__group--submit">
            <div className={clsx('Form-message', {
              'Form-message--error': Object.keys(state.errors).length,
            })} aria-live="polite" aria-atomic="true">
              {!!state.message && messageShown && <span>{state.message}</span>}
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
