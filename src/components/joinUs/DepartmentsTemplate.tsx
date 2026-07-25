import { joinUsCards } from "src/components/textContent/DepartmentsTexts";
import DepartmentCarousel from "./DepartmentCarousel";

export default function DepartmentCards() {
  return (
    <div className="w-full flex justify-center mt-[10vh] mb-[5vh]">
      <div className="intems-center justify-center">
        <div className="flex flex-col gap-20">
          <div>
            <h1 className="text-white text-[7vw] md:text-[5vw] xl:text-[3vw] font-bold leading-tight text-center">
              Our Departments
            </h1>

            <p className="text-[3.7vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.3vw] 2xl:text-[1vw] text-gray-300 leading-relaxed text-center">
              bla bla...
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-[3vw] w-[90vw]">
            {/* Left column */}
            <div className="md:w-[50%] lg:w-[60%]">
              <DepartmentCarousel title="TECHNICAL DEPARTMENTS" cards={joinUsCards.technical} />
            </div>

            {/* Right column */}
            <div className="md:w-[50%] lg:w-[40%]">
              <DepartmentCarousel title="MANAGEMENT DEPARTMENTS" cards={joinUsCards.management} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
