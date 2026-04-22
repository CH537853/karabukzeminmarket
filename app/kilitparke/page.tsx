import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import LandingGallery from '@/components/LandingGallery'
import PhoneCTA from '@/components/PhoneCTA'

export const metadata: Metadata = {
  title: 'Kilitparke & Bordür Fiyatları — Karabük',
  description:
    'Karabük\'te kilitparke döşeme ve bordür hizmeti. Yüksek kaliteli taş, profesyonel montaj. Zemin Yapı Market\'ten ücretsiz fiyat teklifi alın.',
  keywords: ['kilitparke Karabük', 'kilitparke fiyatları', 'bordür taşı', 'zemin kaplama Karabük'],
}

const BASE = 'https://static.wixstatic.com/media/'

const images = [
  { src: BASE + '84e227_3ee74e12029248699a57889657fc1560~mv2.jpg', alt: 'Renkli kilitparke proje uygulaması' },
  { src: BASE + '84e227_d1061c0d41594a6e825059e58b35d40e~mv2.jpg', alt: 'Kilitparke zemin tasarımı' },
  { src: BASE + '84e227_6c915557ee8e4a77a6db8ae6adebb889~mv2.jpg', alt: 'Kilitparke döşeme uygulaması' },
]

const features = [
  { icon: '💎', title: 'Yüksek Kalite', desc: 'Yüksek basınç kalıbı' },
  { icon: '🎨', title: 'Renk & Desen', desc: 'Geniş renk seçeneği' },
  { icon: '🦺', title: 'Profesyonel', desc: 'Deneyimli uygulama ekibi' },
  { icon: '⏱️', title: 'Hızlı Teslim', desc: 'Zamanında bitirme garantisi' },
]

export default function KilitparkePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative bg-[#111] py-24 text-center overflow-hidden">
        <Image
          src={BASE + '84e227_3ee74e12029248699a57889657fc1560~mv2.jpg'}
          alt="Kilitparke döşeme"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10">
          <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Ücretsiz Keşif
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Kilitparke & Bordür<br />
            <span className="text-amber-400">Karabük'te Döşüyoruz</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto px-4 text-lg">
            Bahçe, yol, park ve çevre düzenlemesi için kaliteli kilitparke ve bordür. Hemen fiyat öğrenin.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-amber-50 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <div className="font-bold text-[#111] text-sm">{f.title}</div>
              <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone CTA */}
      <PhoneCTA />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#111] mb-2">Ücretsiz Teklif Alın</h2>
              <p className="text-gray-500 text-sm mb-6">Formu doldurun, en kısa sürede WhatsApp'tan dönüş yapalım.</p>
              <ContactForm compact />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#111] mb-3">Kilitparke Hizmetlerimiz</h2>
                <ul className="space-y-3">
                  {[
                    'Standart ve renkli kilitparke seçenekleri',
                    'Bahçe ve yaya yolu bordür taşı',
                    'Malzeme + montaj dahil anahtar teslim',
                    'Kayma yapmaz yüzey, uzun ömürlü',
                    'Belediye onaylı standart malzeme',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery strip */}
              <LandingGallery images={images} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
