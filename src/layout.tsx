import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-public-sans bg-white dark:bg-dark-blue overflow-x-hidden`}
      style={{
        backgroundColor: theme === 'dark' ? '#141625' : '#fff',
        color: theme === 'dark' ? 'white' : 'black'
      }}
    >
      <Header />
      <main className='px-5 md:px-0'>
        <Hero />
        <div className='bg-[#f4f5f7]' 
         style={{
          backgroundColor: theme === 'dark' ? '#141625' : 'bg-[#f4f5f7]',
          color: theme === 'dark' ? 'white' : 'black'
        }}
        >
          <Features />
        </div>
        <Articles />
      </main>
      <Footer />
    </div>
  );
}