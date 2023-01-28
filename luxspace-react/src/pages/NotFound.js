import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import ErrorMessage from 'parts/ErrorMessage';
import useScrollToTop from 'helpers/hooks/useScrollToTop';
export default function NotFound() {
  useScrollToTop();
  return (
    <>
      <Header theme="black" />
      <ErrorMessage />
      <Footer />
    </>
  );
}
