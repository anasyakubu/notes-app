// components/Navbar.tsx

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white h-16 flex items-center justify-between">
      <div className="ml-4 sm:ml-8">
        <h1 className="text-lg font-bold">ChatGPT</h1>
      </div>
      <div className="mr-4 sm:mr-8">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              {/* <a className="hover:text-gray-300">Home</a>
               */}
              Hero
            </Link>
          </li>
          <li>
            <Link href="/about">
              {/* <a className="hover:text-gray-300">About</a> */}
              Hero
            </Link>
          </li>
          {/* Add more navbar links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
