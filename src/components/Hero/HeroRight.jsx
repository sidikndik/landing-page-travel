import group42 from "../../assets/Group 42.png";
import mapOrnament from "../../assets/map-ornament.png";

export default function HeroRight() {
    return (
        <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px]">
            {/* Map ornament background */}
            <img
                src={mapOrnament}
                alt="World map ornament"
                className="
          absolute inset-0
          w-full h-full object-contain
          opacity-60
          -z-10
          pointer-events-none
          select-none
        "
            />

            {/* Main group (person + blob + floating cards) */}
            <img
                src={group42}
                alt="Traveler hero"
                className="
          absolute right-0 bottom-0
          w-[360px] sm:w-[420px] lg:w-[520px]
          h-auto
          object-contain
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        "
            />
        </div>
    );
}
