import { Lato, Montserrat } from 'next/font/google';

export const lato = Lato({ 
  weight: ['900', '700'],
  subsets: ['latin'], 
  variable: "--font-lato"
});

export const montserrat = Montserrat({ 
  weight: ['400', '600'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: "--font-montserrat"
});