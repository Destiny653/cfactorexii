import { features } from '../data/features';

const Features = () => (
  <section className="bg-[#f4f5f7] py-16 md:py-60"> {/* Using direct HEX color for consistency */}
    <div className="container mx-auto px-5 md:px-0">
      <div className="text-center md:text-left max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-light text-dark-blue mb-5">Why choose Easybank?</h2>
        <p className="text-grayish-blue mb-12 md:mb-16">
          We leverage Open Banking to turn your bank account into your financial hub. 
          Control your finances like never before.
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center md:text-left">
            <img src={feature.icon} alt="" className="mx-auto md:mx-0 mb-6 h-16 w-16" />
            <h3 className="text-xl font-light text-dark-blue mb-4">{feature.title}</h3>
            <p className="text-sm text-grayish-blue">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;