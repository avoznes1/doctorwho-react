import { Lato, Montserrat } from 'next/font/google';

export const lato = Lato({ 
  weight: ['700', '900'],
  subsets: ['latin'], 
  variable: "--font-lato"
});

export const montserrat = Montserrat({ 
  weight: ['300', '600'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: "--font-montserrat"
});