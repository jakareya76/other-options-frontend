import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="container px-2 py-10 mx-auto">
      <h2 className="text-2xl font-semibold text-center md:text-3xl">
        About Us
      </h2>

      <div className="flex flex-col justify-center h-full gap-5 my-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={aboutImg} alt="about-img" className="w-full h-[480px]" />
        </div>
        <div className="w-full mt-8 md:w-1/2">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Welcome to Other Opinion
          </h2>
          <p className="my-5 text-sm text-gray-500">
            At Other Opinion, we believe in the power of collective wisdom to
            guide your purchasing decisions. Our platform is designed to harness
            the diverse experiences and insights of our community members to
            provide you with alternative opinions on a wide range of products.
          </p>
          <p className="my-5 text-sm text-gray-500">
            Whether you're in search of the perfect smartphone, a reliable
            kitchen appliance, or the latest fashion trends, Other Opinion
            offers a collaborative space where users like you can share their
            unique perspectives and recommendations.
          </p>
          <p className="my-5 text-sm text-gray-500">
            With an emphasis on inclusivity and openness, we invite you to
            explore the multitude of opinions and viewpoints shared by our
            community. Our goal is to empower you with the information you need
            to make confident and informed choices that align with your
            preferences and values. Join us at Other Opinion, where every voice
            matters and every opinion counts. Together, let's uncover new
            perspectives and discover the products that best fit your needs.
            Welcome to a world of endless possibilities and diverse opinions!
          </p>
          <button className="px-8 btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
