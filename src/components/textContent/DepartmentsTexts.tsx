import { withBasePath } from "@/src/utils/basePath";

export interface DepartmentCardData {
  id: string;
  title: string;
  description: string;
  technologies: string;
  imageSrc: string;
}

const boardText = [
  {
    id: "board",
    title: "Board",
    description: `Board description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/board.jpeg",
  },
];

const tecDepartmentsTexts = [
  {
    id: "ac",
    title: "Aerodynamics and Cooling",
    description: `Aerodynamics and Cooling description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/ac.jpeg",
  },
  {
    id: "dynamics",
    title: "Dynamics",
    description: `Dynamics description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/dynamics.jpeg",
  },
  {
    id: "electronics",
    title: "Electronics",
    description: `Electronics description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/electronics.jpeg",
  },
  {
    id: "powertrain",
    title: "Powertrain",
    description: `Powertrain description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/powertrain.jpeg",
  },
  {
    id: "structures",
    title: "Structures",
    description: `Structures description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/structures.jpeg",
  },
  {
    id: "software",
    title: "Software",
    description: `Software description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/software.jpeg",
  },
];

const managDepartmentsTexts = [
  {
    id: "marketing",
    title: "Marketing and Design",
    description: `Marketing and Design description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/marketing.jpeg",
  },
  {
    id: "hr",
    title: "Human Resources",
    description: `Human Resources description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/hr.jpeg",
  },
  {
    id: "management",
    title: "Management",
    description: `Management description...`,
    technologies: `blabla`,
    imageSrc: "/images/joinUs/management.jpeg",
  },
];

interface DepartmentCard {
  id: string;
  title: string;
  description: string;
  technologies: string;
  imageSrc: string;
}

const mapCards = (cards: DepartmentCard[]) =>
  cards.map(card => ({
    ...card,
    imageSrc: withBasePath(card.imageSrc),
  }));

export const joinUsCards = {
  board: mapCards(boardText),
  technical: mapCards(tecDepartmentsTexts),
  management: mapCards(managDepartmentsTexts),
};
