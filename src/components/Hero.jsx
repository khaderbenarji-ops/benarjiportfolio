import { focusAreas, profile } from '../data.js';

export default function Hero() {
  const resumeHref = profile.resumeFile ? `${import.meta.env.BASE_URL}${profile.resumeFile}` : '';

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hello">Hi, I'm</p>
          <h1 id="hero-title">
            <span>Kottapalli</span>
            <span>Khadarbenerji</span>
          </h1>
          <p className="role">{profile.role}</p>
          <p className="sub">
            Building towards Generative AI and LLM applications, Python development, and software and web development.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Contact me</a>
            {resumeHref && (
              <a className="btn btn-secondary" href={resumeHref} download>Download resume</a>
            )}
            {!resumeHref && <a className="btn btn-secondary" href="#projects">See projects</a>}
          </div>
        </div>

        {/* Chat-style card: the one animated element. Uses only facts from your profile. */}
        <div
          className="chat"
          role="img"
          aria-label={`A short chat: asked what ${profile.firstName} works on, the answer lists ${focusAreas.map((f) => f.title).join(', ')}.`}
        >
          <div className="chat-top" aria-hidden="true">
            <span className="dot"></span>
            <span>profile assistant</span>
          </div>
          <div className="chat-body" aria-hidden="true">
            <div className="bubble user">What does {profile.firstName} work on?</div>
            <div className="bubble bot">
              <p>He is a B.Tech student in CSE (AI &amp; DS), 2023–2027, focused on:</p>
              <ul>
                {focusAreas.map((f) => (
                  <li key={f.title}>{f.title}</li>
                ))}
              </ul>
            </div>
            <div className="typing"><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
