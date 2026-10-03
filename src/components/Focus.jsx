import { focusAreas } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Focus() {
  return (
    <section className="section" id="focus" aria-labelledby="focus-title">
      <div className="container">
        <Reveal>
          <h2 className="section-title" id="focus-title">What I focus on</h2>
        </Reveal>
        <ul className="focus-grid">
          {focusAreas.map((f) => (
            <Reveal as="li" className="card focus-card" key={f.title}>
              <span className="focus-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
