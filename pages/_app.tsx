import { CartProvider } from '@/CartContext';
import Header from '@/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
