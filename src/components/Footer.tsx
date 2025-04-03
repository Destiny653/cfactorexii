
const Footer = () => {
  return (
    <footer className="bg-[#2d314d] py-12">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-8 md:col-span-3">
            <img src="/images/logo-white.svg" alt="Easybank" className="h-6" />
            <div className="flex space-x-4">
              {['facebook', 'youtube', 'twitter', 'pinterest', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="group"
                >
                  <img 
                    src={`/images/icon-${social}.svg`} 
                    alt={social} 
                    className="h-6 group-hover:filter group-hover:brightness-200 group-hover:sepia group-hover:hue-rotate-90 transition-all duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>
  
          {/* Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-center md:text-left">
            <div className="space-y-3">
              <a href="#" className="block text-white hover:text-lime-green transition-colors">About Us</a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors">Contact</a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors">Blog</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-white hover:text-lime-green transition-colors">Careers</a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors">Support</a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors">Privacy Policy</a>
            </div>
          </div>
  
          {/* CTA and Copyright */}
          <div className="flex flex-col items-center md:items-end md:col-span-4 space-y-6">
          <button className="bg-gradient-to-r bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] hover:to-[#2AB6D9] hover:from-[#8bca9c] to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-opacity duration-200">
          Request Invite
            </button>
            <p className=" text-white text-sm">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;