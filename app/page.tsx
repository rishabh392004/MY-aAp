import { Spotlight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Build Better Websites <br />
          <span className="text-blue-600">Using Next.js and Tailwind</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          A simple, modern website made with Next.js and Tailwind CSS.
          Designed for beginners who want to learn and build real projects.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Spotlight className="w-7 h-7 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clean Design</h3>
            <p className="text-gray-600">
              A simple layout with balanced spacing that looks good on any screen size.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
              <Spotlight className="w-7 h-7 text-purple-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast & Responsive</h3>
            <p className="text-gray-600">
              Built with performance in mind, using modern tools and best practices.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Spotlight className="w-7 h-7 text-green-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Easy to Learn</h3>
            <p className="text-gray-600">
              Straightforward structure that helps beginners understand how things work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
