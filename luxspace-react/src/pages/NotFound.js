import React from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import ErrorMessage from 'parts/ErrorMessage';
import Document from 'parts/Document';
export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <ErrorMessage />
      <Footer />
    </Document>
  );
}
