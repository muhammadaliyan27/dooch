
import React from "react";
import { Link } from "react-router-dom";

const dresses = [
  {
    name: "Royal White Balochi Suit",
    subtitle: "White Shalwar Kameez & Paag",
    price: "8,500",
    tag: "SIGNATURE",
       image: "/images/images (4).png",
  },
  {
    name: "Traditional Balochi Shalwar",
    subtitle: "Classic Wide-Leg Design",
    price: "5,500",
    tag: "TRADITIONAL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Balochi_Shalwar_Kameez.jpg",
  },
  {
    name: "Balochi Heritage Outfit",
    subtitle: "Traditional Turban & Cultural Wear",
    price: "12,500",
    tag: "PREMIUM",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/%D8%B1%D9%88%D8%B2_%D9%81%D8%B1%D9%87%D9%86%DA%AF_%D8%A8%D9%84%D9%88%DA%86_%D8%AF%D8%B1_%D8%A7%DB%8C%D8%A7%D9%84%D8%AA_%D8%A8%D9%84%D9%88%DA%86%D8%B3%D8%AA%D8%A7%D9%86_%D8%B4%D9%87%D8%B1_%DA%A9%D9%88%DB%8C%D8%AA%D9%87.jpg/500px-%D8%B1%D9%88%D8%B2_%D9%81%D8%B1%D9%87%D9%86%DA%AF_%D8%A8%D9%84%D9%88%DA%86_%D8%AF%D8%B1_%D8%A7%DB%8C%D8%A7%D9%84%D8%AA_%D8%A8%D9%84%D9%88%DA%86%D8%B3%D8%AA%D8%A7%D9%86_%D8%B4%D9%87%D8%B1_%DA%A9%D9%88%DB%8C%D8%AA%D9%87.jpg",
  },
  {
    name: "Classic Balochi Waistcoat",
    subtitle: "Elegant Traditional Layer",
    price: "4,500",
    tag: "BESTSELLER",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/%D9%84%D8%A8%D8%A7%D8%B3_%D9%85%D8%AD%D9%84%DB%8C_%D8%A8%D9%84%D9%88%DA%86%DB%8C_%D8%A8%D8%B1%D8%AA%D9%86_%D9%85%D8%B1%D8%AF_%D8%A8%D9%84%D9%88%DA%86.JPG/960px-%D9%84%D8%A8%D8%A7%D8%B3_%D9%85%D8%AD%D9%84%DB%8C_%D8%A8%D9%84%D9%88%DA%86%DB%8C_%D8%A8%D8%B1%D8%AA%D9%86_%D9%85%D8%B1%D8%AF_%D8%A8%D9%84%D9%88%DA%86.JPG",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF6EF] text-[#201B17]">

      {/* HERO — MAIN IMAGE 1 */}
      <section className="grid min-h-[570px] bg-[#171513] text-white md:grid-cols-2">
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#E95B32]">
              The Art of Balochi Heritage
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.1] sm:text-6xl">
              DOOCH MENS
              <span className="mt-3 block text-[#E95B32]">
                BALOCHI
              </span>
              <span className="block">COLLECTION</span>
            </h1>

            <div className="mt-6 h-1 w-20 bg-[#E95B32]" />

            <p className="mt-6 max-w-md text-sm leading-8 text-gray-300 sm:text-base">
              Discover traditional Balochi shalwar kameez, distinctive
              paag turbans, embroidered waistcoats and cultural outfits.
              Heritage-inspired fashion for men who wear their identity
              with pride.
            </p>

            <Link
              to="/collection"
              className="mt-8 inline-block bg-[#E95B32] px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black"
            >
              EXPLORE COLLECTION →
            </Link>

            <p className="mt-8 text-xs tracking-widest text-gray-400">
              CULTURE · CRAFTSMANSHIP · CHARACTER
            </p>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <img
            src="/images/images (4).png"
            alt="Balochi man wearing a traditional white outfit and paag"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-6 right-6 border-l-4 border-[#E95B32] bg-black/50 p-5 backdrop-blur-sm sm:left-10 sm:right-10">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
              Dooch — By Balach
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Tradition Never Goes Out of Style.
            </h2>
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 md:grid-cols-4">
          {[
            ["✦", "Cultural Identity", "Inspired by Balochi heritage"],
            ["◇", "Traditional Wear", "Classic silhouettes"],
            ["♧", "Premium Style", "Made for special occasions"],
            ["♡", "Customer Care", "Here to help"],
          ].map(([icon, title, description]) => (
            <div key={title} className="flex items-center gap-3">
              <span className="text-3xl text-[#E95B32]">{icon}</span>
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUR PRODUCT CARDS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#E95B32]">
              The Heritage Edit
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Traditional Balochi Wear
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
              Explore timeless cultural styles, from traditional
              shalwar kameez to statement-making Balochi outfits.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 bg-[#E95B32]" />
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {dresses.map((dress) => (
              <article
                key={dress.name}
                className="group overflow-hidden border border-[#E9DFD1] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[350px] overflow-hidden bg-[#E9E0D5]">
                  <img
                    src={dress.image}
                    alt={dress.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 bg-[#201B17] px-3 py-2 text-[10px] font-bold tracking-widest text-white">
                    {dress.tag}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-12">
                    <p className="text-xs font-medium text-white">
                      DOOCH · BALOCHI HERITAGE
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E95B32]">
                    Traditional Menswear
                  </p>

                  <h3 className="mt-2 text-lg font-extrabold">
                    {dress.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {dress.subtitle}
                  </p>

                  <div className="my-4 border-t border-[#EDE4D9]" />

                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400">
                        Price
                      </p>
                      <p className="mt-1 text-xl font-black text-[#D94825]">
                        Rs. {dress.price}
                      </p>
                    </div>

                    <Link
                      to="/collection"
                      className="bg-[#201B17] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#E95B32]"
                    >
                      VIEW ITEM →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/collection"
              className="inline-block border border-[#201B17] px-8 py-4 text-sm font-bold transition hover:bg-[#201B17] hover:text-white"
            >
              VIEW FULL COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* HERITAGE — MAIN IMAGE 2 */}
      <section className="bg-[#171513] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 lg:px-12">
          <div className="relative overflow-hidden">
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/%D8%B1%D9%88%D8%B2_%D9%81%D8%B1%D9%87%D9%86%DA%AF_%D8%A8%D9%84%D9%88%DA%86_%D8%AF%D8%B1_%D8%A7%DB%8C%D8%A7%D9%84%D8%AA_%D8%A8%D9%84%D9%88%DA%86%D8%B3%D8%AA%D8%A7%D9%86_%D8%B4%D9%87%D8%B1_%DA%A9%D9%88%DB%8C%D8%AA%D9%87.jpg/500px-%D8%B1%D9%88%D8%B2_%D9%81%D8%B1%D9%87%D9%86%DA%AF_%D8%A8%D9%84%D9%88%DA%86_%D8%AF%D8%B1_%D8%A7%DB%8C%D8%A7%D9%84%D8%AA_%D8%A8%D9%84%D9%88%DA%86%D8%B3%D8%AA%D8%A7%D9%86_%D8%B4%D9%87%D8%B1_%DA%A9%D9%88%DB%8C%D8%AA%D9%87.jpg"
              alt="Men celebrating traditional Balochi clothing"
              loading="lazy"
              className="h-[350px] w-full object-cover sm:h-[440px]"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#E95B32]">
              More Than Fashion
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              Proud Roots.
              <span className="mt-2 block text-[#E95B32]">
                Timeless Tradition.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-300">
              Balochi clothing is recognised for its distinctive
              silhouettes, generous shalwar, traditional paag and
              colourful embroidery. Dooch celebrates these cultural
              details through a collection inspired by traditional
              menswear.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block border border-[#E95B32] px-7 py-4 text-sm font-bold transition hover:bg-[#E95B32]"
            >
              OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl bg-[#EFE2D0] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D94825]">
            Dooch — By Balach
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Wear Your Culture With Pride.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
            Discover traditional-inspired outfits for weddings,
            cultural celebrations and everyday wear.
          </p>

          <Link
            to="/collection"
            className="mt-8 inline-block bg-[#D94825] px-8 py-4 text-sm font-bold text-white transition hover:bg-black"
          >
            SHOP THE COLLECTION →
          </Link>
        </div>
      </section>

      {/* PHOTO CREDITS */}
      <div className="bg-white px-5 py-4 text-center text-xs text-gray-500">
        Reference photographs:
        {" "}
        <a
          href="https://commons.wikimedia.org/wiki/Category:Baloch_clothing"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-[#D94825]"
        >
          Wikimedia Commons — Baloch clothing
        </a>
      </div>

    </main>
  );
}

export default Home;
