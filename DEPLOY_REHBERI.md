# 🌐 Siteyi İnternete Açma Rehberi

Bu rehber, Next.js sitenizi ilk defa internete açacaklar için hazırlanmıştır.

## 📋 İçindekiler
1. [Domain (Alan Adı) Alma](#1-domain-alan-adı-alma)
2. [Hosting (Barındırma) Seçimi](#2-hosting-barındırma-seçimi)
3. [Vercel ile Deploy (Önerilen - En Kolay)](#3-vercel-ile-deploy-önerilen---en-kolay)
4. [Geleneksel Hosting ile Deploy](#4-geleneksel-hosting-ile-deploy)
5. [Domain'i Hosting'e Bağlama](#5-domaini-hostinge-bağlama)
6. [Son Kontroller](#6-son-kontroller)

---

## 1. Domain (Alan Adı) Alma

### 1.1 Domain Nedir?
Domain, sitenizin internetteki adresidir (örn: `basaraninsaat.com`)

### 1.2 Domain Nereden Alınır?
**Türkiye'de Popüler Domain Sağlayıcıları:**
- **Turhost** (https://www.turhost.com) - Türkçe destek, kolay kullanım
- **Natro** (https://www.natro.com) - Uygun fiyatlı
- **İsimtescil** (https://www.isimtescil.net) - Güvenilir
- **Hostinger** (https://www.hostinger.com.tr) - Uluslararası, uygun fiyat

### 1.3 Domain Alma Adımları

1. **Domain sağlayıcı sitesine gidin** (örn: Turhost)
2. **Domain arama kutusuna** istediğiniz adı yazın (örn: `basaraninsaat`)
3. **Uygun domain'i seçin** (.com, .com.tr, .net vb.)
4. **Sepete ekleyin** ve ödeme yapın
5. **Domain'i satın aldıktan sonra** hesabınızda görünecek

**💡 İpucu:** `.com` en popüler ve profesyonel görünümlüdür. `.com.tr` Türkiye için özel domain'dir.

**💰 Fiyat:** Domain yıllık ~100-300 TL arası değişir.

---

## 2. Hosting (Barındırma) Seçimi

### 2.1 Hosting Nedir?
Hosting, sitenizin dosyalarının saklandığı sunucudur.

### 2.2 Next.js için Hosting Seçenekleri

#### ✅ **Seçenek 1: Vercel (ÖNERİLEN - ÜCRETSİZ)**
- Next.js'in yaratıcıları tarafından yapılmış
- Ücretsiz plan mevcut
- Otomatik deploy
- SSL sertifikası ücretsiz
- **En kolay ve hızlı yöntem**

#### ✅ **Seçenek 2: Netlify (ÜCRETSİZ)**
- Vercel'e benzer
- Ücretsiz plan mevcut
- Kolay kullanım

#### ⚠️ **Seçenek 3: Geleneksel Hosting (cPanel)**
- Turhost, Natro gibi Türk firmaları
- Daha fazla kontrol
- Daha karmaşık kurulum
- Aylık ~50-200 TL

#### ⚠️ **Seçenek 4: VPS (DigitalOcean, AWS)**
- Gelişmiş kullanıcılar için
- Tam kontrol
- Daha teknik

**💡 Öneri:** İlk defa yapıyorsanız **Vercel** kullanın. Ücretsiz, kolay ve hızlıdır.

---

## 3. Vercel ile Deploy (Önerilen - En Kolay)

### 3.1 Vercel Hesabı Oluşturma

1. **https://vercel.com** adresine gidin
2. **"Sign Up"** butonuna tıklayın
3. **GitHub hesabınızla giriş yapın** (önerilen) veya email ile kaydolun
4. **Hesabınızı doğrulayın**

### 3.2 GitHub'a Kod Yükleme

Vercel, kodunuzu GitHub'dan çeker. Önce GitHub'a yüklemelisiniz:

#### Adım 1: GitHub Hesabı Oluşturma
1. **https://github.com** adresine gidin
2. **"Sign up"** ile ücretsiz hesap oluşturun

#### Adım 2: Yeni Repository (Depo) Oluşturma
1. GitHub'da sağ üstteki **"+"** butonuna tıklayın
2. **"New repository"** seçin
3. **Repository adı:** `basaran-insaat` (veya istediğiniz ad)
4. **"Public"** seçin (ücretsiz için)
5. **"Create repository"** tıklayın

#### Adım 3: Projeyi GitHub'a Yükleme

Terminal'de (Mac'te Terminal.app, Windows'ta PowerShell) şu komutları çalıştırın:

```bash
# Proje klasörüne gidin
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat

# Git'i başlatın (eğer daha önce yapmadıysanız)
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit'i yapın
git commit -m "İlk commit - Başaran İnşaat sitesi"

# GitHub repository'nizi ekleyin (URL'yi kendi repository'nizle değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/basaran-insaat.git

# GitHub'a yükleyin
git branch -M main
git push -u origin main
```

**⚠️ Not:** `KULLANICI_ADINIZ` yerine GitHub kullanıcı adınızı yazın.

**🔐 GitHub şifresi sorarsa:** Personal Access Token kullanmanız gerekebilir. GitHub Settings > Developer settings > Personal access tokens > Generate new token

### 3.3 Vercel'e Deploy Etme

1. **https://vercel.com/dashboard** adresine gidin
2. **"Add New..."** > **"Project"** tıklayın
3. **GitHub repository'nizi seçin** (basaran-insaat)
4. **"Import"** tıklayın
5. **Ayarlar:**
   - Framework Preset: **Next.js** (otomatik algılanır)
   - Root Directory: **./** (boş bırakın)
   - Build Command: **npm run build** (otomatik)
   - Output Directory: **.next** (otomatik)
6. **"Deploy"** butonuna tıklayın
7. **2-3 dakika bekleyin** - Deploy tamamlanacak

### 3.4 Sonuç

Deploy tamamlandıktan sonra:
- Siteniz **`basaran-insaat.vercel.app`** gibi bir adreste yayında olacak
- Bu adres ücretsizdir ve her zaman çalışır

---

## 4. Geleneksel Hosting ile Deploy

Eğer Vercel yerine geleneksel hosting kullanmak isterseniz:

### 4.1 Hosting Satın Alma

1. **Turhost** veya **Natro** gibi bir firmadan hosting paketi satın alın
2. **Node.js desteği olan** bir paket seçin (çoğu pakette var)
3. **cPanel** erişim bilgilerinizi alın

### 4.2 Projeyi Build Etme

Terminal'de:

```bash
# Proje klasörüne gidin
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat

# Bağımlılıkları yükleyin
npm install

# Production build oluşturun
npm run build
```

### 4.3 Dosyaları Yükleme

**Seçenek A: FTP ile (FileZilla)**
1. **FileZilla** programını indirin (https://filezilla-project.org)
2. Hosting firmanızdan aldığınız **FTP bilgilerini** girin
3. **`.next`**, **`public`**, **`package.json`** ve diğer dosyaları yükleyin
4. **Root dizine** (genellikle `public_html` veya `www`) yükleyin

**Seçenek B: cPanel File Manager**
1. cPanel'e giriş yapın
2. **File Manager** açın
3. Dosyaları yükleyin

### 4.4 Node.js Ayarları

Hosting panelinde:
1. **Node.js** uygulaması oluşturun
2. **Start Command:** `npm start`
3. **Port:** Otomatik atanır
4. **Root Directory:** Proje klasörünüz

---

## 5. Domain'i Hosting'e Bağlama

### 5.1 Vercel'de Domain Bağlama

1. Vercel dashboard'da projenize gidin
2. **Settings** > **Domains** sekmesine gidin
3. **Domain ekleyin:** `basaraninsaat.com`
4. Vercel size **DNS kayıtları** verecek:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`

5. **Domain sağlayıcınıza gidin** (Turhost, Natro vb.)
6. **DNS Yönetimi** bölümüne gidin
7. Vercel'in verdiği kayıtları ekleyin:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`

8. **24-48 saat bekleyin** (DNS yayılımı)

### 5.2 Geleneksel Hosting'de Domain Bağlama

1. **Hosting panelinde** domain ekleyin
2. **Nameserver'ları** domain sağlayıcınıza ekleyin:
   - Hosting firmanız size nameserver adresleri verir
   - Örnek: `ns1.turhost.com`, `ns2.turhost.com`
3. Domain sağlayıcınızda **Nameserver'ları güncelleyin**
4. **24-48 saat bekleyin**

---

## 6. Son Kontroller

### 6.1 SSL Sertifikası
- **Vercel:** Otomatik ve ücretsiz SSL
- **Geleneksel Hosting:** Let's Encrypt ile ücretsiz SSL (çoğu firmada otomatik)

### 6.2 Site Kontrolü
- ✅ Site açılıyor mu?
- ✅ Tüm sayfalar çalışıyor mu?
- ✅ Görseller yükleniyor mu?
- ✅ Formlar çalışıyor mu?
- ✅ Mobil görünüm düzgün mü?

### 6.3 SEO Ayarları
- Google Search Console'a site ekleyin
- Google Analytics ekleyin (isteğe bağlı)

---

## 📞 Yardım ve Destek

### Sorun Yaşarsanız:

1. **Vercel Dokümantasyon:** https://vercel.com/docs
2. **Next.js Dokümantasyon:** https://nextjs.org/docs
3. **Hosting firması destek:** Çoğu Türk firması Türkçe destek sunar

### Yaygın Sorunlar:

**❌ "Build failed" hatası:**
- `package.json` dosyasını kontrol edin
- Tüm bağımlılıklar yüklü mü?

**❌ "Domain not found" hatası:**
- DNS kayıtlarını kontrol edin
- 24-48 saat bekleyin

**❌ Görseller görünmüyor:**
- `public` klasörünün yüklendiğinden emin olun
- Dosya yollarını kontrol edin

---

## 🎉 Tebrikler!

Siteniz artık internette! 🚀

**Özet:**
1. ✅ Domain aldınız
2. ✅ Hosting/Vercel'e deploy ettiniz
3. ✅ Domain'i bağladınız
4. ✅ Site yayında!

**Sonraki Adımlar:**
- Google'a site ekleyin
- Sosyal medyada paylaşın
- Düzenli güncellemeler yapın

---

## 💰 Maliyet Özeti

### Vercel Kullanırsanız:
- **Domain:** ~100-300 TL/yıl
- **Hosting:** **ÜCRETSİZ** ✅
- **SSL:** **ÜCRETSİZ** ✅
- **Toplam:** ~100-300 TL/yıl

### Geleneksel Hosting:
- **Domain:** ~100-300 TL/yıl
- **Hosting:** ~50-200 TL/ay (~600-2400 TL/yıl)
- **SSL:** Genelde ücretsiz
- **Toplam:** ~700-2700 TL/yıl

**💡 Öneri:** İlk yıl Vercel kullanın, ücretsizdir!

---

## 📝 Notlar

- **Backup:** Düzenli olarak kodunuzu GitHub'a yükleyin
- **Güncellemeler:** Yeni özellik eklediğinizde tekrar deploy edin
- **Performans:** Vercel otomatik olarak CDN kullanır, hızlıdır
- **Güvenlik:** SSL sertifikası otomatik yenilenir

**Başarılar! 🎊**
