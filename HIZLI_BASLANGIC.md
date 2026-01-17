# 🚀 Hızlı Başlangıç

## ⚠️ ÖNEMLİ: Doğru Klasöre Geçin!

Terminal'de şu anda `demo` klasöründesiniz, ama proje `basaran_insaat` klasöründe.

## 📍 Adım 1: Doğru Klasöre Geçin

Terminal'de şu komutu çalıştırın:

```bash
cd basaran_insaat
```

Veya tam yol ile:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat
```

## 📦 Adım 2: Bağımlılıkları Yükleyin

Doğru klasörde olduğunuzdan emin olduktan sonra:

```bash
npm install
```

Bu komut tüm gerekli paketleri yükleyecektir (Next.js, React, Tailwind CSS, vs.)

## ▶️ Adım 3: Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

## 🌐 Adım 4: Tarayıcıda Açın

Terminal'de şu mesajı göreceksiniz:
```
✓ Ready in Xs
○ Local: http://localhost:3000
```

Tarayıcınızda `http://localhost:3000` adresine gidin.

## 🎯 Tam Komut Dizisi

```bash
# 1. Doğru klasöre geç
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat

# 2. Mevcut klasörü kontrol et (package.json olmalı)
ls package.json

# 3. Bağımlılıkları yükle
npm install

# 4. Geliştirme sunucusunu başlat
npm run dev
```

## ❌ Hata Alırsanız

### "command not found: npm" hatası
→ Node.js kurulu değil. `KURULUM.md` dosyasını okuyun.

### "ENOENT: no such file or directory, package.json" hatası
→ Yanlış klasördesiniz. Yukarıdaki Adım 1'i tekrar uygulayın.

### "EACCES" veya izin hatası
→ Terminal'de şu komutu deneyin:
```bash
sudo npm install
```

## 📝 Özet

1. ✅ `cd basaran_insaat` - Doğru klasöre geç
2. ✅ `npm install` - Paketleri yükle  
3. ✅ `npm run dev` - Sunucuyu başlat
4. ✅ Tarayıcıda `http://localhost:3000` - Projeyi gör
