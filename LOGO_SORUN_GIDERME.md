# 🔍 Google'da Logo Görünmüyor - Sorun Giderme

Google aramalarında logo görünmüyorsa yapılacaklar.

## ✅ Yapılan Teknik İyileştirmeler

- ✅ Structured Data'da logo tanımlandı (Organization schema)
- ✅ Website schema'ya logo eklendi
- ✅ Metadata'da icon bilgileri var
- ✅ Open Graph'da logo var
- ✅ Favicon eklendi

---

## 🔍 Kontrol Listesi

### 1. Logo Dosyası Erişilebilir mi?

Tarayıcıda şu URL'yi açın:
```
https://basaraninsaat.net.tr/images/logo.jpg
```

**Beklenen:** Logo görüntülenmeli
**Sorun varsa:** Dosya yolu veya erişim sorunu olabilir

### 2. Structured Data Doğru mu?

Site kaynağında (Ctrl+U) şunu arayın:
```json
"logo": {
  "@type": "ImageObject",
  "url": "https://basaraninsaat.net.tr/images/logo.jpg"
}
```

**Beklenen:** Logo bilgisi görünmeli
**Sorun varsa:** Structured data render edilmiyor olabilir

### 3. Google Site'ı Taradı mı?

Google Search Console'da:
1. "URL Denetleme" (URL Inspection) aracını kullanın
2. `https://basaraninsaat.net.tr` URL'sini girin
3. "İndeksle" (Index) butonuna tıklayın
4. Google'ın siteyi yeniden taramasını isteyin

### 4. Logo Formatı Uygun mu?

Google logo için şu gereksinimleri ister:
- **Format:** PNG, JPG, SVG
- **Boyut:** En az 112x112 piksel (önerilen: 512x512)
- **Oran:** 1:1 (kare) tercih edilir
- **Dosya boyutu:** 5MB'dan küçük
- **Erişilebilirlik:** Herkese açık olmalı

Mevcut logo: 1211x1103 (kare değil, dikdörtgen)

**Öneri:** Logo'yu kare formatta (512x512) optimize edin

---

## 🛠️ Hızlı Çözümler

### Çözüm 1: Logo'yu Kare Formatta Optimize Edin

1. Logo'nuzu bir görsel düzenleme programında açın
2. 512x512 piksel kare formatta kaydedin
3. `public/images/logo-square.png` olarak kaydedin
4. Structured data'da bu yeni logo'yu kullanın

### Çözüm 2: Google'ı Yeniden Taratın

1. Google Search Console'a gidin
2. "URL Denetleme" (URL Inspection) kullanın
3. Ana sayfayı (`https://basaraninsaat.net.tr`) denetleyin
4. "İndeksle" (Index) butonuna tıklayın
5. "İndeksleme İste" (Request Indexing) seçin

### Çözüm 3: Sitemap'i Yeniden Gönderin

1. Google Search Console'da "Site Haritaları" (Sitemaps) bölümüne gidin
2. Mevcut sitemap'i silin
3. `https://basaraninsaat.net.tr/sitemap.xml` tekrar ekleyin
4. Google'ın yeniden taramasını bekleyin

---

## ⏱️ Bekleme Süresi

Google logo'yu otomatik olarak:
- **1-2 hafta:** İlk tarama ve indeksleme
- **2-4 hafta:** Logo'nun aramalarda görünmeye başlaması
- **4-8 hafta:** Tüm aramalarda yaygın görünüm

**Not:** Google logo'yu hemen göstermez, zaman alır.

---

## 🔧 Alternatif Yöntemler

### Yöntem 1: Logo'yu Farklı Konumlara Ekleyin

1. `public/favicon.ico` - Favicon olarak
2. `public/logo.png` - Ana dizinde
3. `public/images/logo-square.png` - Kare versiyon

### Yöntem 2: HTML'de Logo Meta Tag'i

`app/layout.tsx` içinde `<head>` bölümüne ekleyin (Next.js otomatik yapar, ama kontrol edin)

### Yöntem 3: Google My Business

Google My Business'ta logo ekleyin:
1. https://business.google.com
2. İşletmenizi seçin
3. Fotoğraflar bölümüne logo ekleyin
4. Bu logo Google aramalarında görünebilir

---

## 📊 Logo Görünürlüğünü Kontrol Etme

### Google'da Test

1. Google'da şunu arayın: `site:basaraninsaat.net.tr`
2. Sonuçlarda logo var mı kontrol edin
3. Logo yoksa, Google henüz taramamış olabilir

### Structured Data Test

1. https://search.google.com/test/rich-results adresine gidin
2. `https://basaraninsaat.net.tr` URL'sini test edin
3. Logo bilgisi görünüyor mu kontrol edin

---

## 💡 Önemli Notlar

1. **Zaman Gerekir:** Google logo'yu hemen göstermez, 1-4 hafta bekleyin
2. **Otomatik İşlem:** Manuel logo ekleme yok, Google otomatik alır
3. **Structured Data Önemli:** Logo bilgisi structured data'da olmalı
4. **Logo Formatı:** Kare format tercih edilir (ama dikdörtgen de çalışır)

---

## 🆘 Hala Görünmüyorsa

1. **1-2 hafta bekleyin** - Google'ın taraması zaman alır
2. **Logo formatını kontrol edin** - Kare formatta optimize edin
3. **Structured data'yı test edin** - Rich Results Test ile kontrol edin
4. **Google'ı yeniden taratın** - URL Inspection ile isteyin

**Unutmayın:** Google logo'yu otomatik olarak structured data'dan alır, manuel ekleme yoktur. Zaman gerektirir.

---

**Sabırlı olun, Google logo'yu zamanla gösterecektir! 🎨**
