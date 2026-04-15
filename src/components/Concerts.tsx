interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Services",
    bookNow: "Book Now",
    duration: "Duration",
    format: "Format",
  },
  de: {
    heading: "Leistungen",
    bookNow: "Jetzt buchen",
    duration: "Dauer",
    format: "Format",
  },
  ru: {
    heading: "Услуги",
    bookNow: "Записаться",
    duration: "Длительность",
    format: "Формат",
  },
}

const services = {
  en: [
    {
      title: "Initial Consultation",
      description: "Diagnosis and evaluation of the child's development level, history gathering, recommendations for parents",
      duration: "60 min",
      format: "In-person / Online",
    },
    {
      title: "Play Therapy Session",
      description: "Individual therapeutic session using play, art therapy and sand therapy methods",
      duration: "45–60 min",
      format: "In-person",
    },
    {
      title: "Speech Development",
      description: "Work on psycho-speech and speech delays using play-based techniques and sensory methods",
      duration: "45 min",
      format: "In-person",
    },
    {
      title: "Parent Consultation",
      description: "Recommendations for interaction with the child, answer questions, create a development plan",
      duration: "60 min",
      format: "In-person / Online",
    },
  ],
  de: [
    {
      title: "Erstberatung",
      description: "Diagnose und Beurteilung des Entwicklungsstandes des Kindes, Anamnese, Empfehlungen für Eltern",
      duration: "60 Min.",
      format: "Vor Ort / Online",
    },
    {
      title: "Spieltherapiesitzung",
      description: "Individuelle therapeutische Sitzung mit Spiel-, Kunst- und Sandtherapiemethoden",
      duration: "45–60 Min.",
      format: "Vor Ort",
    },
    {
      title: "Sprachentwicklung",
      description: "Arbeit an psycho-sprachlichen und sprachlichen Verzögerungen mit spielerischen und sensorischen Methoden",
      duration: "45 Min.",
      format: "Vor Ort",
    },
    {
      title: "Elternberatung",
      description: "Empfehlungen für die Interaktion mit dem Kind, Beantwortung von Fragen, Erstellung eines Entwicklungsplans",
      duration: "60 Min.",
      format: "Vor Ort / Online",
    },
  ],
  ru: [
    {
      title: "Первичная консультация",
      description: "Диагностика и оценка уровня развития ребёнка, сбор анамнеза, рекомендации для родителей",
      duration: "60 мин",
      format: "Очно / Онлайн",
    },
    {
      title: "Игровая терапия",
      description: "Индивидуальное терапевтическое занятие с использованием методов игровой терапии, арт-терапии и песочной терапии",
      duration: "45–60 мин",
      format: "Очно",
    },
    {
      title: "Развитие речи",
      description: "Работа с задержками психо-речевого и речевого развития с помощью игровых и сенсорных методик",
      duration: "45 мин",
      format: "Очно",
    },
    {
      title: "Консультация для родителей",
      description: "Рекомендации по взаимодействию с ребёнком, ответы на вопросы, составление плана развития",
      duration: "60 мин",
      format: "Очно / Онлайн",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const serviceList = services[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <small className="text-taupe block mb-1">{t.duration}</small>
                  <h3 className="text-charcoal">{service.duration}</h3>
                  <small className="text-taupe mt-2 block">{t.format}: {service.format}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-2">{service.title}</h3>
                  <p className="text-charcoal/70">{service.description}</p>
                </div>
                <div className="flex justify-start md:justify-end">
                  <a
                    href="#contact"
                    className="text-gold hover:text-gold/80 transition-colors text-sm font-medium"
                  >
                    {t.bookNow} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
