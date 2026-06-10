import React from "react";

export default function AfterSalesService() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-24 h-px bg-[#c6a45f] mx-auto mb-8" />

          <h2 className="font-baskerville text-4xl md:text-6xl tracking-[0.2em] uppercase text-[#c6a45f]">
            After Sales Service
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Attar United's certified after-sales specialists provide exceptional
            care for luxury watches and fine jewellery. Using approved
            procedures, genuine components, and meticulous craftsmanship, our
            experts ensure every piece maintains its beauty, performance, and
            value for years to come.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-[#c6a45f]/30">
            <img
              src="https://i.ytimg.com/vi/ecm-CVnhAW4/maxresdefault.jpg"
              alt="Luxury Watch Service"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-[#c6a45f] uppercase tracking-[0.3em] text-sm">
              Maintenance Services
            </span>

            <h3 className="text-3xl md:text-4xl font-baskerville mt-4 mb-10">
              Expert Care & Restoration
            </h3>

            <div className="space-y-10">

              {/* Watches */}
              <div>
                <h4 className="text-[#c6a45f] text-xl uppercase tracking-[0.2em] mb-5">
                  Watches
                </h4>

                <div className="space-y-4">
                  {[
                    "Checking the movement and watch functions",
                    "Replacing the battery (Quartz) or cleaning and lubricating the escapement and balance wheel (Mechanical)",
                    "Adjusting the daily rate of the movement",
                    "Cleaning the case and metal bracelet",
                    "Cleaning moving diamonds",
                    "Checking water resistance (for water-resistant watches only)",
                    "Final quality inspection",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-white/10 pb-4"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#c6a45f]" />

                      <p className="text-gray-300 leading-relaxed">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jewellery */}
              <div>
                <h4 className="text-[#c6a45f] text-xl uppercase tracking-[0.2em] mb-5">
                  Jewellery
                </h4>

                <div className="space-y-4">
                  {[
                    "Re-sizing",
                    "Professional polishing (including rhodium plating for 18k white gold pieces)",
                    "Cleaning, including moving diamonds and crystals",
                    "Personalized engraving (letters and numbers)",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-white/10 pb-4"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#c6a45f]" />

                      <p className="text-gray-300 leading-relaxed">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="border border-[#c6a45f]/20 bg-[#111] rounded-2xl p-8 text-center">
            <div className="text-[#c6a45f] text-4xl mb-4">
              ✓
            </div>

            <h4 className="uppercase tracking-[0.2em] mb-3">
              Certified Experts
            </h4>

            <p className="text-gray-400 text-sm">
              Factory-trained specialists certified by leading Swiss luxury
              brands and jewellery maisons.
            </p>
          </div>

          <div className="border border-[#c6a45f]/20 bg-[#111] rounded-2xl p-8 text-center">
            <div className="text-[#c6a45f] text-4xl mb-4">
              ⚙
            </div>

            <h4 className="uppercase tracking-[0.2em] mb-3">
              Genuine Parts
            </h4>

            <p className="text-gray-400 text-sm">
              Original manufacturer components and approved servicing
              procedures for exceptional reliability.
            </p>
          </div>

          <div className="border border-[#c6a45f]/20 bg-[#111] rounded-2xl p-8 text-center">
            <div className="text-[#c6a45f] text-4xl mb-4">
              ★
            </div>

            <h4 className="uppercase tracking-[0.2em] mb-3">
              Quality Assurance
            </h4>

            <p className="text-gray-400 text-sm">
              Every watch and jewellery piece undergoes comprehensive
              inspection before being returned to its owner.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}