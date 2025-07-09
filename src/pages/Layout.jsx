import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (path) =>
    `block px-4 py-2 rounded-md font-medium text-sm ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:hidden bg-white border-b px-4 py-2 flex justify-between items-center">
        <span className="text-lg font-semibold">Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-48 bg-white border-r p-4 flex flex-col gap-2 transform`}
      >
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link to="/head-tail" className={linkClasses("/head-tail")}>
          Head & Tail
        </Link>
      </aside>

      <main className="flex-1 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
