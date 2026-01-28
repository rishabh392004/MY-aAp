import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">MyApp</h2>
            <p className="mt-2 text-sm text-gray-600">
              Building modern web experiences with Next.js.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-black transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Follow</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
