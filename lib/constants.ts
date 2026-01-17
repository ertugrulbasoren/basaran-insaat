export const siteConfig = {
  name: 'Başaran İnşaat & Emlak',
  description: 'İstanbul\'un güvenilir inşaat ortağı',
  url: 'https://basaraninsaat.com',
  ogImage: '/og-image.jpg',
  contactPerson: 'Sadık BAŞÖREN',
  links: {
    email: 'basaraninsaatemlak@gmail.com',
    phone: '05334132598',
    whatsapp: '905334132598',
  },
}

export const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Projelerimiz', href: '/projeler' },
  { name: 'Hizmetlerimiz', href: '/hizmetler' },
  { name: 'Kurumsal', href: '/kurumsal' },
  { name: 'İletişim', href: '/iletisim' },
]

export const branches = [
  {
    name: 'Zeytinburnu Şubesi',
    address: 'Yeşiltepe Mahallesi 54/1 Sokak No:26-1A Zeytinburnu İstanbul',
    phone: '05334132598',
    email: 'basaraninsaatemlak@gmail.com',
    mapUrl: 'https://goo.gl/maps/example1',
  },
]

export const services = [
  {
    id: 1,
    title: 'Kentsel Dönüşüm',
    description: 'Güvenilir ve hızlı kentsel dönüşüm projeleri ile hayalinizdeki konuta kavuşun.',
    icon: 'Building',
    href: '/hizmetler/kentsel-donusum',
  },
  {
    id: 2,
    title: 'İnşaat & Müteahhitlik',
    description: 'Kaliteli malzeme ve uzman ekip ile modern konut projeleri inşa ediyoruz.',
    icon: 'Hammer',
    href: '/hizmetler/insaat-muteahhitlik',
  },
  {
    id: 3,
    title: 'Emlak Danışmanlığı',
    description: 'Profesyonel emlak danışmanlığı hizmeti ile doğru yatırım kararları alın.',
    icon: 'Home',
    href: '/hizmetler/emlak-danismanligi',
  },
]

export const stats = [
  {
    id: 1,
    value: 25000,
    suffix: '+',
    label: 'm² İnşaat Alanı',
    description: 'Toplam inşa edilen metrekare',
  },
  {
    id: 2,
    value: 500,
    suffix: '+',
    label: 'Mutlu Müşteri',
    description: 'Memnuniyetle hizmet verdiğimiz aileler',
  },
  {
    id: 3,
    value: 15,
    suffix: '+',
    label: 'Yıllık Deneyim',
    description: 'Sektördeki tecrübemiz',
  },
]

export const whyUsReasons = [
  {
    title: 'Güvenilirlik',
    description: 'Sektördeki deneyimimiz ve referanslarımız ile güvenilir bir ortak olmanın gururunu yaşıyoruz.',
    icon: 'Shield',
  },
  {
    title: 'Kalite',
    description: 'Premium malzemeler ve uzman ekip ile en yüksek kalite standartlarında projeler üretiyoruz.',
    icon: 'Award',
  },
  {
    title: 'Deneyim',
    description: '15+ yıllık sektör tecrübemiz ile her türlü projeyi başarıyla tamamlıyoruz.',
    icon: 'Briefcase',
  },
  {
    title: 'Şeffaflık',
    description: 'Açık iletişim, zamanında teslimat ve şeffaf süreç yönetimi ile müşteri memnuniyetini ön planda tutuyoruz.',
    icon: 'Eye',
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Arazi Seçimi',
    description: 'Size en uygun lokasyonu birlikte belirliyoruz.',
    icon: 'MapPin',
  },
  {
    step: 2,
    title: 'Tasarım',
    description: 'Hayalinizdeki konutun tasarımını profesyonel ekibimizle çiziyoruz.',
    icon: 'PenTool',
  },
  {
    step: 3,
    title: 'İnşaat',
    description: 'Kaliteli malzeme ve uzman ekip ile inşaat sürecini yönetiyoruz.',
    icon: 'Hammer',
  },
  {
    step: 4,
    title: 'Teslim',
    description: 'Zamanında ve sorunsuz teslimat ile evinize kavuşuyorsunuz.',
    icon: 'Key',
  },
]
