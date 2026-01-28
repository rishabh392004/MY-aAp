const Services = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          We provide end-to-end solutions to help you design, build, and scale
          modern web applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Web Development
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            High-performance websites and applications built with modern
            frameworks like Next.js and React.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            UI / UX Design
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Clean, intuitive interfaces focused on usability, accessibility,
            and conversion.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Performance Optimization
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Faster load times, better SEO, and optimized user experience across
            all devices.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-block rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Services;
