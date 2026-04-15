interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "Anastasia Ivleva",
    subtitle: "Child Play Psychologist",
    description: "Helping children with developmental features, speech and psycho-speech delays — through play, warmth and care",
    cta: "Book a Consultation",
  },
  de: {
    title: "Anastasia Ivleva",
    subtitle: "Kinderspieltherapeutin",
    description: "Ich helfe Kindern mit Entwicklungsbesonderheiten, Sprach- und psycho-sprachlichen Verzögerungen — durch Spiel, Wärme und Fürsorge",
    cta: "Beratung buchen",
  },
  ru: {
    title: "Анастасия Ивлева",
    subtitle: "Детский игровой психолог",
    description: "Помогаю детям с особенностями развития, задержками психо-речевого и речевого развития — через игру, тепло и заботу",
    cta: "Записаться на консультацию",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/651d03f0-de64-433a-bbaf-96fa493e2803.jpg"
          alt="Анастасия Ивлева — детский психолог"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-charcoal/45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fade-in-up">{t.title}</h1>
          <h3 className="text-white font-light mb-8 animate-fade-in-up animation-delay-100">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200"></div>
          <p className="text-white font-light max-w-2xl mb-16 animate-fade-in-up animation-delay-300">{t.description}</p>

          <div className="flex gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="bg-gold text-charcoal px-8 py-3 font-medium hover:bg-gold/90 transition-colors duration-300"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
