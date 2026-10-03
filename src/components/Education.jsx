import { education } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="edu-title">
      <div className="container split">
        <Reveal>
          <h2 className="section-title" id="edu-title">Education</h2>
        </Reveal>
        <ul className="edu-list">
          {education.map((item) => (
            <Reveal as="li" className="card edu-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="school">{item.school}</p>
              <div className="pills">
                {item.pills.map((p) => (
                  <span className="pill" key={p}>{p}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
