import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Zemin Yapı Market | Ahşap Ev, Bungalov, Kilitparke — Karabük',
    template: '%s | Zemin Yapı Market',
  },
  description:
    "Karabük, Bartın ve Kastamonu'da ahşap ev, bungalov, bahçe mobilyası ve kilitparke hizmetleri. Siz hayal edin, biz gerçekleştirelim.",
  keywords: [
    'ahşap bungalov',
    'kilitparke',
    'bahçe mobilyası',
    'Karabük',
    'Bartın',
    'Kastamonu',
    'ahşap ev',
    'bordür',
    'özel sipariş',
  ],
  robots: { index: true, follow: true },
}

const GA_ID = 'G-XXXXXXXXXX'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Zemin Yapı Market",
          "description": "Karabük'te ahşap ev, bungalov, kamelya, bahçe mobilyası ve kilitparke.",
          "url": "https://zeminyapimarket.com",
          "telephone": "+905422338381",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Şht. Ateşe Reşat Blv. No:17",
            "addressLocality": "Karabük",
            "postalCode": "78100",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.2061,
            "longitude": 32.6204
          },
          "openingHours": "Mo-Sa 08:00-18:00",
          "priceRange": "₺₺",
          "image": "https://static.wixstatic.com/media/11062b_b1a955b9ab984e3a9e2d6b4b7b2bb7b5~mv2.jpg",
          "sameAs": ["https://wa.me/905422338381"]
        })}} />
      </head>
      <body className={`${jakarta.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
