import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import CookieConsent from '@/components/cookie-consent'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://coronadonationalforestheritagesociety.org'),
  title: {
    default: 'Coronado National Forest Heritage Society | Preserving Heritage',
    template: '%s | Coronado National Forest Heritage Society',
  },
  description:
    'The Coronado National Forest Heritage Society safeguards the cultural and natural heritage of the Coronado National Forest through preservation, interpretation, and partnership with chapters at Brown Canyon Ranch and Kentucky Camp.',
  keywords: [
    'Coronado National Forest',
    'heritage society',
    'Arizona heritage',
    'Brown Canyon Ranch',
    'Kentucky Camp',
    'forest preservation',
    'volunteer',
    'donate',
    'nonprofit',
    'Sierra Vista',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://coronadonationalforestheritagesociety.org/',
    siteName: 'Coronado National Forest Heritage Society',
    title: 'Coronado National Forest Heritage Society | Preserving Heritage',
    description:
      'Safeguarding the cultural and natural heritage of the Coronado National Forest in partnership with the Brown Canyon Ranch and Kentucky Camp chapters.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Coronado National Forest Heritage Society',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coronado National Forest Heritage Society',
    description:
      'Preserving heritage and fostering partnerships across the Coronado National Forest in southern Arizona.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2f5d50',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://browncanyonranch.org" />
        <link rel="preconnect" href="https://www.kentuckycamp.org" />
        <link rel="preconnect" href="https://www.guidestar.org" />
        <link rel="dns-prefetch" href="https://browncanyonranch.org" />
        <link rel="dns-prefetch" href="https://www.kentuckycamp.org" />
        <link rel="dns-prefetch" href="https://www.guidestar.org" />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
