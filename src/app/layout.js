import "bootstrap/dist/css/bootstrap.min.css";

import './globals.css';
import { Lato, Montserrat } from 'next/font/google';

const lato = Lato({ 
  weight: ['700'],
  subsets: ['latin'] 
});

const montserrat = Montserrat({ 
  weight: ['400', '600'],
  style: ['italic','normal'],
  subsets: ['latin'] 
});

export const metadata = {
  title: 'Doctor Who',
  description: 'Página Principal de Doctor Who',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>{children}</body>
    </html>
  )
};
