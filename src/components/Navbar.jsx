import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to : "/" },
    { name: "Collection", to : "/collection" },
    { name: "Kurtas", to : "/kurtas" },
    { name: "Accessories", to : "/accessories" },
    { name: "About", to : "/about" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      console.log("Searching for:", search);
      // Connect this to your product search functionality.
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-orange-100 bg-[#FFFCF7] shadow-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          className="group flex shrink-0 flex-col leading-none"
          aria-label="Dooch BY Balach home"
        >
          <span className="text-2xl font-black tracking-tight text-black sm:text-3xl">
            DOOCH<span className="text-[#F04418]">.</span>
          </span>

          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-gray-600 sm:text-[10px]">
            BY BALACH
          </span>

          <span className="mt-1 h-[2px] w-0 bg-[#F04418] transition-all duration-300 group-hover:w-full" />
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="whitespace-nowrap text-sm font-semibold text-gray-800 transition-colors duration-200 hover:text-[#F04418] xl:text-[15px]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="hidden w-48 items-center rounded-full border border-gray-200 bg-white px-3 py-2 transition-all duration-300 focus-within:border-[#F04418] focus-within:ring-2 focus-within:ring-orange-100 md:flex xl:w-60"
        >
          <button
            type="submit"
            aria-label="Search products"
            className="text-gray-500 transition-colors hover:text-[#F04418]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m16 16 4 4" />
            </svg>
          </button>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search collection..."
            aria-label="Search collection"
            className="ml-2 min-w-0 flex-1 bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
          />
        </form>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 text-black transition-colors hover:bg-orange-50 lg:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-orange-100 bg-[#FFFCF7] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 pb-5 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-800 transition-colors hover:bg-orange-50 hover:text-[#F04418]"
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE SEARCH */}
          <form
            onSubmit={handleSearch}
            className="mt-3 flex items-center rounded-full border border-gray-200 bg-white px-4 py-3 focus-within:border-[#F04418]"
          >
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search kurtas, turbans..."
              aria-label="Search collection"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />

            <button
              type="submit"
              aria-label="Search products"
              className="ml-2 font-bold text-[#F04418]"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}