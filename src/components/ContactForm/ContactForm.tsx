import { useState, type FormEvent } from "react";
import { profile } from "../../data/profile";
import "./ContactForm.css";

type Status = "idle" | "sending" | "sent" | "error";

const statusMessages: Record<Status, string> = {
  idle: "",
  sending: "",
  sent: "Thanks! Your message has been sent. I'll get back to you soon.",
  error: "Something went wrong. Please try again in a moment.",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(profile.contactFormUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label className="contact-form__field">
          <span className="contact-form__label">Name</span>
          <input
            className="contact-form__input"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className="contact-form__field">
          <span className="contact-form__label">Email</span>
          <input
            className="contact-form__input"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className="contact-form__field">
        <span className="contact-form__label">Message</span>
        <textarea
          className="contact-form__input contact-form__textarea"
          name="message"
          rows={5}
          required
        />
      </label>

      {/* Honeypot field: Formspree discards submissions where it's filled in */}
      <input
        className="contact-form__honeypot"
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        className="button contact-form__submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="contact-form__status" role="status">
        {statusMessages[status]}
      </p>
    </form>
  );
}
