import { useState } from 'react';
import { useLang } from '../../i18n/LangContext';
import './About.css';

export default function About() {
  const { t } = useLang();
  const a = t.about;

 
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-image">
          <img src="/img/master-ava.jpg" alt="Darja" />
        </div>
        <div className="about-intro">
          <p className="about-eyebrow">{a.eyebrow}</p>
          <h1>
            <span className="about-script">{a.script}</span>
            <span className="about-caps">{a.caps}</span>
          </h1>
          <p className="about-bio">{a.bio1}</p>

          {showMore && (
            <p className="about-bio about-bio--extra">{a.bio2}</p>
          )}

          <button
            className="btn-more"
            onClick={() => setShowMore(s => !s)}
          >
            {showMore ? '↑' : '+ Skaityti daugiau'}
          </button>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-header">
          <span className="section-script">{a.skillsScript}</span>
          <h2 className="section-caps">{a.skillsCaps}</h2>
        </div>
        <div className="skills-grid">
          {a.skills.map(s => (
            <div key={s} className="skill-tag">{s}</div>
          ))}
        </div>
      </section>

      <section className="values-section">
        {a.stats.map(({ n, label }) => (
          <div key={n} className="value-item">
            <span className="value-script">{n}</span>
            <span className="value-label">{label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}