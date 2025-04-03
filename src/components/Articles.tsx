import { articles } from '../data/articles';
 
const Articles = () => (
    <section className="bg-very-light-gray py-16 md:py-24">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-light text-dark-blue mb-8 md:mb-12 text-center md:text-left">
          Latest Articles
        </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
          <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm h-full transform transition-transform hover:-translate-y-1 hover:shadow-md">
            <div className="h-48 overflow-hidden">
              <img src={article.image} alt="" className="w-full h-full object-cover" />
              </div>
            <div className="p-6">
              <span className="text-xs text-grayish-blue">By {article.author}</span>
              <h3 className="text-lg font-light text-dark-blue mt-2 mb-2 hover:text-lime-green cursor-pointer transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-grayish-blue line-clamp-3">{article.excerpt}</p>
        </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Articles;