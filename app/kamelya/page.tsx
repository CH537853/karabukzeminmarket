import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import LandingGallery from '@/components/LandingGallery'
import PhoneCTA from '@/components/PhoneCTA'

export const metadata: Metadata = {
  title: 'Ahşap Kamelya Fiyatları — Karabük',
  description:
    'Karabük\'te ahşap kamelya, pergola ve çardak yaptırın. Özel ölçü, montaj dahil teslim. Zemin Yapı Market\'ten ücretsiz teklif alın.',
  keywords: ['ahşap kamelya Karabük', 'kamelya fiyatları', 'pergola yapımı', 'çardak kamelya'],
}

const BASE = 'https://static.wixstatic.com/media/'

const images = [
  { src: BASE + '84e227_68f11fcb321642f5b113b32972a621e1f000.jpg', alt: 'Gerçek kamelya projesi' },
  { src: BASE + '84e227_604a9ea502c24f0590e4e0a330474084~mv2.jpg', alt: 'Tamamlanan kamelya projesi' },
  { src: BASE + '84e227_baaaa4c0a02c45e1a0e9115f46bc7e2df000.jpg', alt: 'Altıgen ahşap kamelya' },
  { src: BASE + '84e227_738b7791fc07483ca980e1229d03bb72~mv2.jpg', alt: 'Yeşil çatılı kamelya' },
  { src: BASE + '84e227_627739b214364676a27123a9864e9f71~mv2.jpg', alt: 'Kamelya tasarım görseli' },
]

const features = [
  { icon: '🌿', title: 'Doğal Ahşap', desc: 'Hava koşullarına dayanıklı' },
  { icon: '📐', title: 'Özel Ölçü', desc: 'Her alana uygun tasarım' },
  { icon: '🎨', title: 'Renk Seçimi', desc: 'İstediğiniz kaplama rengi' },
  { icon: '🔧', title: 'Montaj Dahil', desc: 'Anahtar teslim hizmet' },
]

export default function KamelyaPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative bg-[#111] py-24 text-center overflow-hidden">
        <Image
          src={BASE + '84e227_604a9ea502c24f0590e4e0a330474084~mv2.jpg'}
          alt="Ahşap kamelya"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10">
          <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Ücretsiz Keşif
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ahşap Kamelya &<br />
            <span className="text-amber-400">Pergola Yapıyoruz</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto px-4 text-lg">
            Bahçenize ve terasınıza hem gölge hem estetik katan özel ahşap kamelyalar. Hemen fiyat öğrenin.
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
                <h2 className="text-2xl font-extrabold text-[#111] mb-3">Kamelya Modelleri</h2>
                <ul className="space-y-3">
                  {[
                    'Klasik ahşap kamelya — sade ve şık',
                    'Lüks kamelya — geniş ve özel donanım',
                    'Pergola & çardak — modern gölge çözümü',
                    'İstediğiniz boyut ve modelde özel üretim',
                    'Zemin kaplama ile komple bahçe çözümü',
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
