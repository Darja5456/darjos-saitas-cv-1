import { useRef, useState, useEffect } from 'react';
import { useLang } from '../../i18n/LangContext';
import './Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;

  const formRef = useRef(null);                    // ← ссылка на форму
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Инициализация EmailJS (лучше делать в App.jsx, но можно и здесь)
  useEffect(() => {
    emailjs.init({
      publicKey: 'H6Qp0M_npMBUZr_jO',   // ← рекомендуется
      // или напрямую: publicKey: 'H6Qp0M_npMBUZr_jO',
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_8k82kxc',           // твой Service ID
        'booking_template',          // твой Template ID
        formRef.current              // ссылка на <form>
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSent(true);
          // Очищаем форму
          setFormData({ name: '', phone: '', service: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Ошибка при отправке. Пожалуйста, попробуйте позже.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <p className="contact-eyebrow">{c.eyebrow}</p>
        <h1>
          <span className="contact-script">{c.script}</span>
          <span className="contact-caps">{c.caps}</span>
        </h1>
      </section>

      <section className="contact-body">
        <div className="contact-info">
          {/* твой блок с информацией */}
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <span className="success-script">{c.successScript}</span>
              <p>{c.successMsg}</p>
            </div>
          ) : (
            <form 
              ref={formRef}                    // ← важно!
              className="contact-form" 
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">{f.name}</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder={f.namePh} 
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">{f.phone}</label>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    required
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder={f.phonePh} 
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="service">{f.service}</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                  required
                >
                  <option value="">{f.serviceDefault}</option>
                  {f.services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">{f.msg}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder={f.msgPh} 
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSending}
              >
                {isSending ? 'Отправляем...' : f.submit}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}