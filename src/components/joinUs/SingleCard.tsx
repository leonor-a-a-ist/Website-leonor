import { motion } from "framer-motion";
import { DepartmentCardData } from "src/components/textContent/DepartmentsTexts";

interface DepartmentCardProps {
  card: DepartmentCardData;
  isMobile: boolean;
  isFlipped: boolean;
}

export default function SingleCard({ card, isMobile, isFlipped }: DepartmentCardProps) {
  const rotationClass = isFlipped
    ? "[transform:rotateY(180deg)]"
    : "group-hover:[transform:rotateY(180deg)]";

  return (
    <div className="block group focus:outline-none">
      <div
        className={`relative
            w-[65vw]
            md:w-auto
            aspect-[4/3]
            perspective-[1000px]
            group
            rounded-lg
            shadow-lg
            [transform-style:preserve-3d]
            transition-transform
            duration-700
            ease-in-out
            will-change-transform
            ${rotationClass}`}
        role="button"
        aria-label={card.title}
      >
        {/* Frente */}
        <div className="absolute inset-0 rounded-lg overflow-hidden [backface-visibility:hidden] bg-gray-800 pointer-events-none flex flex-col items-center justify-center gap-4 p-6">
          {card.icon && <card.icon size={64} strokeWidth={1.5} />}

          <h3 className="text-xl font-semibold text-white text-center">{card.title}</h3>

          {isMobile && !isFlipped && (
            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-white text-[10px] backdrop-blur-sm uppercase tracking-wide">
              Tap info
            </div>
          )}
        </div>

        {/* Verso */}
        <div className="absolute inset-0 rounded-lg overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gray-900 flex flex-col justify-center items-center p-3 text-center border border-white/10 pointer-events-none">
          <div className="overflow-y-auto flex-1 w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pointer-events-auto">
            <p className="text-sm text-gray-200 whitespace-pre-line">
              {card.description}
              {card.areas && (
                <>
                  <br />
                  <strong>Areas:</strong> {card.areas}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
