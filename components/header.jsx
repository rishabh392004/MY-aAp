import Link from "next/link";

const Nav = () => {
  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MyApp
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-black transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/Services" className="hover:text-black transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-black transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
