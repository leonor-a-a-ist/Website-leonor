import { withBasePath } from "@/src/utils/basePath";
import { Cog, LucideIcon } from "lucide-react";
import {
  Blocks,
  ChartNoAxesCombined,
  CircuitBoard,
  Code2,
  Gauge,
  Palette,
  UsersRound,
  Wind,
} from "lucide-react";

export interface DepartmentCardData {
  id: string;
  title: string;
  description: string;
  areas?: string;
  imageSrc: string;
  icon?: LucideIcon | null;
}

const tecDepartmentsTexts = [
  {
    id: "ac",
    title: "Aerodynamics and Cooling",
    description: `Develops the motorcycle’s aerodynamics, cooling systems, and composite bodywork through design, simulation, and manufacturing.`,
    areas: `CFD · Cooling · Design`,
    imageSrc: "/images/joinUs/ac.jpeg",
    icon: Wind,
  },
  {
    id: "dynamics",
    title: "Vehicle Dynamics",
    description: `Analyzes and optimizes the motorcycle’s behavior, geometry, setup, and performance through modeling and testing.`,
    imageSrc: "/images/joinUs/dynamics.jpeg",
    icon: Gauge,
  },
  {
    id: "electronics",
    title: "Electronics",
    description: `Develops the motorcycle’s electronic systems and software, including the dashboard, telemetry, BMS, and wiring.`,
    imageSrc: "/images/joinUs/electronics.jpeg",
    icon: CircuitBoard,
  },
  {
    id: "powertrain",
    title: "Powertrain",
    description: `Develops and integrates the motorcycle’s electric propulsion system, including the battery, motor, controller, and high-voltage components.`,
    imageSrc: "/images/joinUs/powertrain.jpeg",
    icon: Cog,
  },
  {
    id: "structures",
    title: "Structures",
    description: `Designs, simulates, and manufactures the motorcycle’s structural components, from the main structures to the parts connecting different systems.`,
    areas: `Main Structures · Connecting Components`,
    imageSrc: "/images/joinUs/structures.jpeg",
    icon: Blocks,
  },
  {
    id: "software",
    title: "Software",
    description: `Develops and maintains digital tools that support TLMoto’s technical and organizational needs, including telemetry, internal management tools, and the team’s website.`,
    imageSrc: "/images/joinUs/software.jpeg",
    icon: Code2,
  },
];

const managDepartmentsTexts = [
  {
    id: "marketing",
    title: "Marketing and Design",
    description: `Manages the team’s online presence and promotional content, while creating the team’s visual identity, merchandise, and motorcycle graphics.`,
    imageSrc: "/images/joinUs/marketing.jpeg",
    icon: Palette,
  },
  {
    id: "hr",
    title: "Human Resources",
    description: `Manages recruitment, supports team members, and promotes team development through training, workshops, and team-building activities.`,
    imageSrc: "/images/joinUs/hr.jpeg",
    icon: UsersRound,
  },
  {
    id: "management",
    title: "Management",
    description: `Manages the team’s sponsors and logistics, securing partnerships and organizing events, fairs, and RollOuts.`,
    imageSrc: "/images/joinUs/management.jpeg",
    icon: ChartNoAxesCombined,
  },
];

const mapCards = (cards: DepartmentCardData[]) =>
  cards.map(card => ({
    ...card,
    imageSrc: withBasePath(card.imageSrc),
  }));

export const joinUsCards = {
  technical: mapCards(tecDepartmentsTexts),
  operational: mapCards(managDepartmentsTexts),
};
