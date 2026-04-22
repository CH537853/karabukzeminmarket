import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    "Zemin Yapı Market hakkında bilgi edinin. Karabük merkezli, kalite ve güven odaklı ahşap yapı ve bahçe dekorasyon firması.",
  keywords: ['Zemin Yapı Market', 'Karabük firma', 'ahşap yapı', 'bungalov üretici'],
}

const WHATSAPP = 'https://wa.me/905422338381'
const BASE = 'https://static.wixstatic.com/media/'

const values = [
  { num: '01', title: 'Kalite', desc: 'Malzeme seçiminden üretim sürecine kadar yüksek kalite standartlarını koruyoruz.' },
  { num: '02', title: 'Güven', desc: 'Söz verdiğimizi yerine getirir, belirlenen tarihe uyar, müşterimizin yanında oluruz.' },
  { num: '03', title: 'Yenilik', desc: "Sektördeki gelişmeleri takip ederek en modern çözümleri müşterilerimize sunuyoruz." },
  { num: '04', title: 'Yerel Hizmet', desc: "Karabük, Bartın ve Kastamonu'ya odaklanıyoruz. Bölgeyi tanıyoruz, hızlı hizmet veriyoruz." },
]

const stats = [
  { num: '100+', label: 'Tamamlanan Proje' },
  { num: '3', label: 'Hizmet İli' },
  { num: '4', label: 'Ürün Kategorisi' },
  { num: '%100', label: 'Müşteri Memnuniyeti' },
]

const topPhotos = [
  { src: BASE + '84e227_0c5ee6041f7f4f989355ddb1ca950a87f000.jpg', alt: 'Ahşap ev projesi' },
  { src: BASE + '84e227_e5d0542c70cf498ba16a0374a1627dd6f000.jpg', alt: 'Modern ahşap ev' },
  { src: BASE + '84e227_68f11fcb321642f5b113b32972a621e1f000.jpg', alt: 'Ahşap kamelya projesi' },
  { src: BASE + '84e227_604a9ea502c24f0590e4e0a330474084~mv2.jpg', alt: 'Tamamlanan kamelya' },
]

const bottomPhotos = [
  { src: BASE + '84e227_141e29b4f8544f919fee6f7e3e7d6452~mv2.jpg', alt: 'El yapımı bahçe salıncağı' },
  { src: BASE + '84e227_34093bf626bb47acaf7dc9bccc2e78d4~mv2.jpg', alt: 'Ahşap kütük oturma grubu' },
]

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-[#111] py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Hakkımızda</h1>
        <p className="text-gray-400 max-w-xl mx-auto px-4">
          Kalite, güven ve müşteri memnuniyetiyle tanınan yerel bir yapı ve dekorasyon firması.
        </p>
      </div>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll animation="slide-left">
              <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Hikayemiz</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mt-2 mb-6">
                Zemin Yapı Market&#39;i Tanıyın
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Zemin Yapı Market olarak, Karabük bölgesinde kurulduğumuz günden bu yana müşterilerimize en kaliteli yapı ve dekorasyon ürünlerini sunmak için çalışıyoruz. Ahşap ev ve bungalovdan bahçe mobilyasına, kilitparkeden özel projelere kadar geniş bir hizmet yelpazesi sunuyoruz.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Her proje bizim için özeldir. Müşterilerimizin hayallerini dinleyerek, bütçelerine ve ihtiyaçlarına uygun en iyi çözümü üretmek için çalışıyoruz. &#34;Siz Hayal Edin, Biz Gerçekleştirelim&#34; sloganımız bu anlayışın doğal bir yansımasıdır.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Karabük, Bartın ve Kastamonu&#39;daki müşterilerimize yerel ve hızlı hizmet sunuyoruz. Bölgeyi tanıyoruz, ihtiyaçlarınızı anlıyor ve her zaman yanınızda oluyoruz.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-right">
              {/* Firma fotoğrafı */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <Image
                  src={BASE + 'a4c183_f88306676db24a8698ed24441f6a2123~mv2.jpg'}
                  alt="Zemin Yapı Market firma görünümü"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">Değerlerimiz</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Her işimizde bu değerleri rehber edinerek hareket ediyoruz.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.num} animation="fade-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                  <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-black text-sm">{v.num}</span>
                  </div>
                  <h3 className="font-bold text-[#111] text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mb-4">Çalışmalarımızdan</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Modern ekipmanlar ve deneyimli ustalarımızla her projeyi özenle üretiyoruz.
              </p>
            </div>
          </AnimateOnScroll>
          {/* Üst sıra — 4 fotoğraf */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {topPhotos.map((photo, i) => (
              <AnimateOnScroll key={i} animation="zoom-in" delay={i * 80}>
                <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Alt sıra — 2 bahçe mobilyası fotoğrafı */}
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {bottomPhotos.map((photo, i) => (
              <AnimateOnScroll key={i} animation="zoom-in" delay={i * 100 + 320}>
                <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="text-4xl sm:text-5xl font-extrabold text-amber-500 mb-2">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-center px-4">
        <h2 className="text-3xl font-extrabold text-white mb-4">Birlikte çalışalım</h2>
        <p className="text-amber-100 mb-8 max-w-lg mx-auto">
          Projeniz için bize ulaşın, ücretsiz keşif yapalım ve hayalinizi gerçekleştirelim.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-amber-50 transition-colors shadow-xl"
        >
          Hemen İletişime Geç
        </a>
      </section>
    </div>
  )
}
