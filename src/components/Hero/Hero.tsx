import { profile } from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero__greeting">Hi, I'm</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__title">{profile.title}</p>
      <p className="hero__blurb">{profile.blurb}</p>

      <div className="hero__actions">
        <a className="button button_primary" href="#projects">
          View my work
        </a>
        <a className="button button_secondary" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
