import { useLayoutEffect, useRef, useState } from "react";
import { toast } from "sonner";

import {
  isValidContactEmail,
  isValidContactMessage,
  isValidContactName,
  type ContactFormFields,
} from "../lib/contact";

const FIELD_VALIDATORS: Record<
  keyof ContactFormFields,
  (value: string) => boolean
> = {
  name: isValidContactName,
  email: isValidContactEmail,
  message: isValidContactMessage,
};

const fieldInputClassName = "field-input";

const ContactForm = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasAttemptedSubmit = useRef(false);

  const [form, setForm] = useState<ContactFormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  useLayoutEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    el.style.overflowY = "hidden";
    el.style.height = "auto";

    const nextHeight = el.scrollHeight;
    const maxHeight = Number.parseFloat(getComputedStyle(el).maxHeight);

    if (Number.isFinite(maxHeight) && nextHeight >= maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
      return;
    }

    el.style.height = `${nextHeight}px`;
  }, [form.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof ContactFormFields;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (!hasAttemptedSubmit.current) return;

    const isInvalid = !FIELD_VALIDATORS[field](value);
    setFieldErrors((prev) =>
      prev[field] === isInvalid ? prev : { ...prev, [field]: isInvalid }
    );
  };

  const validateForm = () => {
    hasAttemptedSubmit.current = true;

    const nextErrors = {
      name: !isValidContactName(form.name),
      email: !isValidContactEmail(form.email),
      message: !isValidContactMessage(form.message),
    };

    setFieldErrors(nextErrors);

    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    toast.success("Thanks for reaching out! I look forward to connecting soon.");
  };

  return (
    <>
      <p className="mt-3 text-lg text-white-600">
        Whether you&apos;re looking to build a new website, improve your
        existing platform, or bring a unique project to life, I&apos;m here to
        help.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col space-y-7"
      >
        <label className="space-y-3" htmlFor="name">
          <span className="field-label">Full name</span>

          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={fieldInputClassName}
            placeholder="John Doe"
            autoCapitalize="on"
            maxLength={200}
            aria-invalid={fieldErrors.name}
            aria-describedby="name-error"
          />

          <span
            className={`text-red-400 ${fieldErrors.name ? "block" : "hidden"}`}
            id="name-error"
          >
            Invalid Name!
          </span>
        </label>

        <label className="space-y-3" htmlFor="email">
          <span className="field-label">Email</span>

          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={fieldInputClassName}
            placeholder="john.doe@email.com"
            autoCapitalize="off"
            maxLength={100}
            aria-invalid={fieldErrors.email}
            aria-describedby="email-error"
          />

          <span
            className={`text-red-400 ${fieldErrors.email ? "block" : "hidden"}`}
            id="email-error"
          >
            Invalid Email!
          </span>
        </label>

        <label className="space-y-3" htmlFor="message">
          <span className="field-label">Your message</span>

          <textarea
            ref={messageRef}
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`${fieldInputClassName} max-h-60 resize-none overflow-hidden`}
            placeholder="Hi, I'm interested in..."
            autoCapitalize="on"
            maxLength={500}
            aria-invalid={fieldErrors.message}
            aria-describedby="message-error"
          />

          <span
            className={`text-red-400 ${
              fieldErrors.message ? "block" : "hidden"
            }`}
            id="message-error"
          >
            Invalid Message!
          </span>
        </label>

        <button type="submit" className="field-btn">
          Submit
          <img
            src="/assets/arrow-up.png"
            alt="Arrow"
            className="field-btn_arrow"
          />
        </button>
      </form>
    </>
  );
};

export const Contact = () => {
  return (
    <section className="my-20 c-space" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="absolute inset-0 h-full min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
