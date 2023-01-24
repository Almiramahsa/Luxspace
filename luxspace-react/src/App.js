import './assets/css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import DetailsPage from 'pages/DetailsPage';
import CartPage from 'pages/CartPage';
import PaymentSuccess from 'pages/PaymentSuccess';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories:idc" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success-payment" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
