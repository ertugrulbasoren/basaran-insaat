# 🎨 Google'da Logo Görünmesi İçin Rehber

Google aramalarında sitenizin logosunun görünmesi için yapılacaklar.

## ✅ Yapılan Teknik İyileştirmeler

### 1. ✅ Favicon Eklendi
- `app/icon.tsx` oluşturuldu
- Logo favicon olarak ayarlandı

### 2. ✅ Icon Metadata Eklendi
- Metadata'ya icons bilgileri eklendi
- Farklı boyutlarda icon tanımlamaları

### 3. ✅ Manifest.json Eklendi
- PWA manifest dosyası oluşturuldu
- Logo bilgileri eklendi

### 4. ✅ Structured Data'da Logo
- Organization schema'da logo tanımlandı
- Google'ın logo bilgisini alması için

---

## 📋 Google Search Console'da Logo Gönderme

### Adım 1: Google Search Console'a Giriş
1. https://search.google.com/search-console adresine gidin
2. `basaraninsaat.net.tr` domain'ini seçin

### Adım 2: Logo Gönderme
1. Sol menüden **"Ayarlar"** (Settings) seçin
2. **"Site Logosu"** (Site Logo) bölümüne gidin
3. **"Logo Gönder"** (Submit Logo) butonuna tıklayın

### Adım 3: Logo Gereksinimleri
Google logo için şu gereksinimleri ister:
- **Format:** PNG, JPG, SVG
- **Boyut:** En az 112x112 piksel
- **Oran:** 1:1 (kare)
- **Dosya boyutu:** 5MB'dan küçük
- **Arka plan:** Şeffaf veya beyaz

### Adım 4: Logo Hazırlama
Mevcut logo'nuzu (logo.jpg) şu şekilde hazırlayın:

**Seçenek A: Mevcut Logo'yu Kullan**
- Logo'nuz zaten kare formatta görünüyor
- Ancak Google için optimize edilmiş versiyon hazırlayın

**Seçenek B: Yeni Logo Oluştur**
- Logo'nuzu 512x512 piksel kare formatta kaydedin
- Arka planı şeffaf yapın (PNG) veya beyaz bırakın
- `public/images/logo-google.png` olarak kaydedin

### Adım 5: Logo Yükleme
1. Google Search Console'da logo yükleme sayfasına gidin
2. Hazırladığınız logo'yu yükleyin
3. **"Gönder"** (Submit) butonuna tıklayın

---

## 🔍 Logo Görünmesi İçin Kontrol Listesi

- [x] Favicon eklendi (`app/icon.tsx`)
- [x] Icon metadata eklendi
- [x] Manifest.json oluşturuldu
- [x] Structured data'da logo tanımlandı
- [ ] Google Search Console'da logo gönderildi
- [ ] Logo Google gereksinimlerine uygun (112x112+, kare, şeffaf/beyaz arka plan)

---

## ⏱️ Bekleme Süresi

- Logo gönderildikten sonra **1-2 hafta** içinde Google aramalarında görünmeye başlar
- Google logo'yu otomatik olarak indeksler
- Tüm aramalarda hemen görünmeyebilir, zamanla yayılır

---

## 💡 İpuçları

### Logo Optimizasyonu
1. **Kare format:** Logo'nuzu 1:1 oranında hazırlayın
2. **Yüksek kalite:** En az 512x512 piksel
3. **Şeffaf arka plan:** PNG formatında şeffaf arka plan kullanın
4. **Basit tasarım:** Küçük boyutlarda da okunabilir olmalı

### Alternatif Yöntemler
- Logo'yu `public/images/logo-google.png` olarak ekleyin
- Metadata'da logo URL'sini güncelleyin
- Structured data'da logo bilgisini kontrol edin

---

## 🆘 Sorun Giderme

### Logo görünmüyor
1. Google Search Console'da logo gönderildi mi?
2. Logo gereksinimlerine uygun mu? (112x112+, kare)
3. 1-2 hafta beklediniz mi?
4. Structured data'da logo tanımlı mı?

### Logo reddedildi
1. Logo boyutunu kontrol edin (en az 112x112)
2. Formatı kontrol edin (PNG, JPG, SVG)
3. Arka planı kontrol edin (şeffaf veya beyaz)
4. Dosya boyutunu kontrol edin (5MB'dan küçük)

---

## 📞 Yardım

Google logo konusunda yardıma ihtiyacınız olursa:
- Google Search Console Yardım Merkezi
- Logo gereksinimlerini kontrol edin
- Logo'yu yeniden hazırlayıp tekrar gönderin

**Başarılar! 🎨**
