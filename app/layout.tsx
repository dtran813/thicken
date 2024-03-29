import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/header/Header';
import './globals.css';
import ToastProvider from './providers/ToastProvider';

const fontInter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thicken Thighs Inc.',
  description:
    'The best slow food in town. We provide the best quality with lean, fresh chickens everyday from our own backyard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontInter.className}>
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
