import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Breadcrumb from 'components/Breadcrumb';
import ProductDetail from 'parts/DetailsPage/ProductDetail';
import Suggestion from 'parts/DetailsPage/Suggestion';
export default function DetailsPage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/921', name: 'Office Room' },
          { url: '/categories/921/products/212', name: 'Details' },
        ]}
      />
      <ProductDetail />
      <Suggestion />
      <Footer />
    </>
  );
}
