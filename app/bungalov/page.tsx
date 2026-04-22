import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import LandingGallery from '@/components/LandingGallery'
import PhoneCTA from '@/components/PhoneCTA'

export const metadata: Metadata = {
  title: 'Ahşap Ev & Bungalov Fiyatları — Karabük',
  description:
    'Karabük\'te ahşap ev ve bungalov yaptırmak isteyenler için ücretsiz keşif ve teklif. Zemin Yapı Market ile hayalinizdeki ahşap yapıya kavuşun.',
  keywords: ['ahşap ev Karabük', 'bungalov fiyatları', 'ahşap bungalov yapımı', 'tatil evi ahşap'],
}

const BASE = 'https://static.wixstatic.com/media/'

const images = [
  { src: BASE + '84e227_0c5ee6041f7f4f989355ddb1ca950a87f000.jpg', alt: 'A-frame bungalov showroom' },
  { src: BASE + '84e227_e5d0542c70cf498ba16a0374a1627dd6f000.jpg', alt: 'Modern A-frame bungalov' },
  { src: BASE + '84e227_ec47747597914d809facb7045ea0ac28f000.jpg', alt: 'Bungalov teslim' },
  { src: BASE + '84e227_eb144c585b3241ec9c04b0bc651bb2c9f000.jpg', alt: 'Geniş ahşap bungalov' },
  { src: BASE + '84e227_5d4899d2cab1444a94a45f0ed4f81b89f000.jpg', alt: 'Bungalov projesi' },
  { src: BASE + '84e227_09d7a5cf85264ca1a1a93fef6244e009~mv2.jpg', alt: 'Bungalov iç mekan' },
  { src: BASE + '84e227_b1a955b18a6d4ed5b223a6456638933c~mv2.jpg', alt: 'Yeşil çatılı bungalov' },
]

const features = [
  { icon: '🌲', title: 'Doğal Ahşap', desc: 'Sertifikalı, dayanıklı ahşap malzeme' },
  { icon: '📐', title: 'Özel Tasarım', desc: 'İsteğinize göre ölçü ve plan' },
  { icon: '🏡', title: 'Hızlı Montaj', desc: 'Zamanında ve eksiksiz teslim' },
  { icon: '🔥', title: 'Yalıtım', desc: 'Isı ve ses yalıtımı seçeneği' },
]

export default function BungalovPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-[#111] py-24 text-center overflow-hidden">
        <Image
          src={BASE + '84e227_0c5ee6041f7f4f989355ddb1ca950a87f000.jpg'}
          alt="Ahşap bungalov"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10">
          <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Ücretsiz Keşif
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ahşap Ev & Bungalov<br />
            <span className="text-amber-400">Karabük'te Yapıyoruz</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto px-4 text-lg">
            Müstakil ahşap evden tatil bungalovuna, hayalinizdeki yapıyı inşa ediyoruz. Hemen teklif alın.
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
                <h2 className="text-2xl font-extrabold text-[#111] mb-3">Neden Zemin Yapı Market?</h2>
                <ul className="space-y-3">
                  {[
                    'Karabük ve çevresinde 5+ yıllık deneyim',
                    '100\'den fazla tamamlanan proje',
                    'Müşteri talepleri doğrultusunda özel tasarım',
                    'Kaliteli ahşap, sağlam işçilik garantisi',
                    'Montaj dahil anahtar teslim hizmet',
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
