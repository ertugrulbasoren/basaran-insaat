# 🚀 Siteyi Çalıştırma Rehberi

## 📋 Hızlı Başlangıç

### 1. Terminal'i Açın
- **Mac:** `Cmd + Space` → "Terminal" yazın → Enter
- Veya Finder'da: Applications → Utilities → Terminal

### 2. Proje Klasörüne Gidin
Terminal'de şu komutu yazın:
```bash
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

### 4. Tarayıcıda Açın
Terminal'de şu mesajı göreceksiniz:
```
✓ Ready in Xs
○ Local: http://localhost:3000
```

Tarayıcınızda şu adrese gidin:
```
http://localhost:3000
```

## ⚠️ Önemli Notlar

### Sunucuyu Durdurma
Sunucuyu durdurmak için:
- Terminal'de `Ctrl + C` tuşlarına basın

### Sunucu Zaten Çalışıyorsa
Eğer başka bir terminal penceresinde sunucu çalışıyorsa:
- O terminal penceresini bulun
- `Ctrl + C` ile durdurun
- Sonra yukarıdaki adımları tekrarlayın

### Port 3000 Kullanılıyorsa
Eğer port 3000 başka bir uygulama tarafından kullanılıyorsa:
```bash
PORT=3001 npm run dev
```
Sonra tarayıcıda: `http://localhost:3001`

## 🔄 Tam Komut Dizisi

```bash
# 1. Proje klasörüne git
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat

# 2. Sunucuyu başlat
npm run dev

# 3. Tarayıcıda aç
# http://localhost:3000
```

## 💡 İpuçları

- Terminal penceresini açık tutun (sunucu çalışırken)
- Dosya değişikliklerini yaptığınızda sayfa otomatik yenilenir
- Sunucuyu durdurmak için `Ctrl + C` kullanın
