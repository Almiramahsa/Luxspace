import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Homepage/Hero';
import JustArrived from 'parts/Homepage/JustArrived';
import BrowseRoom from 'parts/Homepage/BrowseRoom';
import Footer from 'parts/Footer';
import Document from 'parts/Document';
import Copyright from 'parts/Copyright';

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Footer />
      <Copyright />
    </Document>
  );
}
