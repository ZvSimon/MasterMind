import { About } from './components/About';
import { Cta } from './components/Cta';
import { FAQ } from './components/FAQ';
import { Maths } from './components/Maths';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import { Pricing } from './components/Pricing';
import { ScrollToTop } from './components/ScrollToTop';
import { Services } from './components/Services';

import { Team } from './components/Team';
import { Post } from './components/Post';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Maths />
      <Services />
      <Cta />
      <Post />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
