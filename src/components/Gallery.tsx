import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Gallery",
  },
  de: {
    heading: "Galerie",
  },
  ru: {
    heading: "Галерея",
  },
}

const galleryItems = {
  en: [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/651d03f0-de64-433a-bbaf-96fa493e2803.jpg",
      title: "About the Specialist",
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/82b9654d-9642-47cc-928f-4590d0fb7de7.jpg",
      title: "Play Therapy",
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/384a3e5e-aead-404c-bfd5-2b0d8754f5c7.jpg",
      title: "Speech Development",
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/5f790941-71fa-4123-9cfa-ff015932a7a5.jpg",
      title: "Art Therapy",
    },
    {
      id: 5,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/09bc3ab1-5bb9-456a-a893-52e71e98a1f7.jpg",
      title: "Sand Therapy",
    },
  ],
  de: [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/651d03f0-de64-433a-bbaf-96fa493e2803.jpg",
      title: "Über die Spezialistin",
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/82b9654d-9642-47cc-928f-4590d0fb7de7.jpg",
      title: "Spieltherapie",
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/384a3e5e-aead-404c-bfd5-2b0d8754f5c7.jpg",
      title: "Sprachentwicklung",
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/5f790941-71fa-4123-9cfa-ff015932a7a5.jpg",
      title: "Kunsttherapie",
    },
    {
      id: 5,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/09bc3ab1-5bb9-456a-a893-52e71e98a1f7.jpg",
      title: "Sandtherapie",
    },
  ],
  ru: [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/651d03f0-de64-433a-bbaf-96fa493e2803.jpg",
      title: "О специалисте",
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/82b9654d-9642-47cc-928f-4590d0fb7de7.jpg",
      title: "Игровая терапия",
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/384a3e5e-aead-404c-bfd5-2b0d8754f5c7.jpg",
      title: "Развитие речи",
    },
    {
      id: 4,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/5f790941-71fa-4123-9cfa-ff015932a7a5.jpg",
      title: "Арт-терапия",
    },
    {
      id: 5,
      image: "https://cdn.poehali.dev/projects/25534baf-f7f1-4b58-80ee-2b790e56ced9/files/09bc3ab1-5bb9-456a-a893-52e71e98a1f7.jpg",
      title: "Песочная терапия",
    },
  ],
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden bg-charcoal/5 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <small className="text-charcoal/70 font-medium">{item.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
