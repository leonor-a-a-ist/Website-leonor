import { DepartmentCardData } from "src/components/textContent/DepartmentsTexts";

interface DepartmentCardProps {
  card: DepartmentCardData;
  isMobile: boolean;
  onClick: () => void;
}

export default function SingleCard({ card, isMobile, onClick }: DepartmentCardProps) {
  const areas = card.subAreas ? Object.keys(card.subAreas).join(" · ") : "";

  return (
    <div className="block group focus:outline-none">
      <div
        className={`relative
            w-[65vw] md:w-auto aspect-[4/3]
            group-hover:[transform:rotateY(180deg)]
            perspective-[1000px]
            rounded-lg xl:rounded-2xl shadow-lg
            [transform-style:preserve-3d]
            transition-transform
            duration-700
            cursor-pointer
            will-change-transform`}
        role="button"
        aria-label={card.title}
        onClick={onClick}
      >
        {/* Frente */}
        <div className="absolute flex flex-col inset-0 rounded-lg xl:rounded-2xl bg-gray-800 [backface-visibility:hidden] items-center justify-center gap-[1vh]">
          {card.icon && <card.icon size={70} strokeWidth={1.5} />}

          <h3 className="text-[4.2vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.7vw] 2xl:text-[1.5vw] font-semibold text-center">
            {card.title}
          </h3>

          {isMobile && (
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] bg-black/60 backdrop-blur-sm uppercase shadow-md">
              Tap info
            </div>
          )}
        </div>

        {/* Verso */}
        <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg xl:rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gray-900 p-3 text-center border border-gray-800 pointer-events-auto">
          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <p className="text-[4vw] md:text-[1.8vw] lg:text-[1.5vw] 2xl:text-[1.2vw] text-gray-200">
              {card.cardDescription}
              {areas && (
                <>
                  <br />
                  <strong>Areas:</strong> {areas}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
