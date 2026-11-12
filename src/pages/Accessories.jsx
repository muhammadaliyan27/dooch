
import React from "react";

const accessories = [
  {
    id: 1,
    name: "Traditional Balochi Cap",
    category: "BALOCHI TOPI",
    tag: "POPULAR",
    image:
      "https://houseofpakistan.com/_next/image?q=75&url=https%3A%2F%2Fhouseofpakistanbackendcode.s3.us-east-1.amazonaws.com%2F1775447487366_handmade_blaochi_cap.avif&w=640",
  },
  {
    id: 2,
    name: "Balochi Silver Ring",
    category: "TRADITIONAL JEWELLERY",
    tag: "HANDCRAFTED",
    image:
      "https://i.etsystatic.com/16220090/r/il/d69dff/8048164141/il_1080xN.8048164141_pk76.jpg",
  },
  {
    id: 3,
    name: "Balochi Embroidered Turban",
    category: "TRADITIONAL PAG",
    tag: "HERITAGE",
    image:
      "https://i.etsystatic.com/52482274/r/il/e1ce6a/6374889274/il_fullxfull.6374889274_eryh.jpg",
  },
  {
    id: 4,
    name: "Traditional Silver Jewellery",
    category: "CULTURAL JEWELLERY",
    tag: "EXCLUSIVE",
    image:
      "https://i.etsystatic.com/5850155/r/il/d32535/640063939/il_fullxfull.640063939_nngy.jpg",
  },
  {
    id: 5,
    name: "Balochi Traditional Shoes",
    category: "CULTURAL FOOTWEAR",
    tag: "CLASSIC",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Balochi%20Shoes.JPG",
  },
  {
    id: 6,
    name: "Balochi Traditional Turban Style",
    category: "HERITAGE COLLECTION",
    tag: "TRADITIONAL",
    image:
      "https://cdn.shopify.com/s/files/1/0669/3925/7150/products/5Y8A3298-Copy.jpg?v=1667163302",
  },
];

const Accessories = () => {
  return (
    <main className="w-full min-h-screen bg-[#FFFCF7] overflow-hidden">

      {/* HERO SECTION */}

      <section className="w-full bg-[#171412] grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col justify-center px-7 md:px-10 lg:px-16 xl:px-20 py-20 min-w-0">

          <p className="text-[#F15A35] tracking-[5px] font-bold text-xs mb-8">
            DOOCH BY BALACH
          </p>

          {/* FIXED HEADING */}

          <h1 className="text-white text-5xl md:text-6xl lg:text-[clamp(42px,4vw,64px)] xl:text-[68px] font-black leading-[1.15] tracking-tight break-words">
            BALOCHI
            <span className="block text-[#F15A35]">
              ACCESSORIES
            </span>
          </h1>

          <div className="w-24 h-1.5 bg-[#F15A35] mt-8 mb-7"></div>

          <p className="text-gray-300 text-base md:text-lg leading-9 max-w-xl">
            Complete your traditional look with
            beautiful Balochi caps, silver rings,
            embroidered turbans, traditional jewellery
            and cultural accessories.
          </p>

          <a
            href="#accessories"
            className="mt-9 bg-[#F15A35] text-white font-bold
            px-9 py-4 w-fit hover:bg-white hover:text-black
            transition duration-300"
          >
            EXPLORE ACCESSORIES →
          </a>

        </div>

        {/* HERO IMAGE */}

        <div className="relative h-[420px] md:h-[650px] overflow-hidden">

          <img
            src="https://houseofpakistan.com/_next/image?q=75&url=https%3A%2F%2Fhouseofpakistanbackendcode.s3.us-east-1.amazonaws.com%2F1775447487366_handmade_blaochi_cap.avif&w=640"
            alt="Traditional Balochi embroidered cap"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="absolute bottom-8 left-8 bg-[#171412]/90 px-7 py-5">

            <p className="text-[#F15A35] text-xs tracking-[3px] font-bold">
              CULTURE & CRAFT
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              Details That Matter
            </h3>

          </div>

        </div>

      </section>


      {/* INTRO SECTION */}

      <section className="bg-[#FFFCF7] px-6 md:px-16 pt-20 pb-12">

        <div className="max-w-7xl mx-auto">

          <p className="text-[#F15A35] font-bold tracking-[4px] text-xs mb-5">
            THE ART OF BALOCHI CRAFT
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">

            <h2 className="text-4xl md:text-5xl font-black text-[#171412]">
              OUR ACCESSORIES
            </h2>

            <p className="text-gray-600 max-w-md leading-8">
              Traditional details, handcrafted designs
              and cultural pieces that represent the
              heritage of Balochistan.
            </p>

          </div>

          <div className="w-full h-px bg-orange-200 mt-9"></div>

        </div>

      </section>


      {/* ACCESSORIES COLLECTION */}

      <section
        id="accessories"
        className="bg-[#FFFCF7] px-6 md:px-16 pb-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-9">

            <h2 className="text-2xl font-black text-[#171412]">
              TRADITIONAL COLLECTION
            </h2>

            <span className="text-[#F15A35] text-sm font-bold">
              06 ITEMS
            </span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {accessories.map((item) => (

              <article
                key={item.id}
                className="group bg-white border border-orange-100
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-500"
              >

                {/* IMAGE */}

                <div className="relative h-[390px] overflow-hidden bg-[#EDE5DA]">

                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://houseofpakistan.com/_next/image?q=75&url=https%3A%2F%2Fhouseofpakistanbackendcode.s3.us-east-1.amazonaws.com%2F1775447487366_handmade_blaochi_cap.avif&w=640";
                    }}
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition duration-700"
                  />

                  <span className="absolute top-4 left-4 bg-[#F15A35]
                  text-white text-[10px] font-bold tracking-wider px-4 py-2">
                    {item.tag}
                  </span>

                  <span className="absolute bottom-4 right-4 bg-[#171412]
                  text-white w-10 h-10 flex items-center justify-center
                  font-bold">
                    0{item.id}
                  </span>

                </div>

                {/* DETAILS */}

                <div className="p-6">

                  <p className="text-[#F15A35] text-[11px]
                  font-bold tracking-[2px] mb-3">
                    {item.category}
                  </p>

                  <h3 className="text-xl font-black text-[#171412] min-h-[55px]">
                    {item.name}
                  </h3>

                  <div className="border-t border-orange-100 mt-5 pt-4">

                    <a
                      href={item.image}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center
                      text-sm font-bold hover:text-[#F15A35] transition"
                    >
                      VIEW DESIGN

                      <span className="text-[#F15A35] text-2xl">
                        →
                      </span>

                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM BANNER */}

      <section className="w-full bg-[#171412] text-center py-20 px-6">

        <p className="text-[#F15A35] tracking-[5px] text-xs font-bold mb-6">
          DOOCH BY BALACH
        </p>

        <h2 className="text-4xl md:text-6xl text-white font-black">
          STYLE IS IN THE
          <span className="text-[#F15A35]"> DETAILS.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-7 leading-8">
          Celebrate your identity with traditional
          Balochi accessories and timeless craftsmanship.
        </p>

      </section>

    </main>
  );
};

export default Accessories;
