import { useState } from "react";

export default function BoutiquesExperience() {
  const data = {
    Jeddah: [
      {
        name: "Chopard Boutique",
        address: "Al Basateen Mall, Prince Mohammad Bin Abdulaziz St., Jeddah,Working timeSaturday to Thursday – 10:00 AM to 11:00 PM; Friday – 05:00 PM to 11:00 PM",
        phone: "(012) 6126299",
        map: "https://maps.app.goo.gl/ctiU9a2dCDUqHUgK9",
        story:
          "Located in the heart of Tahlia, this boutique reflects timeless elegance and refined craftsmanship.",
      },
      {
        name: "Hublot Boutique",
        address: "El Khayyat Center, 21553 El Khayyat Center, Tahlia Street, Al Andalus, Jeddah 21553,Working timeSaturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM  ",

        phone: "(012) 6774125",

        map: "https://maps.app.goo.gl/b8dqJvYXGRpoXELS9",
        story:
          "A bold contemporary space representing innovation in luxury watchmaking. This boutique reflects timeless elegance and refined craftsmanship.",
      },
      {
        name: "Azza Fahmy",
        address: "Alkhayat Center – Pop Up,King Abdul Aziz Rd, Al Zahra, Stars Avenue Sari Road, Jeddah, Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 05:00 PM to 11:00 PM ",
        phone: "?",
        map: "https://maps.app.goo.gl/objhYYKF1Djf7NLZ8",
        story:
          " A boutique celebrating Egyptian craftsmanship and contemporary design.",
      },
    ],
    Riyadh: [
      { city: "Riyadh",
      name: "Graff Boutique",
      address: "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh, Working time  Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM ",

      phone: "(011) 2111492",
      map: "https://maps.app.goo.gl/c4Q9Wg4sjXzoh3wY9",
     story:
          " This boutique reflects timeless elegance and refined craftsmanship.", },
                
    { city: "Riyadh",
      name: "Graff Boutique",
      address: "Olaya Towers,Olaya Street, Riyadh,  Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM ",
      phone: "+(011) 2699593 ",
      map: "https://maps.app.goo.gl/XEiZ7kztAv342Yu58",
    story:
          " This boutique reflects timeless elegance and refined craftsmanship.", },
                      
    { city: "Riyadh",
      name: "saint louis Boutique",
      address: "Olaya Towers,Olaya Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM  ",
      phone: "(012) 603 9760",

      map: "https://maps.app.goo.gl/qKSoEhspFA2jUJGb7",
      story:
          " This boutique reflects timeless elegance and refined craftsmanship.",
     },
      
    { city: "Riyadh",
      name: "Chopard Boutique",
      address: "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh,Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM ",
      phone: "(011) 2110017",
      map: "https://maps.app.goo.gl/Kt9PUZYXdgFQpUji8"
    ,story:
          " This boutique reflects timeless elegance and refined craftsmanship.", },

    { city: "Riyadh",
      name: "Chopard Boutique",
      address: "Panorama Mall,Panorama Mall, Tahlia Street, Riyadh,Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM  ",
      phone: "(011) 2815300",
      map: "https://maps.app.goo.gl/Fs2c2t9BXeRukr3V8" 
    ,story:
          " This boutique reflects timeless elegance and refined craftsmanship.", },
      
      { city: "Riyadh",
        name: "Chopard Boutique",
        address: "Solitaire Mall, As Sahafah district, King Abdulaziz Road, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",

        phone: "(011) 51 27 299",

        map: "https://maps.app.goo.gl/u46HRRGNmcgnfv7z6" 
      ,story:
          " This boutique reflects timeless elegance and refined craftsmanship.", },
        
        { city: "Riyadh",
          name: "Hublot Boutique",
          address: "Solitaire Mall, As Sahafah district, King Abdulaziz Road, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM  ",
          phone: "(011) 51 27 266",

          map: "https://maps.app.goo.gl/hXKSK3PJuvnWNwBZ8"
        ,story:
          "A modern boutique showcasing Hublot's innovative designs.", },

        { city: "Riyadh",
          name: "Hublot Boutique",
          address: "Panorama Mall, Panorama Mall, Tahlia Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM  ",

          phone: "(011) 4821360",

          map: "https://maps.app.goo.gl/apSWumZwFqYaPvJk8"
            ,story: "A modern boutique showcasing Hublot's innovative designs.", },
          
        { city: "Riyadh",
          name: "Hublot Boutique",
          address: "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM  ",
          phone: "(011) 2111391",
          map: "https://maps.app.goo.gl/nE98BHbBvHqMi7hJ9" 
        ,story: "A modern boutique showcasing Hublot's innovative designs.",  },
                
        { city: "Riyadh",
          name: "Azza Fahmy Boutique",
          address: "Kingdom Centre Tower,King Fahd Rd, Al Olaya, Riyadh,Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM ",
          phone: "(012) 6039762",
          map: "https://maps.app.goo.gl/3Nw9Hw1zPwj6BDEg7" 
        ,story: "A boutique celebrating Egyptian craftsmanship and contemporary design.", },

    ],
    Khobar: [
      {
        name: "Chopard Boutique",
        address: "Al-Shaikh Avenue,Al-Shaikh Avenue, King Salman Road, Al-Khobar,Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM  ",



        phone: "(013) 8022882",

        map: "https://maps.app.goo.gl/pdLF3vAKdLUF88fX7",
        story:
          "A coastal luxury experience blending sophistication with modern elegance.",
      },
      {
        name: "Hublot Boutique",
        address: "Al-Shaikh Avenue,Al-Shaikh Avenue, King Salman Road, Al Khobar, Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM ",



        phone: "(013) 8021377",

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
