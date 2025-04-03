import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen font-public-sans bg-white overflow-x-hidden ">
      <Header />
      <main className='px-5 md:px-0'>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}