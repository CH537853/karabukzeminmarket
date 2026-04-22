const phones = [
  { display: '0542 233 83 81', href: 'tel:+905422338381' },
  { display: '0530 965 03 04', href: 'tel:+905309650304' },
]

export default function PhoneCTA() {
  return (
    <section className="bg-gradient-to-br from-amber-700 to-amber-900 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/15 rounded-full p-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
        </div>

        <p className="text-amber-200 text-xs font-bold uppercase tracking-widest mb-2">
          Ücretsiz Teklif
        </p>
        <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-2 leading-tight">
          Hemen Arayın, Fiyat Öğrenin
        </h2>
        <p className="text-amber-200/80 text-sm mb-8">
          Numara&apos;ya dokunun — telefon uygulaması anında açılır.
        </p>

        {/* Phone Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {phones.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="flex items-center justify-center gap-3 bg-white text-amber-800 font-extrabold text-xl rounded-2xl px-8 py-5 shadow-xl hover:bg-amber-50 active:scale-95 transition-all duration-150 w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 flex-shrink-0 text-amber-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {p.display}
            </a>
          ))}
        </div>

        <p className="text-amber-300/60 text-xs mt-5">
          Pazartesi–Cumartesi 08:00–18:00 arası ulaşabilirsiniz.
        </p>
      </div>
    </section>
  )
}
