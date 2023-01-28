import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Homepage/Hero';
import JustArrived from 'parts/Homepage/JustArrived';
import BrowseRoom from 'parts/Homepage/BrowseRoom';
import Footer from 'parts/Footer';
import useScrollAnchor from 'helpers/hooks/useScrollAnchor';
import useModalDOM from 'helpers/hooks/useModalDOM';
import useScrollToTop from 'helpers/hooks/useScrollToTop';
import Copyright from 'parts/Copyright';

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();
  useScrollToTop();
  return (
    <>
      <Header theme="white" position="absolute" />

      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Footer />
      <Copyright />
    </>
  );
}
