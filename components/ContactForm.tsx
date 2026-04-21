'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const urunler = [
  'Ahşap Ev & Bungalov',
  'Kamelya',
  'Bahçe Mobilyası',
  'Kilitparke & Bordür',
  'Özel Sipariş / Proje',
  'Diğer',
]

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter()
  const [form, setForm] = useState({ ad: '', telefon: '', urun: '', mesaj: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.ad.trim()) e.ad = 'Ad Soyad zorunludur.'
    if (!form.telefon.trim()) e.telefon = 'Telefon numarası zorunludur.'
    if (!form.urun) e.urun = 'Lütfen bir ürün seçin.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)

    const msg = encodeURIComponent(
      `Merhaba, web sitesinden mesaj:\n\n👤 Ad Soyad: ${form.ad}\n📞 Telefon: ${form.telefon}\n🏠 İlgilenilen Ürün: ${form.urun}${form.mesaj ? `\n💬 Mesaj: ${form.mesaj}` : ''}`
    )

    window.open(`https://wa.me/905422338381?text=${msg}`, '_blank')
    router.push('/tesekkurler')
  }

  const field = (key: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => { setForm(p => ({ ...p, [key]: e.target.value })); setErrors(p => ({ ...p, [key]: '' })) }}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${errors[key] ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'}`}
      />
      {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? '' : 'bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100'}`}>
      {!compact && (
        <div className="mb-2">
          <h3 className="text-xl font-extrabold text-[#111]">Ücretsiz Teklif Alın</h3>
          <p className="text-gray-500 text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
        </div>
      )}

      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-4'}>
        {field('ad', 'Ad Soyad', 'text', 'Adınız ve soyadınız')}
        {field('telefon', 'Telefon', 'tel', '05XX XXX XX XX')}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">İlgilendiğiniz Ürün</label>
        <select
          value={form.urun}
          onChange={e => { setForm(p => ({ ...p, urun: e.target.value })); setErrors(p => ({ ...p, urun: '' })) }}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${errors.urun ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'}`}
        >
          <option value="">Seçiniz...</option>
          {urunler.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
        {errors.urun && <p className="text-red-500 text-xs mt-1">{errors.urun}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mesajınız <span className="text-gray-400 font-normal">(isteğe bağlı)</span>
        </label>
        <textarea
          value={form.mesaj}
          onChange={e => setForm(p => ({ ...p, mesaj: e.target.value }))}
          placeholder="Projeniz hakkında kısa bilgi verebilirsiniz..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 text-sm outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-bold px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
      >
        {loading ? (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        {loading ? 'Gönderiliyor...' : 'WhatsApp ile Teklif Al'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Formu göndererek WhatsApp üzerinden iletişim kuruyorsunuz.
      </p>
    </form>
  )
}
