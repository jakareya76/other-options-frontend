import aboutImg from "../assets/about.gif";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
            About Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12">
          <div className="w-full md:w-1/2 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Other Opinion
                </span>
              </h2>

              <p className="text-gray-300 leading-relaxed">
                At Other Opinion, we believe in the power of collective wisdom
                to guide your purchasing decisions. Our platform is designed to
                harness the diverse experiences and insights of our community
                members to provide you with alternative opinions on a wide range
                of products.
              </p>

              <div className="pl-4 border-l-2 border-purple-500 my-8">
                <p className="text-gray-300 italic">
                  "Whether you're in search of the perfect smartphone, a
                  reliable kitchen appliance, or the latest fashion trends,
                  Other Opinion offers a collaborative space where users like
                  you can share their unique perspectives and recommendations."
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                With an emphasis on inclusivity and openness, we invite you to
                explore the multitude of opinions and viewpoints shared by our
                community. Our goal is to empower you with the information you
                need to make confident and informed choices that align with your
                preferences and values.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Join us at Other Opinion, where every voice matters and every
                opinion counts. Together, let's uncover new perspectives and
                discover the products that best fit your needs. Welcome to a
                world of endless possibilities and diverse opinions!
              </p>

              <div className="pt-6">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg transition-all hover:from-purple-500 hover:to-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 shadow-lg shadow-purple-500/20">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-2xl">
                <img
                  src={aboutImg}
                  alt="About Other Opinion"
                  className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Established
                      </p>
                      <p className="text-xl font-bold text-white">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="text-purple-400 text-3xl font-bold">5K+</div>
            <div className="text-gray-400 mt-2">Active Users</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="text-cyan-400 text-3xl font-bold">15K+</div>
            <div className="text-gray-400 mt-2">Product Reviews</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="text-blue-400 text-3xl font-bold">98%</div>
            <div className="text-gray-400 mt-2">Satisfaction Rate</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="text-indigo-400 text-3xl font-bold">24/7</div>
            <div className="text-gray-400 mt-2">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
