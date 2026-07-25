import { useEffect, useRef, useState } from "react";
import SingleCard from "./SingleCard";
import { DepartmentCardData } from "../textContent/DepartmentsTexts";

interface DepartmentCarouselProps {
  title: string;
  cards: DepartmentCardData[];
}

export default function DepartmentCarousel({ title, cards }: DepartmentCarouselProps) {
  const GAP_PX = 16;

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const isMobile = false;

  const visibleCount = 1;
  const maxIndex = Math.max(0, cards.length - 1);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    setFlippedIndex(null);
  }, [currentIndex]);

  const prevSlide = () => {
    if (cards.length <= visibleCount) return;

    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    if (cards.length <= visibleCount) return;

    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const translateStyle = {
    transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * GAP_PX}px))`,
  };

  return (
    <div className="w-full">
      <div className="md:hidden">
        <section>
          <h2 className="text-[4.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] 2xl:text-[1.5vw] font-bold text-white text-center">
            {title}
          </h2>

          <div className="relative">
            <div
              className="overflow-hidden h-auto py-4"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={translateStyle}
              >
                {cards.map((card, index) => (
                  <div key={card.id} className="flex-shrink-0 w-full flex justify-center">
                    <SingleCard
                      card={card}
                      isMobile={!isMobile}
                      isFlipped={flippedIndex === index}
                    />
                  </div>
                ))}
              </div>
            </div>

            {cards.length > visibleCount && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white p-3 rounded-full"
                >
                  &#10094;
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white p-3 rounded-full"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
        </section>
      </div>

      <div className="hidden md:block">
        <h2 className="text-[4.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] 2xl:text-[1.5vw] font-bold text-white mb-[3vh] text-center">
          {title}
        </h2>
        <div
          className="grid gap-6
            grid-cols-[repeat(auto-fill,80vw)]
            sm:grid-cols-[repeat(auto-fill,42vw)]
            md:grid-cols-[repeat(auto-fill,30vw)]
            lg:grid-cols-[repeat(auto-fill,25vw)]
            xl:grid-cols-[repeat(auto-fill,23vw)]
            2xl:grid-cols-[repeat(auto-fill,15vw)]"
        >
          {cards.map((card, index) => (
            <SingleCard card={card} isMobile={isMobile} isFlipped={flippedIndex === index} />
          ))}
        </div>
      </div>
    </div>
  );
}
