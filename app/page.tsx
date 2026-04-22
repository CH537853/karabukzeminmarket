import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Anasayfa',
  description:
    "Zemin Yapı Market — Karabük, Bartın ve Kastamonu'da ahşap ev, bungalov, bahçe mobilyası ve kilitparke çözümleri.",
}

const WHATSAPP = 'https://wa.me/905422338381'

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const categories = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Ahşap Ev & Bungalov',
    description: 'Doğal ahşap malzemeyle hayalinizdeki evi veya bungalov tatil köyünü inşa ediyoruz.',
    href: '/bungalov',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Kamelyalar',
    description: 'Özel ölçü ve tasarımda ahşap kamelyalar. Bahçenize gölge ve estetik katıyoruz.',
    href: '/kamelya',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Bahçe Mobilyası',
    description: 'Salıncak, bank, orman masası ve daha fazlası. El yapımı, dayanıklı bahçe mobilyaları.',
    href: '/urunler#bahce-mobilyasi',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    title: 'Kilitparke & Bordür',
    description: 'Yüksek dayanımlı kilitparke ve bordürle alanlarınızı profesyonelce döşüyoruz.',
    href: '/kilitparke',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Özel Sipariş / Proje',
    description: 'Standart dışı her fikri gerçeğe dönüştürüyoruz. Hayalinizi anlatın, biz üretelim.',
    href: '/urunler#ozel-siparis',
  },
]

const whyUs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    title: 'Ustaca El İşçiliği',
    description: 'Yılların deneyimiyle her ürünü özenli ve titiz bir işçilikle teslim ediyoruz.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Kaliteli Malzeme',
    description: 'Sadece doğal ve sertifikalı malzemeler kullanıyoruz; kaliteden asla ödün vermiyoruz.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Bölgeye Özel Hizmet',
    description: "Karabük, Bartın ve Kastamonu'ya yakın konumumuzla hızlı ve güvenilir hizmet sunuyoruz.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Özel Sipariş Kabul',
    description: 'Her fikir ve her proje değerlidir. Sizi dinliyor, hayallerinizi gerçeğe dönüştürüyoruz.',
  },
]


const B = 'https://static.wixstatic.com/media/'

const heroImages = [
  B + '84e227_0c5ee6041f7f4f989355ddb1ca950a87f000.jpg',
  B + '84e227_b1a955b18a6d4ed5b223a6456638933c~mv2.jpg',
  B + '84e227_e5d0542c70cf498ba16a0374a1627dd6f000.jpg',
  B + '84e227_09d7a5cf85264ca1a1a93fef6244e009~mv2.jpg',
  B + '84e227_d72c4e16aff4473cbcb2300143bf3839f000.jpg',
  B + '84e227_fce236c1aa3e4b31abd2c63f987e4390f000.jpg',
]

const gallery = [
  { src: B + '84e227_0c5ee6041f7f4f989355ddb1ca950a87f000.jpg', alt: 'Ahşap bungalov projesi', label: 'Bungalov', tag: 'Ahşap Yapı' },
  { src: B + '84e227_627739b214364676a27123a9864e9f71~mv2.jpg', alt: 'Ahşap kamelya', label: 'Kamelya', tag: 'Kamelya' },
  { src: B + '84e227_141e29b4f8544f919fee6f7e3e7d6452~mv2.jpg', alt: 'El yapımı bahçe mobilyası', label: 'Bahçe Mobilyası', tag: 'El Yapımı' },
  { src: B + '84e227_d1061c0d41594a6e825059e58b35d40e~mv2.jpg', alt: 'Kilitparke zemin kaplama', label: 'Kilitparke', tag: 'Zemin Kaplama' },
  { src: B + '84e227_09d7a5cf85264ca1a1a93fef6244e009~mv2.jpg', alt: 'Bungalov iç mekan', label: 'Bungalov', tag: 'Ahşap Yapı' },
  { src: B + '84e227_68f11fcb321642f5b113b32972a621e1f000.jpg', alt: 'Ahşap kamelya projesi', label: 'Kamelya', tag: 'Kamelya' },
  { src: B + '84e227_604a9ea502c24f0590e4e0a330474084~mv2.jpg', alt: 'Kamelya üretim süreci', label: 'Kamelya', tag: 'Kamelya' },
  { src: B + '84e227_3ee74e12029248699a57889657fc1560~mv2.jpg', alt: 'Kilitparke döşeme uygulaması', label: 'Kilitparke', tag: 'Zemin Kaplama' },
  { src: B + '84e227_b1a955b18a6d4ed5b223a6456638933c~mv2.jpg', alt: 'Ahşap ev projesi', label: 'Ahşap Ev', tag: 'Ahşap Yapı' },
  { src: B + '84e227_830730154b1f46de9bc0445bf3b2da09~mv2.jpg', alt: 'Zemin Yapı Market showroom', label: 'Zemin Yapı Market', tag: 'Showroom' },
  { src: B + '84e227_54a88bab701c4245b05254a87ce6789a~mv2.jpg', alt: 'Bungalov iç ahşap detay', label: 'Bungalov', tag: 'Ahşap Yapı' },
  { src: B + '84e227_3224ea52f85a41bea8a4a24de8a24672~mv2.jpg', alt: 'Özel sipariş projesi', label: 'Özel Proje', tag: 'Özel Sipariş' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#111] pt-16 overflow-hidden">

        {/* Kayan ahşap ev görselleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-marquee flex h-full" style={{ width: 'max-content' }}>
            {[...heroImages, ...heroImages].map((src, i) => (
              <div key={i} className="relative h-full w-[560px] flex-shrink-0">
                <Image src={src} alt="" fill className="object-cover" sizes="560px" priority={i < 2} />
              </div>
            ))}
          </div>
          {/* Koyu katmanlar — metni okunur kılar */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111]/60 via-transparent to-[#111]/80" />
        </div>

        {/* Nokta doku */}
        <div
          className="absolute inset-0 opacity-[0.04] z-[1]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D97706 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-5">
            Zemin Yapı<br />
            <span className="text-amber-500">Market</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-semibold mb-3">
            Siz Hayal Edin, Biz Gerçekleştirelim
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Ahşap ev, bungalov, bahçe mobilyası ve kilitparke çözümleriyle yaşam alanlarınızı dönüştürüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/urunler"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-amber-900/30"
            >
              Ürünlerimizi İncele
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-green-900/30"
            >
              <WhatsAppIcon />
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
        {/* Stats şeridi */}
        <div className="absolute bottom-14 left-0 right-0 z-10 px-4">
          <div className="max-w-2xl mx-auto grid grid-cols-3 gap-0">
            {[
              { num: '100+', label: 'Proje' },
              { num: '%100', label: 'Memnuniyet' },
              { num: '5+', label: 'Yıl' },
            ].map((s, i) => (
              <div key={i} className={`text-center px-2 ${i < 2 ? 'border-r border-white/10' : ''}`}>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 leading-none">{s.num}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">Ürün & Hizmetlerimiz</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Geniş ürün yelpazemizle her ihtiyacınıza özel çözümler sunuyoruz.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((cat, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <Link
                  href={cat.href}
                  className="block h-full group bg-gray-50 hover:bg-[#111] border border-gray-100 hover:border-[#111] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="text-amber-600 group-hover:text-amber-400 mb-5 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-[#111] group-hover:text-white text-base mb-2 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                    {cat.description}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJELERİMİZ & ÜRÜNLERİMİZ GALERİSİ ── */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">
                Projelerimiz & Ürünlerimiz
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Tamamladığımız çalışmalar ve sattığımız ürünlerden örnekler.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {gallery.map((item, i) => (
              <AnimateOnScroll key={i} animation="zoom-in" delay={(i % 4) * 80}>
                <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm sm:text-base">{item.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="text-center mt-10">
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                Tüm Ürünleri Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── NEDEN BİZ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">
                Neden Zemin Yapı Market?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Her adımda kalite, güven ve müşteri memnuniyetini ön planda tutuyoruz.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center h-full">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-amber-600">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#111] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* ── KONUM / GOOGLE MAPS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">Neredeyiz?</h2>
              <p className="text-gray-500">
                Şht. Ateşe Reşat Blv. No:17, 78100 Merkez / Karabük
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="zoom-in" delay={150}>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md h-80">
              <iframe
                src="https://maps.google.com/maps?q=Şht.+Ateşe+Reşat+Blv.+No:17,+78100+Merkez+Karabük&output=embed&hl=tr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zemin Yapı Market Konum"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <a
                href="https://maps.google.com/maps?q=Şht.+Ateşe+Reşat+Blv.+No:17,+78100+Merkez+Karabük"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Google Maps&#39;te Aç
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="tel:+905422338381" className="text-gray-600 hover:text-[#111] font-semibold text-sm transition-colors">
                📞 0542 233 83 81
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="tel:+905309650304" className="text-gray-600 hover:text-[#111] font-semibold text-sm transition-colors">
                📞 0530 965 03 04
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Projeniz için hemen iletişime geçin
            </h2>
            <p className="text-amber-100 text-lg mb-10">
              Hayalinizdeki projeyi konuşalım — size en uygun çözümü birlikte bulalım.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-amber-700 font-bold px-9 py-4 rounded-xl text-lg hover:bg-amber-50 transition-colors shadow-xl"
            >
              <WhatsAppIcon />
              WhatsApp&#39;tan Yazın
            </a>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-amber-100 text-sm">
              <a href="tel:+905422338381" className="hover:text-white transition-colors">
                📞 0542 233 83 81
              </a>
              <span className="hidden sm:inline text-amber-400">|</span>
              <a href="tel:+905309650304" className="hover:text-white transition-colors">
                📞 0530 965 03 04
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
