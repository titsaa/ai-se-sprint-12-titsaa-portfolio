import { skillGroups } from "../../data/skills";
import "./Skills.css";

export function Skills() {
  return (
    <section className="skills section section_alt" id="skills">
      <p className="section__eyebrow">What I work with</p>
      <h2 className="section__title">Skills</h2>

      <ul className="skills__groups">
        {skillGroups.map((group) => (
          <li className="skills__group" key={group.category}>
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__items">
              {group.items.map((item) => (
                <li className="skills__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
