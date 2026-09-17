import { DepartmentCardData, joinUsCards } from "src/components/textContent/DepartmentsTexts";
import DepartmentCarousel from "./DepartmentCarousel";
import DepartmentPopUp from "./DepartmentPopUp";
import { useState } from "react";

export default function DepartmentCards() {
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentCardData | null>(null);

  return (
    <div className="w-full flex justify-center mt-[10vh] mb-[12vh]">
      <div className="w-[95vw] intems-center justify-center">
        <div className="flex flex-col items-center gap-[6vh]">
          <div>
            <h1 className="text-white text-[7vw] md:text-[5vw] xl:text-[3vw] font-bold leading-tight text-center mb-6">
              Our Departments
            </h1>

            <p className="text-[4.2vw] sm:text-[3vw] md:text-[2.2vw] lg:text-[1.7vw] 2xl:text-[1.5vw] text-gray-300 leading-relaxed text-center">
              Discover our departments and find the area that best fits your interests and skills.
              Join the team, learn new things, and help us build TLMoto.
            </p>
          </div>

          <div className="flex flex-col gap-[7vh] w-[90vw] md:w-[100vw] lg:w-[85vw] 2xl:w-[70vw]">
            <div>
              <DepartmentCarousel
                title="TECHNICAL DEPARTMENTS"
                cards={joinUsCards.technical}
                onSelectDep={setSelectedDepartment}
              />
            </div>

            <div>
              <DepartmentCarousel
                title="OPERATIONAL DEPARTMENTS"
                cards={joinUsCards.operational}
                onSelectDep={setSelectedDepartment}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedDepartment && (
        <DepartmentPopUp
          department={selectedDepartment}
          onClose={() => setSelectedDepartment(null)}
        />
      )}
    </div>
  );
}
