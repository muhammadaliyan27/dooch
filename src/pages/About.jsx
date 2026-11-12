
import React from "react";

const About = () => {
  return (
    <main className="w-full min-h-screen bg-[#FFFCF7] overflow-hidden">

      {/* HERO SECTION */}

      <section className="w-full bg-[#171412] px-7 md:px-16 lg:px-24 py-24">

        <p className="text-[#F15A35] tracking-[5px] font-bold text-xs mb-8">
          DOOCH BY BALACH
        </p>

        <h1 className="text-white text-5xl md:text-8xl font-black leading-tight">
          ABOUT
          <span className="block text-[#F15A35]">OUR BRAND.</span>
        </h1>

        <div className="w-24 h-1.5 bg-[#F15A35] mt-8 mb-7"></div>

        <p className="text-gray-300 text-lg max-w-2xl leading-9">
          Discover our story, our culture and our passion
          for traditional Balochi men's fashion.
          We bring heritage and modern style together.
        </p>

      </section>


      {/* BRAND STORY */}

      <section className="px-6 md:px-16 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-[#F15A35] tracking-[4px] font-bold text-xs mb-5">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-[#171412] leading-tight">
              A TRADITION
              <span className="text-[#F15A35]"> TO REMEMBER.</span>
            </h2>

            <div className="w-20 h-1 bg-[#F15A35] my-7"></div>

            <p className="text-gray-600 leading-8 mb-5">
              DOOCH BY BALACH is a Balochi men's fashion
              brand inspired by the rich culture and
              traditional clothing of Balochistan.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Our collection focuses on traditional
              kurtas, shalwar kameez, caps, jewellery
              and cultural accessories.
            </p>

            <p className="text-gray-600 leading-8">
              Our goal is to celebrate Balochi identity
              through clothing while bringing traditional
              fashion closer to modern generations.
            </p>

          </div>

          <div className="relative">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Baloch_cultural_dress.jpg"
              alt="Balochi traditional culture"
              className="w-full h-[480px] object-cover"
            />

            <div className="absolute -bottom-5 -left-5 bg-[#F15A35] text-white p-7">
              <h3 className="text-3xl font-black">DOOCH</h3>
              <p className="text-xs tracking-widest mt-2">
                BY BALACH
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* NUMBERS SECTION */}

      <section className="bg-[#171412] px-6 md:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#F15A35] tracking-[4px] font-bold text-xs mb-5">
              DOOCH BY BALACH
            </p>

            <h2 className="text-white text-3xl md:text-5xl font-black">
              OUR BRAND AT A GLANCE
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl md:text-6xl font-black text-[#F15A35]">
                01
              </h3>
              <p className="text-gray-300 mt-4 text-sm">
                BALOCHI HERITAGE
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-6xl font-black text-[#F15A35]">
                04
              </h3>
              <p className="text-gray-300 mt-4 text-sm">
                FASHION CATEGORIES
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-6xl font-black text-[#F15A35]">
                100%
              </h3>
              <p className="text-gray-300 mt-4 text-sm">
                CULTURAL INSPIRATION
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-6xl font-black text-[#F15A35]">
                ∞
              </h3>
              <p className="text-gray-300 mt-4 text-sm">
                LOVE FOR TRADITION
              </p>
            </div>

          </div>

          <p className="text-gray-500 text-xs text-center mt-10">
            Brand presentation figures, not verified sales or customer statistics.
          </p>

        </div>

      </section>


      {/* OUR MISSION */}

      <section className="px-6 md:px-16 py-20">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#F15A35] tracking-[4px] font-bold text-xs mb-5">
            WHAT WE BELIEVE
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-[#171412]">
            OUR MISSION
          </h2>

          <div className="w-20 h-1 bg-[#F15A35] mx-auto mt-7 mb-9"></div>

          <p className="text-gray-600 text-lg leading-9 max-w-3xl mx-auto">
            Our mission is to preserve and promote the
            traditional beauty of Balochi men's clothing.
            We want every design to represent culture,
            confidence, identity and pride.
          </p>

        </div>

      </section>


      {/* VALUES */}

      <section className="px-6 md:px-16 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-[#F15A35] tracking-[4px] font-bold text-xs mb-5">
              WHY DOOCH
            </p>

            <h2 className="text-4xl font-black text-[#171412]">
              OUR VALUES
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {[
              {
                icon: "✦",
                title: "TRADITION",
                description:
                  "Keeping Balochi culture and traditional fashion alive.",
              },
              {
                icon: "✧",
                title: "QUALITY",
                description:
                  "Giving importance to thoughtful designs and details.",
              },
              {
                icon: "◆",
                title: "IDENTITY",
                description:
                  "Celebrating our cultural roots with confidence and pride.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white border border-orange-100 p-9
                hover:bg-[#171412] group transition duration-500"
              >

                <span className="text-5xl text-[#F15A35]">
                  {item.icon}
                </span>

                <h3 className="text-2xl font-black text-[#171412]
                group-hover:text-white mt-7 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 group-hover:text-gray-300 leading-8">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}

      <section className="bg-[#171412] text-center px-6 py-20">

        <p className="text-[#F15A35] tracking-[5px] text-xs font-bold mb-6">
          BECOME PART OF OUR STORY
        </p>

        <h2 className="text-white text-4xl md:text-6xl font-black">
          WEAR YOUR
          <span className="text-[#F15A35]"> HERITAGE.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-7 leading-8">
          Explore our traditional collection and
          celebrate the culture of Balochistan with DOOCH.
        </p>

        <a
          href="/collection"
          className="inline-block mt-9 bg-[#F15A35] text-white
          px-10 py-4 font-bold hover:bg-white hover:text-black
          transition duration-300"
        >
          EXPLORE COLLECTION →
        </a>

      </section>

    </main>
  );
};

export default About;
