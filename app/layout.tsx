import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO: Metadata dinamis untuk hasil pencarian maksimal
export const metadata: Metadata = {
  title: {
    default: 'Jasa Pasang WiFi Murah & Cepat | Internet Unlimited Rumah & Kantor',
    template: '%s | Jasa Pasang WiFi'
  },
  description: 'Butuh internet cepat? Kami menyediakan jasa pasang WiFi murah untuk rumah, kos, dan kantor. Proses aktivasi kilat, tanpa batas kuota (unlimited), dan harga paket terbaik. Hubungi sales kami sekarang!',
  keywords: [
    'Jasa Pasang WiFi', 
    'Pasang WiFi Murah', 
    'Internet Unlimited Rumah', 
    'WiFi Kantor Cepat', 
    'Sales WiFi Terdekat', 
    'Pasang Internet Cepat', 
    'WiFi Murah Tanpa Kabel',
    'Provider Internet Terbaik',
    'Pasang WiFi Surabaya', // Ganti dengan kota targetmu
    'Pasang WiFi Gresik',   // Ganti dengan kota targetmu
    'Pasang WiFi Sidoarjo',   // Ganti dengan kota targetmu
    'Pasang WiFi Mojokerto',   // Ganti dengan kota targetmu
    'Pasang WiFi Lamongan',   // Ganti dengan kota targetmu
    'Pasang WiFi Tuban',   // Ganti dengan kota targetmu
    'Pasang WiFi Bojonegoro',   // Ganti dengan kota targetmu
    'Pasang WiFi Jombang',   // Ganti dengan kota targetmu
    'Pasang WiFi Kediri',   // Ganti dengan kota targetmu
    'Pasang WiFi Blitar',   // Ganti dengan kota targetmu
    'Pasang WiFi Malang',   // Ganti dengan kota targetmu
    'Pasang WiFi Pasuruan',   // Ganti dengan kota targetmu
    'Pasang WiFi Probolinggo',   // Ganti dengan kota targetmu
    'Pasang WiFi Lumajang',   // Ganti dengan kota targetmu
    'Pasang WiFi Jember',   // Ganti dengan kota targetmu
    'Pasang WiFi Banyuwangi',   // Ganti dengan kota targetmu
    'Pasang WiFi Bondowoso',   // Ganti dengan kota targetmu
    'Pasang WiFi Situbondo',   // Ganti dengan kota targetmu
    'Pasang WiFi Probolinggo',   // Ganti dengan kota targetmu
    'Pasang WiFi Lumajang',   // Ganti dengan kota targetmu
    'Pasang WiFi Jember',   // Ganti dengan kota targetmu
    'Pasang WiFi Banyuwangi',   // Ganti dengan kota targetmu
    'Pasang WiFi Bondowoso',   // Ganti dengan kota targetmu
    'Pasang WiFi Situbondo',   // Ganti dengan kota targetmu
    'Jasa Pasang WiFi Murah', 'Pasang WiFi Rumah Unlimited', 'Internet Cepat Tanpa Kuota', 
  'Pasang WiFi Gresik', 'Jasa Pasang WiFi Madura', 'Pasang WiFi Bangkalan', 
  'Internet Murah Untuk Kos-kosan', 'WiFi Cepat Untuk Kantor', 'Sales WiFi Resmi Terdekat', 
  'Provider Internet Terbaik Rumah', 'Pasang WiFi Tanpa Kabel', 'Harga Pasang WiFi Murah', 
  'Pasang WiFi Proses Cepat', 'WiFi Stabil Untuk Gaming', 'Internet Unlimited Anti Lelet', 
  'Jasa Instalasi WiFi Kantor', 'Pasang WiFi Surabaya Terdekat', 'Paket WiFi Murah Untuk Pelajar', 
  'Pasang WiFi Rumah Stabil', 'Promo Pasang WiFi Baru'
  ],
  authors: [{ name: 'Sales WiFi Resmi' }],
  creator: 'Sales WiFi Indonesia',
  
  // OpenGraph untuk WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.jasapasangindihome.biz.id', // Ganti dengan URL asli nanti
    siteName: 'Jasa Pasang WiFi Murah',
    title: 'Pasang WiFi Cepat & Murah - Internet Unlimited Tanpa Ribet',
    description: 'Dapatkan layanan internet unlimited dengan kecepatan tinggi untuk rumah dan kantor. Proses cepat, harga bersahabat.',
  },

  // Verifikasi Google Search Console (opsional tapi sangat disarankan)
  verification: {
    google: 'zJH96wTZYI92DuX4BnWoZGArrD_n2dxQ5aYEBtGnT7c',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
