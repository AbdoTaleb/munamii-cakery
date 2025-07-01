import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext';

// if (sessionStorage.redirect) {
//   const redirectPath = sessionStorage.redirect;
//   delete sessionStorage.redirect;
//   window.history.replaceState(null, "", redirectPath);
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <App />
    </CartProvider>
  </StrictMode>,
)
