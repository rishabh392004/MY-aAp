const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About Us
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We build modern, fast, and scalable web applications using reliable
          technologies that grow with your ideas.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5">
          Our Story
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Our journey began with a passion for creating meaningful digital
          experiences. What started as a small team of developers and designers
          has grown into a focused group dedicated to building websites that are
          visually refined, fast, and easy to use.
        </p>
      </div>
    </div>
  );
};

export default About;
