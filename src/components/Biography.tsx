interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "My name is Anastasia Ivleva, and I am a play-based child psychologist specializing in working with children who have developmental features, psycho-speech and speech delays, as well as children with autism spectrum disorders.",
      "I work with children from 2 to 12 years old. Play is the primary language of childhood — it is through play that children express their feelings, process experiences, and learn to interact with the world. My sessions are built on this natural foundation.",
      "My approach combines play therapy, art therapy, sand therapy, and developmental techniques adapted to each child individually. I create a safe, warm space where every child can feel accepted and understood.",
      "I work not only with children, but also actively support parents — consultations and recommendations for daily interaction with the child are an important part of my work.",
    ],
    credentials: [
      "Higher psychological education",
      "Specialization in play therapy and child development",
      "Work with children with ASD and speech delays",
      "Individual approach to each family",
    ],
    credentialsTitle: "Education & Approach",
  },
  de: {
    heading: "Über mich",
    paragraphs: [
      "Mein Name ist Anastasia Ivleva, ich bin Kinderspieltherapeutin und spezialisiert auf die Arbeit mit Kindern, die Entwicklungsbesonderheiten, psycho-sprachliche und sprachliche Verzögerungen sowie Autismus-Spektrum-Störungen haben.",
      "Ich arbeite mit Kindern von 2 bis 12 Jahren. Das Spiel ist die Hauptsprache der Kindheit — durch das Spiel drücken Kinder ihre Gefühle aus, verarbeiten Erfahrungen und lernen, mit der Welt zu interagieren.",
      "Mein Ansatz kombiniert Spieltherapie, Kunsttherapie, Sandtherapie und Entwicklungstechniken, die individuell an jedes Kind angepasst werden. Ich schaffe einen sicheren, warmen Raum, in dem sich jedes Kind akzeptiert und verstanden fühlen kann.",
      "Ich arbeite nicht nur mit Kindern, sondern unterstütze auch aktiv Eltern — Beratungen und Empfehlungen für die tägliche Interaktion mit dem Kind sind ein wichtiger Teil meiner Arbeit.",
    ],
    credentials: [
      "Höhere psychologische Ausbildung",
      "Spezialisierung auf Spieltherapie und Kinderentwicklung",
      "Arbeit mit Kindern mit ASD und Sprachverzögerungen",
      "Individueller Ansatz für jede Familie",
    ],
    credentialsTitle: "Ausbildung & Ansatz",
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Меня зовут Анастасия Ивлева, я — детский игровой психолог, специализирующийся на работе с детьми с особенностями развития, задержками психо-речевого и речевого развития, а также с детьми с расстройствами аутистического спектра.",
      "Я работаю с детьми от 2 до 12 лет. Игра — это главный язык детства: именно через неё дети выражают свои чувства, проживают опыт и учатся взаимодействовать с миром. Мои занятия строятся на этой природной основе.",
      "Мой подход сочетает игровую терапию, арт-терапию, песочную терапию и развивающие методики, адаптированные под каждого ребёнка индивидуально. Я создаю безопасное, тёплое пространство, где каждый ребёнок может чувствовать себя принятым и понятым.",
      "Я работаю не только с детьми, но и активно поддерживаю родителей — консультации и рекомендации по ежедневному взаимодействию с ребёнком являются важной частью моей работы.",
    ],
    credentials: [
      "Высшее психологическое образование",
      "Специализация по игровой терапии и детскому развитию",
      "Работа с детьми с РАС и задержками речи",
      "Индивидуальный подход к каждой семье",
    ],
    credentialsTitle: "Образование и подход",
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <div className="line-accent mb-6"></div>
            <h3 className="text-charcoal mb-6">{t.credentialsTitle}</h3>
            <ul className="space-y-4">
              {t.credentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold mt-1">—</span>
                  <span className="text-charcoal/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
