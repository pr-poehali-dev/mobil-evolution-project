import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Contact",
    subheading: "Book a consultation or ask a question",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send Message",
    location: "Location",
    name: "Name",
    successMessage: "Message sent! I will contact you soon.",
    locationValue: "Moscow, Russia",
    phoneValue: "+7 (999) 000-00-00",
    emailValue: "ivleva@example.com",
    childAge: "Child's age (years)",
    concern: "What is your concern?",
  },
  de: {
    heading: "Kontakt",
    subheading: "Beratung buchen oder eine Frage stellen",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
    send: "Nachricht senden",
    location: "Standort",
    name: "Ihr Name",
    successMessage: "Nachricht gesendet! Ich melde mich bald bei Ihnen.",
    locationValue: "Moskau, Russland",
    phoneValue: "+7 (999) 000-00-00",
    emailValue: "ivleva@example.com",
    childAge: "Alter des Kindes (Jahre)",
    concern: "Was beschäftigt Sie?",
  },
  ru: {
    heading: "Контакты",
    subheading: "Запишитесь на консультацию или задайте вопрос",
    email: "Эл. почта",
    phone: "Телефон",
    message: "Ваш вопрос или пожелание",
    send: "Отправить",
    location: "Город",
    name: "Ваше имя",
    successMessage: "Сообщение отправлено! Свяжусь с вами в ближайшее время.",
    locationValue: "Москва, Россия",
    phoneValue: "+7 (999) 000-00-00",
    emailValue: "ivleva@example.com",
    childAge: "Возраст ребёнка (лет)",
    concern: "Что вас беспокоит?",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", childAge: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Запись на консультацию от ${formData.name}`
    const body = `Имя: ${formData.name}\nEmail: ${formData.email}\nВозраст ребёнка: ${formData.childAge}\n\n${formData.message}`
    const mailtoLink = `mailto:${t.emailValue}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", childAge: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.email}</small>
              <p className="text-charcoal">{t.emailValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal rounded text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t.childAge}
                value={formData.childAge}
                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-3 font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
