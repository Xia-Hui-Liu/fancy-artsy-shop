import { AppProps } from "next/app";
import { CartProvider } from '../context/CartContext';
import React from "react";
import '../styles/global.css'; 
import '@fontsource/inter/600.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      );
};

export default App;