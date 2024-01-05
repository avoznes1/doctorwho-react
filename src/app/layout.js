import "bootstrap/dist/css/bootstrap.min.css";

import './globals.css';
import '@/app/fonts/fonts.css'
import { lato, montserrat } from '@/app/fonts/fonts';

import Header from './components/header/header';
import Footer from './components/footer/footer';

export const metadata = {
  title: 'Doctor Who',
  description: 'Página Principal de Doctor Who',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lato.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  )
};
