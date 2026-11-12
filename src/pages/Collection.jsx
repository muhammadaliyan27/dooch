
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Royal Balochi Men's Dress",
    category: "Men",
    price: "Rs. 8,500",
    tag: "BESTSELLER",
    image: "/images/images (1).png",
     
  },
  {
    id: 2,
    name: "Traditional Balochi Shalwar Kameez",
    category: "Men",
    price: "Rs. 5,500",
    tag: "CLASSIC",
     image: "/images/images (2).png",
      
  },
  {
    id: 3,
    name: "Balochi Men's Cultural Outfit",
    category: "Men",
    price: "Rs. 12,500",
    tag: "PREMIUM",
   image: "/images/images (3).png",
  },
  {
    id: 4,
    name: "Traditional Balochi Paag",
    category: "Accessories",
    price: "Rs. 2,500",
    tag: "TRADITIONAL",
    image:
      "https://pk-live-21.slatic.net/kf/S61124022ba0b4a59beaf1c0a15239822j.jpg",
  },
  {
    id: 5,
    name: "Classic Balochi Men's Wear",
    category: "Men",
    price: "Rs. 9,500",
    tag: "POPULAR",
    image:
      "https://i.pinimg.com/originals/c0/cc/62/c0cc6214396d5a79871f632f8277fa52.jpg",
  },
  {
    id: 6,
    name: "Traditional Women's Pashk",
    category: "Women",
    price: "Rs. 14,500",
    tag: "NEW ARRIVAL",
    image:
      "https://www.pakistantradeportal.gov.pk/storage/product_images/62c2b4ca297711656927434.jpg",
  },
  {
    id: 7,
    name: "Women's Embroidered Balochi Dress",
    category: "Women",
    price: "Rs. 9,500",
    tag: "HANDCRAFTED",
    image:
      "https://s.alicdn.com/@sc04/kf/A2e6180049e9f4a0b90706ec169fb1ef79/Hot-Selling-Custom-Design-Hand-Embroidered-Breathable-Balochi-Dress-Afghan-Women-Dresses-Traditional-Balochi-Dresses-for-Woman.png",
  },
  {
    id: 8,
    name: "Colorful Balochi Needlework",
    category: "Accessories",
    price: "Rs. 3,000",
    tag: "SIGNATURE",
    image:
      "https://www.craftestan.co.uk/oograsto/2023/05/The_Baluchi_Pashk_A_Masterpiece_of_Textile_Art_Craftestan_British_Museum-800x800.jpg",
  },
  {
    id: 9,
    name: "Balochi Traditional Shawl",
    category: "Accessories",
    price: "Rs. 3,500",
    tag: "ELEGANT",
    image:
      "https://i.dawn.com/primary/2021/11/6187039345213.jpg",
  },
  {
    id: 10,
    name: "Festive Balochi Dress",
    category: "Women",
    price: "Rs. 11,500",
    tag: "CULTURAL",
    image:
      "https://i.etsystatic.com/60843445/r/il/a24c22/7647001294/il_1140xN.7647001294_8gwj.jpg",
  },
  {
    id: 11,
    name: "Balochi Women's Heritage Dress",
    category: "Women",
    price: "Rs. 10,500",
    tag: "HERITAGE",
    image:
      "https://s.alicdn.com/@sc04/kf/A2e6180049e9f4a0b90706ec169fb1ef79/Hot-Selling-Custom-Design-Hand-Embroidered-Breathable-Balochi-Dress-Afghan-Women-Dresses-Traditional-Balochi-Dresses-for-Woman.png",
  },
  {
    id: 12,
    name: "Handcrafted Balochi Embroidery",
    category: "Accessories",
    price: "Rs. 2,000",
    tag: "HANDMADE",
    image:
      "https://www.pakistantradeportal.gov.pk/storage/product_images/62c2b4ca297711656927434.jpg",
  },
];

const filters = ["All", "Men", "Women", "Accessories"];

function ProductImage({ product }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-80 overflow-hidden bg-[#F0E9DE]">
      {!failed ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center p-5 text-center">
          <p className="font-bold text-gray-600">
            Image unavailable — please try another image link.
          </p>
        </div>
      )}

      <span className="absolute left-3 top-3 rounded-full bg-[#191714] px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">
        {product.tag}
      </span>

      <span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-orange-800">
        {product.category}
      </span>
    </div>
  );
}

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter === "All" || product.category === activeFilter;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#191714]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1B1713] px-5 py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#302218] to-[#743914] opacity-90" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold tracking-[0.4em] text-orange-400">
            DOOCH — BY BALACH
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            THE BALOCHI
            <span className="block text-orange-500">COLLECTION</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Discover traditional Balochi outfits, beautiful embroidery
            and cultural styles for men and women.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-full bg-orange-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            EXPLORE COLLECTION
          </a>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-orange-700">
              TRADITION MEETS STYLE
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Shop Our Collections
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
              Find your style in our men's clothing, women's dresses
              and traditional accessories.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            {visibleProducts.length} products
          </p>
        </div>

        {/* SEARCH */}
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a dress..."
          className="mt-8 w-full rounded-xl border border-orange-100 bg-white px-5 py-4 text-sm outline-none focus:border-orange-500 md:max-w-md"
        />

        {/* FILTERS */}
        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-6 py-3 text-sm font-bold transition ${
                activeFilter === filter
                  ? "border-orange-600 bg-orange-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-orange-500 hover:text-orange-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PRODUCT CARDS */}
        <div
          id="products"
          className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <ProductImage product={product} />

              <div className="p-5">
                <h3 className="text-lg font-extrabold leading-snug">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Traditional style · Cultural elegance
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-lg font-black text-orange-700">
                    {product.price}
                  </span>

                  <a
                    href={`mailto:yourstore@example.com?subject=${encodeURIComponent(
                      "Product enquiry: " + product.name
                    )}`}
                    className="rounded-lg border border-[#191714] px-3 py-2 text-xs font-bold transition hover:bg-[#191714] hover:text-white"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-bold">No products found</h3>
            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-5 rounded-full bg-orange-600 px-6 py-3 font-bold text-white"
            >
              Show All Products
            </button>
          </div>
        )}
      </section>

      {/* HERITAGE BANNER */}
      <section className="mx-5 mb-14 rounded-3xl bg-[#211B16] px-6 py-12 text-center text-white md:mx-8 md:px-12 md:py-16">
        <p className="text-xs font-bold tracking-[0.35em] text-orange-400">
          OUR CULTURE, OUR PRIDE
        </p>

        <h2 className="mt-4 text-3xl font-black sm:text-4xl">
          Wear Your Heritage
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300">
          Celebrate the beauty of Balochi clothing and traditional
          needlework with Dooch.
        </p>

        <a
          href="#products"
          className="mt-7 inline-block rounded-full bg-orange-600 px-7 py-3 text-sm font-bold transition hover:bg-orange-700"
        >
          Explore Collection
        </a>
      </section>

      <footer className="px-5 pb-8 text-center text-xs text-gray-500">
        © 2026 DOOCH — BY BALACH. All Rights Reserved.
      </footer>
    </main>
  );
}
