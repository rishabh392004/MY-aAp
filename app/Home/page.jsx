const Home = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Build Modern Web Apps with Confidence
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Fast, scalable, and beautifully designed applications powered by
          Next.js and modern web technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/about"
            className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20 grid gap-10 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            ⚡ Fast Performance
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Optimized for speed with server-side rendering and smart caching.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            🎨 Clean Design
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Minimal, responsive layouts that look great on any device.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            🚀 Scalable
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Built with best practices so your app grows with your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
