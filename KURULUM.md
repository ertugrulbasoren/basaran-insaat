# Node.js Kurulum Rehberi - macOS

## 🚀 Hızlı Kurulum (Önerilen Yöntem)

### Yöntem 1: Homebrew ile Kurulum (En Kolay)

1. **Homebrew'i kontrol edin:**
```bash
brew --version
```

Eğer Homebrew kurulu değilse, önce Homebrew'i kurun:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **Node.js'i kurun:**
```bash
brew install node
```

3. **Kurulumu doğrulayın:**
```bash
node --version
npm --version
```

### Yöntem 2: Resmi Installer ile Kurulum

1. **Node.js resmi sitesine gidin:**
   - https://nodejs.org/ adresine gidin
   - LTS (Long Term Support) versiyonunu indirin (önerilen)
   - macOS için `.pkg` dosyasını indirin

2. **Installer'ı çalıştırın:**
   - İndirilen `.pkg` dosyasını çift tıklayarak kurulumu başlatın
   - Kurulum sihirbazını takip edin

3. **Terminal'i yeniden başlatın:**
   - Terminal penceresini kapatıp yeniden açın

4. **Kurulumu doğrulayın:**
```bash
node --version
npm --version
```

## ✅ Kurulum Sonrası

Node.js kurulduktan sonra proje klasöründe şu komutları çalıştırın:

```bash
# Proje klasörüne gidin
cd /Applications/XAMPP/xamppfiles/htdocs/demo/basaran_insaat

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine giderek projeyi görebilirsiniz.

## 🐛 Sorun Giderme

### "command not found: node" hatası alıyorsanız:

1. **Terminal'i yeniden başlatın**
2. **PATH'i kontrol edin:**
```bash
echo $PATH
```

Eğer Node.js PATH'de değilse, şu komutu çalıştırın:
```bash
export PATH="/usr/local/bin:$PATH"
```

Kalıcı olması için `~/.zshrc` dosyasına ekleyin:
```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Homebrew kurulum hatası alıyorsanız:

Xcode Command Line Tools'u kurun:
```bash
xcode-select --install
```

## 📦 Alternatif: NVM (Node Version Manager) Kullanımı

Farklı Node.js versiyonları arasında geçiş yapmak isterseniz:

1. **NVM'i kurun:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. **Terminal'i yeniden başlatın veya:**
```bash
source ~/.zshrc
```

3. **Node.js'i kurun:**
```bash
nvm install --lts
nvm use --lts
```

## 💡 Yardım

Kurulum sırasında sorun yaşarsanız:
- Node.js resmi dokümantasyonu: https://nodejs.org/en/docs/
- Homebrew dokümantasyonu: https://brew.sh/
