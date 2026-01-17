# Başaran İnşaat & Emlak - Premium Construction Company Website

Modern, şık ve güvenilir bir inşaat firması web sitesi. Next.js 14+ App Router, TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

## 🎯 Proje Özellikleri

- ✅ **Next.js 14+** (App Router, Server Components)
- ✅ **TypeScript** - Tip güvenliği
- ✅ **Tailwind CSS** - Modern utility-first CSS
- ✅ **Framer Motion** - Premium animasyonlar
- ✅ **Responsive Design** - Mobil-first yaklaşım
- ✅ **SEO Optimized** - Meta tags, structured data
- ✅ **Performance** - Image optimization, code splitting
- ✅ **Accessibility** - ARIA labels, semantic HTML

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
```

3. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
basaran_insaat/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Ana sayfa
│   ├── globals.css          # Global styles
│   └── ...
├── components/              # React bileşenleri
│   ├── layout/              # Layout bileşenleri
│   ├── sections/            # Sayfa bölümleri
│   └── ui/                  # UI bileşenleri
├── lib/                     # Utilities ve constants
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
└── public/                  # Static assets
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Primary (Altın):** `#D4AF37` - Prestij ve lüks
- **Dark (Siyah):** `#0F0F0F` - Güç ve otorite
- **Light (Gri-Beyaz):** `#E5E5E5` - Temizlik ve profesyonellik

### Tipografi

- **Başlıklar:** Playfair Display (serif, otoriter)
- **Alt Başlıklar:** Montserrat (sans-serif, modern)
- **Gövde Metinleri:** Inter (okunabilir, temiz)

## 📱 Sayfalar

- `/` - Anasayfa
- `/projeler` - Proje listesi
- `/projeler/[slug]` - Proje detay
- `/hizmetler` - Hizmetler
- `/kurumsal` - Kurumsal sayfalar
- `/iletisim` - İletişim

## 🔧 Teknik Detaylar

### Performans Hedefleri

- LCP (Largest Contentful Paint): < 1.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Lighthouse Score: 95+

### SEO Özellikleri

- Dynamic metadata (her sayfa için)
- Structured data (JSON-LD)
- Semantic HTML5
- Image optimization (WebP, AVIF)
- Sitemap generation

## 📦 Build

```bash
npm run build
npm run start
```

## 🌐 Deploy

### Vercel (Önerilen)

```bash
npm i -g vercel
vercel
```

### Diğer Platformlar

Proje, Next.js standart çıktısı ürettiği için herhangi bir Node.js hosting platformunda çalışabilir.

## 📝 Lisans

Bu proje Başaran İnşaat & Emlak için özel olarak geliştirilmiştir.

## 👨‍💻 Geliştirici Notları

- Tüm bileşenler TypeScript ile tip güvenliği sağlayacak şekilde yazılmıştır
- Responsive tasarım mobil-first yaklaşımla geliştirilmiştir
- Animasyonlar performans odaklı olarak optimize edilmiştir
- SEO ve erişilebilirlik standartlarına uygun kod yazılmıştır

---

**Geliştiren:** Senior Front-End Developer  
**Versiyon:** 1.0.0  
**Son Güncelleme:** 2024
