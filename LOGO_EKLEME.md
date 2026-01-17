# 🖼️ Logo Dosyası Ekleme Rehberi

## 📁 Dosya Konumu

Logo dosyanızı şu klasöre ekleyin:

```
/Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat/public/images/
```

## ✅ Desteklenen Formatlar

- **SVG** (Önerilen) - `logo.svg`
- **PNG** - `logo.png` (şeffaf arka planlı önerilir)
- **JPG/JPEG** - `logo.jpg`

## 📝 Adımlar

### 1. Logo Dosyasını Kopyalayın

Logo dosyanızı bulun ve şu klasöre kopyalayın:
```
public/images/logo.png
```
veya
```
public/images/logo.svg
```

### 2. Logo Bileşenini Güncelleyin

Dosyayı ekledikten sonra, `components/ui/Logo.tsx` dosyasını güncelleyeceğim.

## 🎯 Dosya Adı Önerileri

- `logo.svg` - Vektör logo (önerilen)
- `logo.png` - Raster logo
- `logo-white.svg` - Beyaz arka plan için
- `logo-dark.svg` - Koyu arka plan için
- `logo-full.svg` - Tam logo (bina + yazı birlikte)
- `logo-icon.svg` - Sadece bina ikonu

## 📂 Tam Klasör Yolu

macOS Finder'da bu yolu açabilirsiniz:
```
/Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat/public/images/
```

## 💡 Terminal ile Dosya Kopyalama

Terminal'de şu komutla kopyalayabilirsiniz:
```bash
# Örnek (dosyanızın yerine göre değiştirin):
cp /Users/ertugrulbasoren/Downloads/logo.png /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat/public/images/
```

## 🔄 Sonraki Adım

Logo dosyasını ekledikten sonra bana haber verin, `Logo.tsx` bileşenini gerçek görsel dosyasını kullanacak şekilde güncelleyeceğim.
