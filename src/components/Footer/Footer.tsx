import { profile } from "../../data/profile";
import { Contact } from "../Contact/Contact";
import { ContactForm } from "../ContactForm/ContactForm";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer section" id="contact">
      <p className="section__eyebrow footer__eyebrow">Contact</p>
      <h2 className="section__title footer__title">Let's work together</h2>
      <p className="footer__text">
        I'm open to full-stack and frontend developer roles. Whether you have an
        opportunity, a project, or just a question, send me a message and I'll
        get back to you.
      </p>

      <ContactForm />
      <Contact />

      <p className="footer__copyright">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
