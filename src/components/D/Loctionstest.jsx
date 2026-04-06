import { useState } from "react";

export default function BoutiquesExperience() {
  const data = {
    Jeddah: [
      {
        name: "Chopard Boutique",
        address: "Al Basateen Mall, Prince Mohammad Bin Abdulaziz St., Jeddah",
        phone: "(012) 6126299",
        map: "https://www.google.com/maps/search/?api=1&query=Chopard+Boutique+Jeddah",
        story:
          "Located in the heart of Tahlia, this boutique reflects timeless elegance and refined craftsmanship.",
      },
      {
        name: "Hublot Boutique",
        address: "El Khayyat Center, 21553 El Khayyat Center, Tahlia Street, Al Andalus, Jeddah 21553",
        phone: "+966 12 000 0000",
        map: "https://maps.app.goo.gl/b8dqJvYXGRpoXELS9",
        story:
          "A bold contemporary space representing innovation in luxury watchmaking.",
      },
    ],
    Riyadh: [
      { city: "Riyadh",
      name: "Graff Boutique",
      address: "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh",
      phone: "+966 11 000 0000",
      map: "https://www.google.com/maps/dir/Graff+Riyadh,+The+Kingdom+Centre%D8%8C+%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+The%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%E2%80%AD/Graff+Riyadh,+The+Kingdom+Centre%D8%8C+%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+The%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%E2%80%AD/@24.7058917,46.6965667,14z/data=!4m14!4m13!1m5!1m1!1s0x3e2f02d3ed0bdc37:0x60df455fecd63a34!2m2!1d46.6750445!2d24.7112724!1m5!1m1!1s0x3e2f02d3ed0bdc37:0x60df455fecd63a34!2m2!1d46.6750445!2d24.7112724!3e4?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" },
                
    { city: "Riyadh",
      name: "Graff Boutique",
      address: "King Fahd Road, Saudi Arabia",
      phone: "+966 11 000 0000",
      map: "https://www.google.com/maps/search/?api=1&query=Graff Boutique Riyadh" },
                      
    { city: "Riyadh",
      name: "saint louis Boutique",
      address: "King Fahd Road, Saudi Arabia",
      phone: "+966 11 000 0000",
      map: "https://www.google.com/maps/search/?api=1&query=saint louis Boutique Riyadh" },
      
    { city: "Riyadh",
      name: "Chopard Boutique",
      address: "King Fahd Road, Saudi Arabia",
      phone: "+966 11 000 0000",
      map: "https://www.google.com/maps/search/?api=1&query=Chopard Boutique Riyadh" },

    { city: "Riyadh",
      name: "Chopard Boutique",
      address: "King Fahd Road, Saudi Arabia",
      phone: "+966 11 000 0000",
      map: "https://www.google.com/maps/search/?api=1&query=Chopard Boutique Riyadh" },
      
      { city: "Riyadh",
        name: "Chopard Boutique",
        address: "King Fahd Road, Saudi Arabia",
        phone: "+966 11 000 0000",
        map: "https://www.google.com/maps/search/?api=1&query=Chopard Boutique Riyadh" },
        
        { city: "Riyadh",
          name: "Hublot Boutique",
          address: "King Fahd Road, Saudi Arabia",
          phone: "+966 11 000 0000",
          map: "https://www.google.com/maps/search/?api=1&query=Hublot Boutique Riyadh" },

        { city: "Riyadh",
          name: "Hublot Boutique",
          address: "King Fahd Road, Saudi Arabia",
          phone: "+966 11 000 0000",
          map: "https://www.google.com/maps/search/?api=1&query=Hublot Boutique Riyadh" },
          
        { city: "Riyadh",
          name: "Hublot Boutique",
          address: "King Fahd Road, Saudi Arabia",
          phone: "+966 11 000 0000",
          map: "https://www.google.com/maps/search/?api=1&query=Hublot Boutique Riyadh" },
                
        { city: "Riyadh",
          name: "Azza Fahmy Boutique",
          address: "King Fahd Road, Saudi Arabia",
          phone: "+966 11 000 0000",
          map: "https://www.google.com/maps/search/?api=1&query=Azza Fahmy Boutique Riyadh" },

    ],
    Khobar: [
      {
        name: "Chopard Boutique",
        address: "King Fahd Road, Saudi Arabia",
        phone: "+966 13 000 0000",
        map: "https://www.google.com/maps/search/?api=1&query=Chopard+Boutique+Khobar",
        story:
          "A coastal luxury experience blending sophistication with modern elegance.",
      },
      {
        name: "Hublot Boutique",
        address: "King Fahd Road, Saudi Arabia",
        phone: "+966 13 000 0000",
        map: "https://www.google.com/maps/search/?api=1&query=Hublot+Boutique+Khobar",
        story: "A modern boutique showcasing Hublot's innovative designs.",
      },
    ],
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBoutique, setSelectedBoutique] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-6 min-h-screen">

      <h2 className="text-3xl tracking-[0.6em] text-center mb-16 uppercase">
        Boutique Experience
      </h2>

      {/* ---------------- CITY SELECTION ---------------- */}
      {!selectedCity && (
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {Object.keys(data).map((city) => (
            <CityBox
              key={city}
              city={city}
              onClick={() => setSelectedCity(city)}
            />
          ))}
        </div>
      )}

      {/* ---------------- BOUTIQUE SELECTION ---------------- */}
      {selectedCity && !selectedBoutique && (
        <div className="max-w-5xl mx-auto">

          <BackButton onClick={() => setSelectedCity(null)} />

          <h3 className="text-xl tracking-[0.5em] text-[#c6a45f] text-center mb-12 uppercase">
            {selectedCity}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {data[selectedCity].map((boutique, index) => (
              <BoutiqueBox
                key={index}
                boutique={boutique}
                onClick={() => setSelectedBoutique(boutique)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ---------------- BOUTIQUE DETAILS ---------------- */}
      {selectedBoutique && (
        <div className="max-w-3xl mx-auto text-center">

          <BackButton onClick={() => setSelectedBoutique(null)} />

          <div className="border border-[#c6a45f]/40 bg-[#0f0f0f] rounded-2xl p-10 shadow-[0_0_40px_rgba(198,164,95,0.15)]">

            <h3 className="text-2xl font-[cormorant] mb-4">
              {selectedBoutique.name}
            </h3>

            <p className="text-gray-400 text-sm mb-2">
              {selectedBoutique.address}
            </p>

            <p className="text-gray-400 text-sm mb-6">
              {selectedBoutique.phone}
            </p>

            <p className="text-gray-300 leading-relaxed mb-10">
              {selectedBoutique.story}
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-6 flex-wrap">

              {/* Open Map */}
              <a
                href={selectedBoutique.map}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#c6a45f] text-[#c6a45f] tracking-[0.3em] text-xs hover:bg-[#c6a45f] hover:text-black transition"
              >
                OPEN MAP
              </a>

              {/* Navigation (Google Maps Directions) */}
              <a
                href={`${selectedBoutique.map}&travelmode=driving`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c6a45f] text-black tracking-[0.3em] text-xs hover:opacity-80 transition"
              >
                NAVIGATE NOW
              </a>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

/* ================= COMPONENTS ================= */

function CityBox({ city, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border border-[#c6a45f]/30 rounded-2xl p-10 text-center bg-[#0f0f0f] hover:border-[#c6a45f] hover:shadow-[0_0_30px_rgba(198,164,95,0.4)] transition duration-500"
    >
      <h3 className="tracking-[0.4em] text-lg uppercase">
        {city}
      </h3>
    </div>
  );
}

function BoutiqueBox({ boutique, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border border-[#c6a45f]/30 rounded-xl p-8 bg-[#111] hover:border-[#c6a45f] hover:shadow-[0_0_25px_rgba(198,164,95,0.3)] transition duration-500"
    >
      <h4 className="text-base font-[cormorant] mb-2">
        {boutique.name}
      </h4>

      <p className="text-gray-500 text-xs">
        {boutique.address}
      </p>
    </div>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-10 text-xs tracking-[0.3em] text-[#c6a45f] hover:text-white transition"
    >
      ← BACK
    </button>
  );
}
