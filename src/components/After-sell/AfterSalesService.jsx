
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
            Attar United has experienced and highly trained after-sales
            experts certified by leading Swiss luxury watch brands.
            Our specialists provide comprehensive post-purchase care,
            ensuring your timepiece continues to perform beautifully
            for generations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-[#c6a45f]/30">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Watch Service"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content */}
          <div>

            <span className="text-[#c6a45f] uppercase tracking-[0.3em] text-sm">
              Maintenance Service
            </span>

            <h3 className="text-3xl md:text-4xl font-baskerville mt-4 mb-8">
              Luxury Watch Care
            </h3>

            <div className="space-y-5">

              {[
                "Checking the movement and watch functions",
                "Replacing the battery for quartz watches",
                "Cleaning and lubricating the escapement and balance wheel for mechanical watches",
                "Adjusting the daily rate of the movement",
                "Cleaning the case and metal bracelet",
                "Cleaning moving diamonds and decorative elements",
                "Checking water resistance for eligible watches",
                "Comprehensive final quality inspection",
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
              Factory-trained specialists certified by
              leading Swiss luxury brands.
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
              Original manufacturer components
              and approved servicing procedures.
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
              Every serviced timepiece undergoes
              comprehensive testing and inspection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

