import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Collection", to: "/collection" },
    { name: "Kurtas", to: "/kurtas" },
    { name: "Accessories", to: "/accessories" },
    { name: "About Us", to: "/about" },
  ];

  const categories = [
    { name: "Balochi Kurtas", to: "/kurtas" },
    { name: "Shalwar Kameez", to: "/shalwar-kameez" },
    { name: "Traditional Turbans", to: "/turbans" },
    { name: "Men's Accessories", to: "/accessories" },
  ];

  return (
    <footer className="border-t border-orange-100 bg-[#FFFCF7] text-gray-700">
      {/* Newsletter Section */}
      <div className="border-b border-orange-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 text-center md:flex-row md:text-left lg:px-10">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#F04418]">
              Stay Connected
            </p>
            <h2 className="text-2xl font-black text-black sm:text-3xl">
              Tradition Meets <span className="text-[#F04418]">Style.</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
              Discover timeless Balochi menswear, traditional craftsmanship,
              and styles made to celebrate our heritage.
            </p>
          </div>

          <a
            href="#collection"
            className="shrink-0 rounded-full bg-[#F04418] px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-black"
          >
            Explore Collection →
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-16">
        {/* Brand Information */}
        <div>
          <a href="#home" className="inline-block">
            <h2 className="text-3xl font-black tracking-tight text-black">
              DOOCH<span className="text-[#F04418]">.</span>
            </h2>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500">
              BY BALACH
            </p>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
            Welcome to Dooch Mens Balochi Collection, your destination for
            traditional Balochi men's clothing. Explore kurtas, shalwar
            kameez, turbans, and accessories that bring heritage and modern
            style together.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="#collection"
              aria-label="Explore our collection"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 text-[#F04418] transition hover:bg-[#F04418] hover:text-white"
            >
              <span className="text-lg">✦</span>
            </a>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Proudly Inspired by Balochi Heritage
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-black">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-sm transition-colors hover:text-[#F04418]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-black">
            Our Categories
          </h3>
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.to}
                  className="text-sm transition-colors hover:text-[#F04418]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-black">
            Get In Touch
          </h3>

          <p className="text-sm leading-6 text-gray-500">
            Have a question about our collection? We'd love to hear from you.
          </p>

          <div className="mt-5 space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <span className="text-lg text-[#F04418]">✉</span>
              <span>
                <span className="block font-semibold text-black">Email</span>
                <span className="text-gray-500">
                  aliyan@gmail.com
                </span>
              </span>
            </p>

            <p className="flex items-start gap-3">
              <span className="text-lg text-[#F04418]">☎</span>
              <span>
                <span className="block font-semibold text-black">Phone</span>
                <span className="text-gray-500">
                  1020
                </span>
              </span>
            </p>

            <p className="flex items-start gap-3">
              <span className="text-lg text-[#F04418]">⌖</span>
              <span>
                <span className="block font-semibold text-black">Location</span>
                <span className="text-gray-500">
                 Abdullah Apartment ground floor near spicy corner,new kumbhar wara,nawalane,Lyari,arachi!
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-100 bg-[#FFF8EF]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left lg:px-10">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-black">Dooch-BY-Balach.</span>{" "}
            All rights reserved.
          </p>

          <p className="text-xs font-medium text-gray-500">
            Celebrating Tradition. Defining Style.
          </p>
        </div>
      </div>
    </footer>
  );
}