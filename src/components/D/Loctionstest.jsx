
import {
  useNavigate,
  useParams,
} from "react-router-dom";

export default function BoutiquesExperience() {

  const navigate = useNavigate();

  const { city, slug, brand } = useParams();

  const data = {
    Jeddah: [
      {
        id: "chopard-boutique-jeddah",
        name: "Chopard Boutique",
        address:
          "Al Basateen Mall, Prince Mohammad Bin Abdulaziz St., Jeddah,Working timeSaturday to Thursday – 10:00 AM to 11:00 PM; Friday – 05:00 PM to 11:00 PM",
        phone: "(012) 6126299",
        map: "https://maps.app.goo.gl/ctiU9a2dCDUqHUgK9",
        story:
          "Located in the heart of Tahlia, this boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        id: "hublot-boutique-jeddah",
        name: "Hublot Boutique",
        address:
          "El Khayyat Center, 21553 El Khayyat Center, Tahlia Street, Al Andalus, Jeddah 21553,Working timeSaturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(012) 6774125",
        map: "https://maps.app.goo.gl/b8dqJvYXGRpoXELS9",
        story:
          "A bold contemporary space representing innovation in luxury watchmaking. This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        id: "azza-fahmy-jeddah",
        name: "Azza Fahmy",
        address:
          "Alkhayat Center – Pop Up,King Abdul Aziz Rd, Al Zahra, Stars Avenue Sari Road, Jeddah, Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 05:00 PM to 11:00 PM",
        phone: "?",
        map: "https://maps.app.goo.gl/objhYYKF1Djf7NLZ8",
        story:
          "A boutique celebrating Egyptian craftsmanship and contemporary design.",
      },
    ],

    Riyadh: [
      {
        city: "Riyadh",
        id: "graff-kingdom-centre",
        name: "Graff Boutique",
        address:
          "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 2111492",
        map: "https://maps.app.goo.gl/c4Q9Wg4sjXzoh3wY9",
        story:
          "This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        city: "Riyadh",
        id: "graff-olaya-towers",
        name: "Graff Boutique",
        address:
          "Olaya Towers,Olaya Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "+(011) 2699593",
        map: "https://maps.app.goo.gl/XEiZ7kztAv342Yu58",
        story:
          "This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        city: "Riyadh",
        id: "saint-louis-riyadh",
        name: "Saint Louis Boutique",
        address:
          "Olaya Towers,Olaya Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(012) 603 9760",
        map: "https://maps.app.goo.gl/qKSoEhspFA2jUJGb7",
        story:
          "This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        city: "Riyadh",
        id: "chopard-kingdom-centre",
        name: "Chopard Boutique",
        address:
          "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh,Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 2110017",
        map: "https://maps.app.goo.gl/Kt9PUZYXdgFQpUji8",
        story:
          "This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        city: "Riyadh",
        id: "chopard-panorama-mall",
        name: "Chopard Boutique",
        address:
          "Panorama Mall,Panorama Mall, Tahlia Street, Riyadh,Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 2815300",
        map: "https://maps.app.goo.gl/Fs2c2t9BXeRukr3V8",
        story:
          "This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        city: "Riyadh",
        id: "chopard-solitaire-mall",
        name: "Chopard Boutique",
        address:
          "Solitaire Mall, As Sahafah district, King Abdulaziz Road, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 51 27 299",
        map: "https://maps.app.goo.gl/u46HRRGNmcgnfv7z6",
        story:
          "This boutique reflects timeless elegance and refined craftsmanship.",
      },

      {
        city: "Riyadh",
        id: "hublot-solitaire-mall",
        name: "Hublot Boutique",
        address:
          "Solitaire Mall, As Sahafah district, King Abdulaziz Road, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 51 27 266",
        map: "https://maps.app.goo.gl/hXKSK3PJuvnWNwBZ8",
        story:
          "A modern boutique showcasing Hublot's innovative designs.",
      },

      {
        city: "Riyadh",
        id: "hublot-panorama-mall",
        name: "Hublot Boutique",
        address:
          "Panorama Mall, Panorama Mall, Tahlia Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 4821360",
        map: "https://maps.app.goo.gl/apSWumZwFqYaPvJk8",
        story:
          "A modern boutique showcasing Hublot's innovative designs.",
      },

      {
        city: "Riyadh",
        id: "hublot-kingdom-centre",
        name: "Hublot Boutique",
        address:
          "Kingdom Centre Tower,Kingdom Centre, Olaya Street, Riyadh, Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(011) 2111391",
        map: "https://maps.app.goo.gl/nE98BHbBvHqMi7hJ9",
        story:
          "A modern boutique showcasing Hublot's innovative designs.",
      },

      {
        city: "Riyadh",
        id: "azza-fahmy-riyadh",
        name: "Azza Fahmy Boutique",
        address:
          "Kingdom Centre Tower,King Fahd Rd, Al Olaya, Riyadh,Working time Saturday to Thursday – 10:00 AM to 11:00 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(012) 6039762",
        map: "https://maps.app.goo.gl/3Nw9Hw1zPwj6BDEg7",
        story:
          "A boutique celebrating Egyptian craftsmanship and contemporary design.",
      },
    ],

    Khobar: [
      {
        id: "chopard-khobar",
        name: "Chopard Boutique",
        address:
          "Al-Shaikh Avenue,Al-Shaikh Avenue, King Salman Road, Al-Khobar,Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(013) 8022882",
        map: "https://maps.app.goo.gl/pdLF3vAKdLUF88fX7",
        story:
          "A coastal luxury experience blending sophistication with modern elegance.",
      },

      {
        id: "hublot-khobar",
        name: "Hublot Boutique",
        address:
          "Al-Shaikh Avenue,Al-Shaikh Avenue, King Salman Road, Al Khobar, Working time Saturday to Thursday – 10:00 AM to 10:30 PM; Friday – 04:30 PM to 10:30 PM",
        phone: "(013) 8021377",
        map: "https://www.google.com/maps/search/?api=1&query=Hublot+Boutique+Khobar",
        story:
          "A modern boutique showcasing Hublot's innovative designs.",
      },
    ],
  };

  const selectedCity = city
  ? city.charAt(0).toUpperCase() + city.slice(1)
  : null;

  const groupedBrands = selectedCity
  ? data[selectedCity].reduce((acc, boutique) => {
      const brandName = boutique.name
        .replace(" Boutique", "")
        .trim();

      if (!acc[brandName]) {
        acc[brandName] = [];
      }

      acc[brandName].push(boutique);

      return acc;
    }, {})
  : {};

const selectedBrandStores =
  selectedCity && brand
    ? groupedBrands[decodeURIComponent(brand)]
    : null;

const selectedBoutique =
  selectedCity && slug
    ? data[selectedCity]?.find(
        (b) => b.id === slug
      )
    : null;

  return (
    <section className="bg-black text-white pt-12 pb-10 md:pt-20 md:pb-16 px-4 sm:px-6 min-h-fit">

     <h2 className="font-baskerville text-3xl sm:text-4xl md:text-6xl tracking-[0.15em] md:tracking-[0.25em] text-center text-white mb-8 md:mb-14 uppercase">
        Boutique Locator
      </h2>

      {/* ---------------- CITY SELECTION ---------------- */}
      {!selectedCity && (
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {Object.keys(data).map((cityName) => (
            <CityBox
              key={cityName}
              city={cityName}
              onClick={() =>
                navigate(`/city/${cityName.toLowerCase()}`)
              }
            />
          ))}

        </div>
      )}

      {/* ---------------- BOUTIQUE SELECTION ---------------- */}
      {selectedCity &&
  !brand &&
  !selectedBoutique && (
    <div className="max-w-5xl mx-auto">

      <BackButton
        onClick={() => navigate("/boutiques")}
      />

      <h3 className="text-xl tracking-[0.5em] text-[#c6a45f] text-center mb-12 uppercase">
        {selectedCity}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        {Object.entries(groupedBrands).map(
          ([brandName, stores]) => (
            <BrandBox
              key={brandName}
              brand={brandName}
              count={stores.length}
              onClick={() =>
                navigate(
                  `/brand/${selectedCity.toLowerCase()}/${encodeURIComponent(
                    brandName
                  )}`
                )
              }
            />
          )
        )}

      </div>

    </div>
)}


{selectedBrandStores &&
  !selectedBoutique && (
    <div className="max-w-5xl mx-auto">

      <BackButton
        onClick={() =>
          navigate(
            `/city/${selectedCity.toLowerCase()}`
          )
        }
      />

      <h3 className="text-xl tracking-[0.5em] text-[#c6a45f] text-center mb-12 uppercase">
        {decodeURIComponent(brand)}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        {selectedBrandStores.map(
          (boutique) => (
            <BoutiqueBox
              key={boutique.id}
              boutique={boutique}
              onClick={() =>
                navigate(
                  `/boutique/${selectedCity.toLowerCase()}/${boutique.id}`
                )
              }
            />
          )
        )}

      </div>

    </div>
)}

      {/* ---------------- BOUTIQUE DETAILS ---------------- */}
      {selectedBoutique && (
        <div className="max-w-3xl mx-auto text-center">

          <BackButton
            onClick={() =>
              navigate(`/city/${selectedCity.toLowerCase()}`)
            }
          />

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

              {/* Navigation */}
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

function BrandBox({
  brand,
  count,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border border-[#c6a45f]/30 rounded-xl p-8 bg-[#111] hover:border-[#c6a45f] hover:shadow-[0_0_25px_rgba(198,164,95,0.3)] transition duration-500"
    >
      <h4 className="text-base font-[cormorant] mb-2">
        {brand}
      </h4>

      <p className="text-gray-500 text-xs">
        {count} boutique
        {count > 1 ? "s" : ""}
      </p>
    </div>
  );
}