import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Footer from '../components/ui/Footer';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setHeroVisible(false);
      } else {
        setHeroVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {heroVisible && <Hero />}
      <Navbar />
      
      <main className={`${heroVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <About />
        <Work />
        <Articles />
        <Contact />
      </main>

      <Footer />
    </>
  );
}