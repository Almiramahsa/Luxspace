import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import JustArrived from 'parts/Homepage/JustArrived';
export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <JustArrived />
    </>
  );
}
