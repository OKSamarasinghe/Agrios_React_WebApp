import React from 'react';
import BannerImage from '../assets/images/News_banner.jpg';
import ArticleImage1 from '../assets/images/artical_image1.jpg';
import ArticleImage2 from '../assets/images/artical_image2.jpg';
import ArticleImage3 from '../assets/images/artical_image3.jpg';

const News = () => {
  return (
    <div>
      {/* This will display your header */}
      
      {/* News Banner Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our News</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 flex flex-wrap">
        {/* Articles Section */}
        <div className="w-full lg:w-2/3 pr-4"> {/* Add padding right */}
          {/* Article 1 */}
          <div className="flex flex-col space-y-2 mb-6">
            <div>
              <h2 className="text-xl font-bold">Bringing Food Production Back To Cities</h2>
              <p className="text-gray-700 mt-2 w-[800px]"> {/* Set width to match the image */}
                Urban farming is transforming the way we think about food production. By integrating farms within cities, we reduce transportation costs and carbon footprints while making fresh produce more accessible to city dwellers. Vertical farming and community farms are all part of this movement, helping to reconnect people with the source of their food and fostering sustainable urban living.
              </p>
            </div>
            <img
              src={ArticleImage1}
              alt="Bringing Food Production Back To Cities"
              className="w-[800px] h-[450px] object-cover mb-4" // Set fixed width and height with bottom margin
            />
          </div>

          {/* Article 2 */}
          <div className="flex flex-col space-y-2 mb-6">
            <div>
              <h2 className="text-xl font-bold">The Future of Farming, Smart Irrigation Solutions</h2>
              <p className="text-gray-700 mt-2 w-[800px]"> {/* Set width to match the image */}
                Smart irrigation solutions are revolutionizing how farmers manage water resources. By utilizing technology, farmers can optimize water usage, reduce waste, and improve crop yields. These advancements are crucial in addressing the challenges posed by climate change and water scarcity.
              </p>
            </div>
            <img
              src={ArticleImage2}
              alt="The Future of Farming, Smart Irrigation Solutions"
              className="w-[800px] h-[450px] object-cover mb-4" // Set fixed width and height with bottom margin
            />
          </div>

          {/* Article 3 */}
          <div className="flex flex-col space-y-2 mb-6">
            <div>
              <h2 className="text-xl font-bold">Agronomy and relation to Other Sciences</h2>
              <p className="text-gray-700 mt-2 w-[800px]"> {/* Set width to match the image */}
                Agronomy is the science of soil management and crop production. It integrates various scientific disciplines, including biology, ecology, and chemistry, to improve agricultural practices. Understanding the relationships between agronomy and other sciences is essential for sustainable farming and food security.
              </p>
            </div>
            <img
              src={ArticleImage3}
              alt="Agronomy and relation to Other Sciences"
              className="w-[800px] h-[450px] object-cover mb-4" // Set fixed width and height with bottom margin
            />
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/3">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Latest Posts</h3>
            <ul className="mt-4 space-y-2">
              {/* Latest Post 1 */}
              <li className="flex items-center space-x-2">
                <img
                  src={ArticleImage1} // Using the same image as in articles
                  alt="Bringing Food Production Back To Cities"
                  className="w-20 h-20 object-cover"
                />
                <a href="/" className="text-blue-500">Bringing Food Production Back To Cities</a>
              </li>
              {/* Latest Post 2 */}
              <li className="flex items-center space-x-2">
                <img
                  src={ArticleImage2} // Using the same image as in articles
                  alt="The Future of Farming, Smart Irrigation Solutions"
                  className="w-20 h-20 object-cover"
                />
                <a href="/" className="text-blue-500">The Future of Farming, Smart Irrigation Solutions</a>
              </li>
              {/* Latest Post 3 */}
              <li className="flex items-center space-x-2">
                <img
                  src={ArticleImage3} // Using the same image as in articles
                  alt="Agronomy and relation to Other Sciences"
                  className="w-20 h-20 object-cover"
                />
                <a href="/" className="text-blue-500">Agronomy and relation to Other Sciences</a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="text-blue-500">Agriculture</a></li>
              <li><a href="/" className="text-blue-500">Technology</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tags</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-gray-200 p-1 rounded">Agriculture</span>
              <span className="text-xs bg-gray-200 p-1 rounded">Farming</span>
              <span className="text-xs bg-gray-200 p-1 rounded">Irrigation</span>
            </div>
          </div>
        </div>
      </div>

      {/* This will display your footer */}
    </div>
  );
};

export default News;
