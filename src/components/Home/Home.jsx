import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LangContext';
import './Home.css';

export default function Home() {
  const { lang, t } = useLang();
  const h = t.home;

  const [activeService, setActiveService] = useState(null);

  const serviceDetails = {
    lt: ['Gelinis lakavimas, kombinuotas manikiūras, dizainas', 'Kojų nagų priežiūra ir dizainas', 'Nagų priauginimas kietosiomis medžiagomis', 'Unikalūs nagų dizainai'],
    ru: ['Гель-лак, комбинированый маникюр, дизайн', 'Уход за ногтями ног и дизайн', 'Наращивание твердыми материалами', 'Уникальные дизайны на ногтях'],
    en: ['Gel polish, combi manicure, nail art', 'Foot nail care and design', 'Extensions with gel', 'Unique nail designs'],
  };

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">{h.eyebrow}</p>
          <h1>
            <span className="hero-script">{h.script}</span>
            <span className="hero-caps">
              {h.caps.split('\n').map((line, i) => (
                <span key={i}>{line}{i < h.caps.split('\n').length - 1 && <br />}</span>
              ))}
            </span>
          </h1>
          <p className="hero-desc">{h.desc}</p>
          <Link to="/contact" className="btn-primary">{h.cta}</Link>
        </div>
        <div className="hero-image">
          <img src="/img/atmosth.jpg" alt="Darja" />
          <div className="hero-badge">
            <span className="badge-script">Darja</span>
            <span className="badge-text">1+ METŲ PATIRTIS</span>
          </div>
        </div>
      </section>

      <section className="services-strip">
        {h.services.map((s, i) => (
          <div
            key={i}
            className={`service-item ${activeService === i ? 'active' : ''}`}
            onClick={() => setActiveService(activeService === i ? null : i)}
          >
            <span className="service-dot" />
            <span>{s}</span>
            {activeService === i && (
              <span className="service-detail">{serviceDetails[lang][i]}</span>
            )}
          </div>
        ))}
      </section>

<section className="portfolio-section">
  <div className="section-header">
    <span className="section-script">{h.portfolioScript}</span>
    <h2 className="section-caps">{h.portfolioCaps}</h2>
  </div>
  <div className="portfolio-grid">
    <div key={1} className="portfolio-card">
      <img src="/img/korekcija.jpg" alt="Nail work" />
    </div>
    <div key={2} className="portfolio-card">
      <img src="/img/nude.jpg" alt="Nail work" />
    </div>
    <div key={3} className="portfolio-card">
      <img src="/img/blue-french.jpg" alt="Nail work" />
    </div>
    <div key={4} className="portfolio-card">
      <img src="/img/manicure.jpg" alt="Nail work" />
    </div>
    <div key={5} className="portfolio-card">
      <img src="/img/french.jpg" alt="Nail work" />
    </div>
    <div key={6} className="portfolio-card">
      <img src="/img/cat.jpg" alt="Nail work" />
    </div>
  </div>
</section>

      <section className="cta-banner">
        <span className="cta-script">{h.bannerScript}</span>
        <h2 className="cta-title">{h.bannerTitle}</h2>
        <Link to="/contact" className="btn-outline">{h.bannerBtn}</Link>
      </section>

    </div>
  );
}