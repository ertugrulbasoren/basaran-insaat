# 📸 Proje Fotoğrafları Ekleme Rehberi

## 📁 Dosya Konumu

Proje fotoğraflarınızı şu klasöre ekleyin:

```
/Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat/public/images/projects/
```

## 📝 Dosya Adları (ÖNEMLİ!)

Fotoğraflarınızı şu isimlerle kaydedin:

1. **Beştelsiz Mahallesi 110 Sokak** için:
   - `bestelsiz-110.jpg` (veya `.png`)

2. **Sümer Mahallesi 27. Sokak** için:
   - `sumer-27.jpg` (veya `.png`)

3. **Nuripaşa Mahallesi 65/A Sokak** için:
   - `nuripasa-65a.jpg` (veya `.png`)

## 🎯 Adımlar

### Yöntem 1: Finder ile (macOS)

1. **Finder'ı açın**
2. `Command + Shift + G` tuşlarına basın
3. Bu yolu yapıştırın:
   ```
   /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat/public/images/projects/
   ```
4. Fotoğraflarınızı bu klasöre sürükleyip bırakın
5. **Dosya adlarını değiştirin:**
   - Fotoğraf 1 → `bestelsiz-110.jpg`
   - Fotoğraf 2 → `sumer-27.jpg`
   - Fotoğraf 3 → `nuripasa-65a.jpg`

### Yöntem 2: Terminal ile

```bash
# Proje klasörüne gidin
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat/public/images/projects/

# Fotoğraflarınızı buraya kopyalayın (örnek)
cp /YOL/BURAYA/foto1.jpg bestelsiz-110.jpg
cp /YOL/BURAYA/foto2.jpg sumer-27.jpg
cp /YOL/BURAYA/foto3.jpg nuripasa-65a.jpg
```

## ✅ Desteklenen Formatlar

- **JPG/JPEG** - `bestelsiz-110.jpg`
- **PNG** - `bestelsiz-110.png`
- **WebP** - `bestelsiz-110.webp` (önerilen, daha küçük dosya boyutu)

## 📋 Dosya Adı Eşleştirmesi

| Proje Adı | Dosya Adı |
|-----------|-----------|
| Beştelsiz Mahallesi 110 Sokak | `bestelsiz-110.jpg` |
| Sümer Mahallesi 27. Sokak | `sumer-27.jpg` |
| Nuripaşa Mahallesi 65/A Sokak | `nuripasa-65a.jpg` |

## ⚠️ Önemli Notlar

1. **Dosya adları tam olarak eşleşmeli** (büyük/küçük harf duyarlı)
2. **Uzantılar** `.jpg`, `.png` veya `.webp` olmalı
3. **Boşluk yerine tire (-) kullanın** (dosya adlarında)
4. **Türkçe karakterler** dosya adlarında sorun çıkarabilir, bu yüzden İngilizce karakterler kullanıldı

## 🔄 Fotoğrafları Ekledikten Sonra

1. Tarayıcıyı yenileyin (`Cmd + Shift + R` veya `F5`)
2. Projeler sayfasına gidin: `http://localhost:3000/projeler`
3. Fotoğraflar görünmeli

## 🐛 Sorun Giderme

### Fotoğraf görünmüyorsa:

1. **Dosya adını kontrol edin** - Tam olarak eşleşmeli
2. **Dosya uzantısını kontrol edin** - `.jpg`, `.png` veya `.webp`
3. **Klasör yolunu kontrol edin** - `public/images/projects/` içinde olmalı
4. **Tarayıcı cache'ini temizleyin** - Hard refresh yapın (`Cmd + Shift + R`)

### Dosya adı örnekleri:

✅ **Doğru:**
- `bestelsiz-110.jpg`
- `sumer-27.png`
- `nuripasa-65a.webp`

❌ **Yanlış:**
- `Beştelsiz 110.jpg` (büyük harf, boşluk)
- `bestelsiz_110.jpg` (alt çizgi yerine tire)
- `bestelsiz110.jpg` (tire eksik)

## 💡 İpucu

Eğer fotoğraflarınızın adları farklıysa, ekledikten sonra bana söyleyin, kod tarafında dosya adlarını güncelleyebilirim.
