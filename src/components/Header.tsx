import  { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-0 md:px-30 ${isScrolled ? 'bg-white dark:bg-dark-blue shadow-md' : 'bg-white dark:bg-dark-blue'}`}
    style={{ 
      backgroundColor: theme === 'dark' ? '#141625' : '#fff',
      color: theme === 'dark' ? 'white' : 'black'
    }}
    >
      <div className="container mx-auto px-5 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className={`flex items-center ${theme === 'dark'? 'text-white' : ''}`}>
            <img src={theme === 'dark' ? '/images/logo-white.svg' : '/images/logo.svg'} alt="Easybank" className="h-5" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex h-full">
            {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative h-full flex items-center px-4 text-grayish-blue hover:text-dark-blue transition-colors duration-200 group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-[#33D35E] to-[#2AB6D9] transform origin-bottom transition-all duration-300 group-hover:h-1"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-light-grayish-blue dark:hover:bg-grayish-blue/20 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
              {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-dark-blue" />}
          </button>
            
            <button className="  bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] hover:to-[#2AB6D9] hover:from-[#8bca9c] to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-opacity duration-200">
              Request Invite
            </button>
      </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-light-grayish-blue dark:hover:bg-grayish-blue/20 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-dark-blue" />}
            </button>
            
            <button 
              className="p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          >
              {isMenuOpen ? 
                <X size={24} className="text-dark-blue dark:text-white"
                style={{ 
                  backgroundColor: theme === 'dark' ? '#141625' : '#fff',
                  color: theme === 'dark' ? 'white' : 'black'
                }}
                 /> : 
                <Menu size={24} className="text-dark-blue dark:text-white"
                style={{ 
                  backgroundColor: theme === 'dark' ? '#141625' : '#fff',
                  color: theme === 'dark' ? 'white' : 'black'
                }}
                 />
              }
            </button>
            </div>
        </nav>
        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-dark-blue/80 to-transparent z-40 md:hidden" onClick={() => setIsMenuOpen(false)} >
          <div 
            className="absolute top-20 inset-x-5 bg-white dark:bg-dark-blue rounded-lg shadow-lg py-8"
            style={{ 
              backgroundColor: theme === 'dark' ? '#141625' : '#fff',
              color: theme === 'dark' ? 'white' : 'black'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6 text-center">
              {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="relative text-dark-blue hover:text-lime-green dark:hover:text-lime-green transition-colors pb-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/4 w-1/2 h-0 bg-gradient-to-r from-[#33D35E] to-[#2AB6D9] transform origin-bottom transition-all duration-300 group-hover:h-0.5"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;