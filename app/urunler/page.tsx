import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ProductGallery from '@/components/ProductGallery'

export const metadata: Metadata = {
  title: 'Ürünler',
  description:
    'Ahşap ev, bungalov, bahçe mobilyası (salıncak, bank, orman masası), kilitparke, bordür ve özel sipariş ürünlerimizi inceleyin.',
  keywords: ['ahşap ev', 'bungalov', 'bahçe mobilyası', 'kilitparke', 'bordür', 'özel sipariş', 'Karabük'],
}

const WHATSAPP = 'https://wa.me/905422338381'

const BASE = 'https://static.wixstatic.com/media/'

const categories = [
  {
    id: 'ahsap-ev',
    label: 'Kategori 01',
    title: 'Ahşap Ev & Bungalov',
    description:
      "Doğal ahşap malzemelerin eşsiz sıcaklığını yaşam alanlarınıza taşıyoruz. Müstakil ahşap evlerden lüks bungalov tatil köylerine kadar her ölçekte proje gerçekleştiriyoruz. Doğayla iç içe, konforlu ve estetik yapılar inşa ediyoruz.",
    features: ['Doğal & sertifikalı ahşap malzeme', 'Tamamen özel tasarım', 'Sağlam ve dayanıklı yapı', 'Termal yalıtım seçeneği', 'Hızlı montaj ve teslim'],
    products: [
      { name: 'Standart Bungalov', desc: 'Tek odalı, kompakt yapı' },
      { name: 'Lüks Bungalov', desc: 'Geniş teras, 2+ oda' },
      { name: 'Müstakil Ahşap Ev', desc: 'Tam donanımlı yaşam alanı' },
      { name: 'Tatil Köyü Projesi', desc: 'Toplu bungalov projesi' },
    ],
    images: [
      { src: BASE + '84e227_0c5ee6041f7f4f989355ddb1ca950a87f000.jpg', alt: 'Ahşap ev projesi' },
      { src: BASE + '84e227_09d7a5cf85264ca1a1a93fef6244e009~mv2.jpg', alt: 'Bungalov iç mekan' },
      { src: BASE + '84e227_e5d0542c70cf498ba16a0374a1627dd6f000.jpg', alt: 'Ahşap bungalov' },
      { src: BASE + '84e227_d72c4e16aff4473cbcb2300143bf3839f000.jpg', alt: 'Bungalov projesi' },
      { src: BASE + '84e227_ec47747597914d809facb7045ea0ac28f000.jpg', alt: 'Ahşap yapı detay' },
      { src: BASE + '84e227_baaaa4c0a02c45e1a0e9115f46bc7e2df000.jpg', alt: 'Bungalov detay görünüm' },
      { src: BASE + '84e227_b1a955b18a6d4ed5b223a6456638933c~mv2.jpg', alt: 'Yeşil çatılı bungalov' },
      { src: BASE + '84e227_eb144c585b3241ec9c04b0bc651bb2c9f000.jpg', alt: 'Bungalov bahçe' },
      { src: BASE + '84e227_5d4899d2cab1444a94a45f0ed4f81b89f000.jpg', alt: 'Ahşap yapı projesi' },
      { src: BASE + '11062b_bd05d65b6c4e4d88b2999aa11def1adc~mv2.jpg', alt: 'Veranda ve bahçe düzenlemesi' },
    ],
  },
  {
    id: 'kamelyalar',
    label: 'Kategori 02',
    title: 'Kamelyalar',
    description:
      'Ahşap kamelyalar, bahçenize ve terasınıza hem gölge hem de estetik katıyor. Her boyut ve tasarımda özel üretim kamelyalarımız, dış mekânlarınızı güzel ve işlevsel bir alana dönüştürüyor.',
    features: ['Özel ölçü ve tasarım', 'Doğal ahşap malzeme', 'Hava koşullarına dayanıklı', 'Montaj dahil teslim', 'Renk & kaplama seçenekleri'],
    products: [
      { name: 'Klasik Kamelyа', desc: 'Sade ve şık tasarım' },
      { name: 'Lüks Kamelya', desc: 'Geniş ve özel donanım' },
      { name: 'Pergola & Çardak', desc: 'Modern gölge çözümü' },
      { name: 'Özel Kamelya', desc: 'İstediğiniz ölçü ve model' },
    ],
    images: [
      { src: BASE + '84e227_627739b214364676a27123a9864e9f71~mv2.jpg', alt: 'Ahşap kamelya projesi' },
      { src: BASE + '84e227_68f11fcb321642f5b113b32972a621e1f000.jpg', alt: 'Kamelya örneği' },
      { src: BASE + '84e227_604a9ea502c24f0590e4e0a330474084~mv2.jpg', alt: 'Tamamlanan kamelya projesi' },
    ],
  },
  {
    id: 'bahce-mobilyasi',
    label: 'Kategori 03',
    title: 'Bahçe Mobilyası',
    description:
      'El işçiliğiyle üretilen bahçe mobilyalarımız hem estetik hem de yıllar boyu dayanıklıdır. Doğal ahşapla bahçenizi, terasınızı veya piknik alanınızı güzelleştirin. Her parça özenle işlenir, müşteri beğenisine özel üretilir.',
    features: ['El yapımı üretim', 'Hava koşullarına dayanıklı', 'Özel renk & lake seçenekleri', 'Farklı boyut alternatifleri', 'Montaj dahil teslim'],
    products: [
      { name: 'Bahçe Salıncağı', desc: 'Bahçe ve veranda için' },
      { name: 'Orman Masası', desc: 'Piknik seti, 4–8 kişilik' },
      { name: 'Bahçe Bankı', desc: 'Şık ve rahat oturma' },
      { name: 'Özel Mobilya', desc: 'İsteğe özel üretim' },
    ],
    images: [
      { src: BASE + '84e227_141e29b4f8544f919fee6f7e3e7d6452~mv2.jpg', alt: 'El yapımı bahçe salıncağı' },
      { src: BASE + '84e227_a65091b7502f4272b9113cd5619142df~mv2.jpg', alt: 'Bahçe mobilyası örneği' },
      { src: BASE + '11062b_86cd9325a4f9415c83cb56b024a07ed6~mv2.jpg', alt: 'Bahçe düzenlemesi' },
      { src: BASE + '84e227_a65091b7502f4272b9113cd5619142df~mv2.jpg', alt: 'Ahşap bahçe mobilyası' },
      { src: BASE + '84e227_34093bf626bb47acaf7dc9bccc2e78d4~mv2.jpg', alt: 'Bahçe mobilyası detay' },
      { src: BASE + '84e227_9a7b5468e9d444149a50e94455760679~mv2.jpg', alt: 'Orman masası seti' },
      { src: BASE + '84e227_604a9ea502c24f0590e4e0a330474084~mv2.jpg', alt: 'Bahçe bankı' },
    ],
  },
  {
    id: 'kilitparke',
    label: 'Kategori 04',
    title: 'Kilitparke & Bordür',
    description:
      'Yüksek basınçla üretilmiş, uzun ömürlü kilitparke ve bordür çözümleriyle yollarınızı, bahçelerinizi ve çevrenizi profesyonelce döşüyoruz. Kalıptan çıkan her taşta kalite garantisi veriyoruz.',
    features: ['Yüksek basınç kalıbı', 'Renk & desen seçenekleri', 'Kayma yapmaz yüzey', 'Uzun ömürlü & sağlam', 'Kolay bakım'],
    products: [
      { name: 'Standart Kilitparke', desc: 'Yol ve yaya alanları' },
      { name: 'Renkli Kilitparke', desc: 'Dekoratif alanlar' },
      { name: 'Bordür Taşı', desc: 'Yol ve bahçe sınırları' },
      { name: 'Döşeme Hizmeti', desc: 'Malzeme + montaj' },
    ],
    images: [
      { src: BASE + '84e227_3ee74e12029248699a57889657fc1560~mv2.jpg', alt: 'Renkli kilitparke proje uygulaması' },
      { src: BASE + '84e227_d1061c0d41594a6e825059e58b35d40e~mv2.jpg', alt: 'Kilitparke zemin kaplama tasarımı' },
      { src: BASE + '84e227_6c915557ee8e4a77a6db8ae6adebb889~mv2.jpg', alt: 'Kilitparke döşeme uygulaması' },
    ],
  },
  {
    id: 'ozel-siparis',
    label: 'Kategori 05',
    title: 'Özel Sipariş / Proje',
    description:
      'Standart ürünlerimizin dışında, sizi dinleyerek hayalinizdeki ürünü veya projeyi özel olarak üretiyoruz. Her fikir değerlidir; birlikte tasarlıyor, birlikte üretiyoruz. Ücretsiz keşif için hemen arayın.',
    features: ['Ücretsiz keşif & danışmanlık', 'Ölçüye özel üretim', 'Hızlı proje teslimi', 'Garanti kapsamı', 'Toplu sipariş indirimi'],
    products: [
      { name: 'Özel Bahçe Tasarımı', desc: 'Komple düzenleme' },
      { name: 'Mimari Ahşap Proje', desc: 'Ev veya işyeri' },
      { name: 'Toplu Sipariş', desc: 'Site, tatil köyü vb.' },
      { name: 'Restorasyon', desc: 'Mevcut yapı yenileme' },
    ],
    images: [
      { src: BASE + '84e227_54a88bab701c4245b05254a87ce6789a~mv2.jpg', alt: 'Özel tasarım projesi' },
      { src: BASE + '84e227_3224ea52f85a41bea8a4a24de8a24672~mv2.jpg', alt: 'Özel sipariş çalışması' },
      { src: BASE + '84e227_0072d29937834606a1b00937e9f086bb~mv2.jpg', alt: 'Özel proje örneği' },
      { src: BASE + '84e227_72d6697df7604d41b757f6002f40efb6~mv2.jpg', alt: 'Proje teslimi' },
      { src: BASE + '84e227_cbb1792610eb41348afbd57d0920f63c~mv2.jpg', alt: 'Özel sipariş ürünü' },
      { src: BASE + '84e227_29b4b656168d4367977bf946bababcfd~mv2.jpg', alt: 'Müşteri projesi' },
      { src: BASE + '84e227_d4d0b9a68c9941c68b3e44a56b354f55~mv2.jpg', alt: 'Özel tasarım detay' },
      { src: BASE + '84e227_70ae8eb9fe2342f0b9e6c36e0614b81b~mv2.jpg', alt: 'Proje çalışması' },
      { src: BASE + '84e227_390527b2aa26420d97d5264d6edaeb53~mv2.jpg', alt: 'Özel proje tamamlandı' },
      { src: BASE + '84e227_830b1628670646f38a3285dafaef2fec~mv2.jpg', alt: 'Özel sipariş projesi' },
      { src: BASE + '84e227_f11709b4d70f4730bb87c9d43bcebd67~mv2.jpg', alt: 'Özel tasarım örneği' },
      { src: BASE + '84e227_9f0dcd6ccb5a440fa8477dff60f295e5~mv2.jpg', alt: 'Proje son hali' },
    ],
  },
]

export default function UrunlerPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-[#111] py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Ürünlerimiz</h1>
        <p className="text-gray-400 max-w-xl mx-auto px-4">
          Beş ana kategoride yüksek kalite ve müşteri memnuniyetini ön planda tutuyoruz.
        </p>
      </div>

      {/* Category Sections */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Content */}
              <AnimateOnScroll animation={idx % 2 === 0 ? 'slide-left' : 'slide-right'} className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">{cat.label}</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] mt-2 mb-5">{cat.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-7">{cat.description}</p>

                <ul className="space-y-2.5 mb-8">
                  {cat.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {cat.products.map((p, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <div className="font-semibold text-[#111] text-sm">{p.name}</div>
                      <div className="text-gray-400 text-xs mt-1">{p.desc}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Fiyat Teklifi Al
                </a>
              </AnimateOnScroll>

              {/* Gallery */}
              <AnimateOnScroll animation={idx % 2 === 0 ? 'slide-right' : 'slide-left'} className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <ProductGallery images={cat.images} />
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-[#111] text-center px-4">
        <h2 className="text-3xl font-extrabold text-white mb-4">Aradığınızı bulamadınız mı?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Özel ihtiyaçlarınız için bize ulaşın, birlikte en uygun çözümü bulalım.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp&#39;tan Yazın
        </a>
      </section>
    </div>
  )
}
