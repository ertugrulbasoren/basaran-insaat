import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { navigation, branches, siteConfig } from '@/lib/constants'
import { formatPhoneNumber } from '@/lib/utils'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-dark-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo showText={true} />
            </Link>
            <p className="text-light-400 text-sm mt-4">
              İstanbul&apos;un güvenilir inşaat ortağı. Kaliteli projeler, güvenilir hizmet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-subheading text-lg font-semibold text-light-50 mb-4">
              Hızlı Erişim
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-light-400 hover:text-primary-500 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-subheading text-lg font-semibold text-light-50 mb-4">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="text-light-400 hover:text-primary-500 text-sm transition-colors"
                >
                  {formatPhoneNumber(siteConfig.links.phone)}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-light-400 hover:text-primary-500 text-sm transition-colors break-all"
                >
                  {siteConfig.links.email}
                </a>
              </li>
              {branches.slice(0, 1).map((branch) => (
                <li key={branch.name} className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-light-400 text-sm">
                    {branch.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-subheading text-lg font-semibold text-light-50 mb-4">
              Şubemiz
            </h3>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.name}>
                  <div className="text-light-400 text-sm">
                    <div className="font-medium text-light-300 mb-1">
                      {branch.name}
                    </div>
                    <div className="text-xs">{branch.address}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-light-400 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-sm text-light-400">
              <Link href="/kurumsal" className="hover:text-primary-500 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kurumsal" className="hover:text-primary-500 transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
