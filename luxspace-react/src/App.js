import './assets/css/app.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import DetailsPage from 'pages/DetailsPage';
import CartPage from 'pages/CartPage';
import PaymentSuccess from 'pages/PaymentSuccess';
import Provider from 'helpers/hooks/useGlobalContext';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Provider>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/categories:idc" element={<DetailsPage />} />
        <Route path="/categories/:idc/producs/:idp" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success-payment" element={<PaymentSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
