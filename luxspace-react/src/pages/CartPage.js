import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Breadcrumb from 'components/Breadcrumb';
import ShoppingCart from './Cart/ShoppingCart';
import ShippingDetails from './Cart/ShippingDetails';

export default function CartPage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shopping Cart' },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
