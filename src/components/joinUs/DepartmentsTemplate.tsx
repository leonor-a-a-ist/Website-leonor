import { DepartmentCardData, joinUsCards } from "src/components/textContent/DepartmentsTexts";
import DepartmentCarousel from "./DepartmentCarousel";
import DepartmentPopUp from "./DepartmentPopUp";
import { useState } from "react";

export default function DepartmentCards() {
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentCardData | null>(null);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-[4vw] w-full 2xl:w-[70vw]">
        <DepartmentCarousel
          title="TECHNICAL DEPARTMENTS"
          cards={joinUsCards.technical}
          onSelectDep={setSelectedDepartment}
        />

        <DepartmentCarousel
          title="OPERATIONAL DEPARTMENTS"
          cards={joinUsCards.operational}
          onSelectDep={setSelectedDepartment}
        />
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
