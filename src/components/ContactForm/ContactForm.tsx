import type { FormEvent } from "react";
import { profile } from "../../data/profile";
import "./ContactForm.css";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\nFrom: ${name} <${email}>`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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

      <button className="button contact-form__submit" type="submit">
        Send message
      </button>
    </form>
  );
}
