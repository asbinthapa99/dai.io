import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialStats from './components/SocialStats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <SocialStats />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
