import c1 from '../OurBrands/assets/C1.webp'
import c2 from '../OurBrands/assets/C3.webp'
import c3 from '../OurBrands/assets/C2.webp'

export default function ThreeDVisuals() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

      {/* TITLE */}
      <h2 className="font-baskerville text-4xl md:text-6xl tracking-[0.3em] text-white mb-16">
        3D Visuals Boutiques Images
      </h2>

      {/* IMAGES CONTAINER */}
      <div className="w-full flex justify-center items-center gap-4">
        {/* IMAGE 1 */}
        <div className="flex-1 h-[70vh] perspective">
          <img
            src={c1}
            alt="Luxury Watch"
            className="
              h-full w-full object-cover
              transform-gpu
              rotate-x-[0deg] rotate-y-[-4deg]
              scale-105
              shadow-[0_40px_120px_rgba(0,0,0,0.85)]
              transition-transform duration-700
            "
          />
        </div>

        {/* IMAGE 2 */}
        <div className="flex-1 h-[70vh] perspective">
          <img
            src={c2}
            alt="Luxury Jewelry"
            className="
              h-full w-full object-cover
              transform-gpu
              rotate-x-[0deg] rotate-y-[3deg]
              scale-105
              shadow-[0_40px_120px_rgba(0,0,0,0.85)]
              transition-transform duration-700
            "
          />
        </div>

        {/* IMAGE 3 */}
        <div className="flex-1 h-[70vh] perspective">
          <img
            src={c3}
            alt="Luxury Lifestyle"
            className="
              h-full w-full object-cover
              transform-gpu
              rotate-x-[0deg] rotate-y-[-2deg]
              scale-105
              shadow-[0_40px_120px_rgba(0,0,0,0.85)]
              transition-transform duration-700
            "
          />
        </div>
      </div>
    </section>
  );
}
