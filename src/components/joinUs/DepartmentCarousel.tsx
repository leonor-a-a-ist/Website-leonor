import { useState } from "react";
import SingleCard from "./SingleCard";
import { DepartmentCardData } from "../textContent/DepartmentsTexts";

interface DepartmentCarouselProps {
  title: string;
  cards: DepartmentCardData[];
  onSelectDep: (department: DepartmentCardData) => void;
}

export default function DepartmentCarousel({ title, cards, onSelectDep }: DepartmentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0); /* current card shown in carousel */

  const maxIndex = Math.max(0, cards.length - 1);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const prevSlide = () => {
    if (cards.length <= 1) return;

    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    if (cards.length <= 1) return;

    setCurrentIndex(next => (next === maxIndex ? 0 : next + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const translateStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className="w-full flex flex-col gap-[1vw]">
      <h2 className="text-[5vw] md:text-[3vw] lg:text-[2vw] 2xl:text-[1.7vw] font-bold text-white text-center">
        {title}
      </h2>

      <div
        className="md:hidden relative overflow-hidden h-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex transition-transform duration-500 ease-in-out" style={translateStyle}>
          {cards.map((card, _) => (
            <div key={card.id} className="shrink-0 w-full flex justify-center">
              <SingleCard card={card} isMobile={true} onClick={() => onSelectDep(card)} />
            </div>
          ))}
        </div>

        {cards.length > 1 && (
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

      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-[2vw]">
          {cards.map((card, _) => (
            <SingleCard card={card} isMobile={false} onClick={() => onSelectDep(card)} />
          ))}
        </div>
      </div>
    </div>
  );
}
