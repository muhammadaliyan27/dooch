
import React from "react";

const kurtas = [
  {
    name: "White Royal Balochi Dress",
    tag: "BEST SELLER",
    price: "Rs. 4,500",
    image: "https://meerdeal.com/cdn/shop/products/5Y8A3287.jpg?v=1667163235"
  },
  {
    name: "Blue Balochi Waistcoat Kurta",
    tag: "POPULAR",
    price: "Rs. 4,800",
    image: "https://i.etsystatic.com/34305686/r/il/7a41a2/8043599283/il_fullxfull.8043599283_6fyj.jpg"
  },
  {
    name: "Black Turban Traditional Dress",
    tag: "TRADITIONAL",
    price: "Rs. 5,200",
    image: "https://static-01.daraz.pk/p/bf15779cb4541dc27827f81981f30df9.jpg"
  },
  {
    name: "Classic White Balochi Attire",
    tag: "EXCLUSIVE",
    price: "Rs. 4,600",
    image: "https://i.pinimg.com/736x/50/00/dc/5000dc3bad2a4501c1a488d94052e2dd.jpg"
  },
  {
    name: "Colorful Embroidered Kurta",
    tag: "NEW ARRIVAL",
    price: "Rs. 5,500",
    image: "https://meerdeal.com/cdn/shop/products/5Y8A3302-Copy.jpg?v=1667163370"
  },
  {
    name: "Brown Balochi Traditional Suit",
    tag: "HERITAGE",
    price: "Rs. 5,000",
    image: "https://i.pinimg.com/736x/f4/74/c5/f474c56179b4111ab3e3eb5dd29acceb.jpg"
  }
];

const Kurtas = () => {
  return (
    <main className="bg-[#FFFCF7] min-h-screen">

      {/* HERO SECTION */}

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

        <div className="bg-[#171412] text-white px-8 md:px-16 py-20 flex flex-col justify-center">

          <p className="text-[#F45132] tracking-[7px] font-bold mb-12">
            DOOCH BY BALACH
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            BALOCHI
            <span className="block text-[#F45132] mt-5">
              KURTAS
            </span>
          </h1>

          <div className="w-28 h-2 bg-[#F45132] mt-12 mb-9"></div>

          <p className="text-gray-300 text-lg leading-9 max-w-lg">
            Discover traditional Balochi men's clothing.
            Explore classic shalwar kameez, traditional
            turbans and beautifully embroidered waistcoats.
          </p>

          <p className="text-[#F45132] tracking-[4px] font-bold mt-10 text-sm">
            CULTURE • TRADITION • STYLE
          </p>

        </div>

        {/* HERO PICTURE */}

        <div className="bg-[#EEE5D9] min-h-[500px] p-6 flex items-center justify-center">

          <img
            src="https://meerdeal.com/cdn/shop/products/5Y8A3287.jpg?v=1667163235"
            alt="Traditional Balochi men's dress"
            className="w-full h-[550px] object-contain"
          />

        </div>

      </section>


      {/* COLLECTION HEADING */}

      <section className="px-6 md:px-12 pt-20 pb-12">

        <div className="border-t border-[#F45132] pt-12 flex flex-col md:flex-row justify-between gap-5 items-end">

          <div>
            <p className="text-[#F45132] tracking-[5px] text-sm font-bold mb-4">
              DOOCH EXCLUSIVE COLLECTION
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#171412]">
              Balochi Collection
            </h2>
          </div>

          <p className="text-gray-600 max-w-md leading-7">
            Traditional men's outfits inspired by the
            culture and heritage of Balochistan.
          </p>

        </div>

      </section>


      {/* SIX CARDS */}

      <section className="px-6 md:px-12 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {kurtas.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-[#EADDCF] overflow-hidden group hover:shadow-xl transition duration-500"
            >

              {/* IMAGE */}

              <div className="relative h-[430px] bg-[#EEE5D9] overflow-hidden">

                <span className="absolute top-5 left-5 z-10 bg-[#F45132] text-white text-xs font-bold px-5 py-3">
                  {item.tag}
                </span>

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                />

                <span className="absolute bottom-5 right-5 bg-[#171412] text-white w-12 h-12 flex items-center justify-center font-bold">
                  0{index + 1}
                </span>

              </div>

              {/* DETAILS */}

              <div className="p-7">

                <p className="text-[#F45132] text-xs font-bold tracking-[3px]">
                  DOOCH BY BALACH
                </p>

                <h3 className="text-xl font-bold text-[#171412] mt-3">
                  {item.name}
                </h3>

                <div className="border-t border-[#EADDCF] mt-6 pt-5 flex items-center justify-between">

                  <span className="text-[#F45132] text-xl font-black">
                    {item.price}
                  </span>

                  <button className="bg-[#171412] text-white px-5 py-3 text-sm hover:bg-[#F45132] transition">
                    View Details
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* BOTTOM BANNER */}

      <section className="bg-[#171412] text-center py-20 px-5">

        <p className="text-[#F45132] font-bold tracking-[6px] text-sm">
          DOOCH BY BALACH
        </p>

        <h2 className="text-white text-3xl md:text-5xl font-black mt-6">
          WEAR YOUR HERITAGE
        </h2>

        <div className="w-24 h-1 bg-[#F45132] mx-auto mt-8"></div>

        <p className="text-gray-400 mt-7">
          Celebrating the timeless beauty of Balochi culture.
        </p>

      </section>

    </main>
  );
};

export default Kurtas;
