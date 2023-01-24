import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Breadcrum from 'components/Breadcrum';
export default function DetailsPage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrum
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/921', name: 'Office Room' },
          { url: '/categories/921/products/212', name: 'Details' },
        ]}
      />
      <Footer />
    </>
  );
}
