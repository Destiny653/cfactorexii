 
const Hero = () => { 
  
  return (
    <section className="relative bg-very-light-gray dark:bg-dark-blue px-0 md:px-30 pt-20 md:pt-0">
      {/* Mobile Images - shown only on mobile */}
      <div className="md:hidden relative">
        <div className="bg-very-light-gray dark:bg-dark-blue">
          <img 
            src="/images/bg-intro-mobile.svg" 
            alt="" 
            className="w-full"
          />
        </div>
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[90%]">
          <img 
            src="/images/image-mockups.png" 
            alt="Mobile banking app mockups" 
            className="w-full"
          />
        </div>
      </div>

      <div className="container flex flex-col justify-center mx-auto px-5 md:px-0 relative z-10 md:h-[80vh]">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content */}
          <div className="w-full md:w-[45%] text-center md:text-left py-12 md:py-40">
            <h1 className="text-4xl md:text-5xl font-light text-dark-blue   mb-5 leading-tight">
              Next generation digital banking
            </h1>
            <p className="text-grayish-blue mb-8 max-w-md mx-auto md:mx-0">
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <button className="bg-gradient-to-r bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] hover:to-[#2AB6D9] hover:from-[#8bca9c] to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-opacity duration-200">
              Request Invite
            </button>
          </div>
          
          {/* Desktop background - only visible on desktop */}
          <div className="md:block md:w-[55%] absolute md:-right-20 lg:-right-70 top-0 h-full overflow-visible">
            <div className="relative h-full z-50">
              <img 
                src="/images/bg-intro-desktop.svg" 
                alt="" 
                className="absolute -right-36 -top-36 w-[150%] max-w-none"
              />
              <img 
                src="/images/image-mockups.png" 
                alt="Mobile banking app mockups" 
                className="absolute -right-20 -top-20 w-[120%] max-w-none z-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;