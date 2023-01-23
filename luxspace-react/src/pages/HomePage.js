import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import JustArrived from 'parts/Homepage/JustArrived';
import BrowseRoom from 'parts/Homepage/BrowseRoom';
import Footer from 'parts/Footer';
export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute" />

      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Footer />
    </>
  );
}
