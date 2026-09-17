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
  cardDescription: string;
  popupDescription?: string;
  subAreas?: { [key: string]: string };
  technologies?: string[];
  media: (
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "video";
        src: string;
        alt: string;
      }
  )[];
  icon: LucideIcon | null;
}

const tecDepartmentsTexts: DepartmentCardData[] = [
  {
    id: "ac",
    title: "Aerodynamics & Cooling",
    cardDescription:
      "Shape the motorcycle's aerodynamic profile and keep its battery pack running at the perfect temperature, lap after lap.",
    popupDescription:
      "The Aerodynamics & Cooling department is responsible for developing the motorcycle’s aerodynamic package and managing the thermal performance of the powertrain. The team designs and optimizes aerodynamic surfaces and appendages using CAD and CFD, focusing on reducing drag and generating downforce, while also manufacturing the prototype’s composite fairings. Additionally, the department designs the liquid cooling circuit, heat exchanger, and battery pack cooling system to ensure optimal operating temperatures and reliable performance.",
    subAreas: {
      Design:
        "is responsible for creating the motorcycle’s bodywork, focusing on achieving the most efficient aerodynamic structure. This involves conducting extensive research and analysis to understand airflow dynamics and how different shapes affect performance. This area also takes care of the manufacturing process of the entirety of the prototype’s fairings, which are made with composites (fiberglass and carbon fiber).",
      Cooling:
        "is responsible for ensuring effective thermal management of the battery pack, motor and controller. This includes conducting simulations to evaluate the thermal performance and efficiency of the system, accounting for the varying power outputs encountered during racing conditions. Additionally, the team designs and manufactures a comprehensive cooling system that incorporates both air- and water-based solutions. Close collaboration with other departments is integral to this subarea, as it ensures the battery pack operates efficiently and remains within optimal temperature ranges.",
      CFD: "is responsible for conducting detailed analyses and simulations related to fluid dynamics. Their key responsibilities include developing and implementing macros to automate repetitive tasks and streamline the simulation process and analyze simulation results to extract meaningful data and visualize flow patterns. CFD and Design work together while building new and improved iterations of the fairings until an optimized version is reached.",
    },
    technologies: ["Siemens NX", "STAR-CCM+", "MATLAB"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/ac/ac.webp",
        alt: "Aerodynamics and Cooling",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech2.webp",
        alt: "tech2",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech3.webp",
        alt: "tech3",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech4.webp",
        alt: "tech4",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech5.webp",
        alt: "tech5",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech6.webp",
        alt: "tech6",
      },
      {
        type: "image",
        src: "/images/joinUs/ac/tech7.webp",
        alt: "tech7",
      },
    ],
    icon: Wind,
  },
  {
    id: "vd",
    title: "Vehicle Dynamics",
    cardDescription:
      "Turn physics into performance by modeling, predicting, and fine-tuning exactly how the motorcycle behaves on track.",
    popupDescription:
      "The Dynamics department brings together the expertise required to create predictive multibody dynamic models, determine optimal setup parameters, and analyze track behavior. The dynamics team focuses on developing and refining models of our prototype to ensure they accurately reflect real-world conditions. This allows for the prediction of motorcycle behavior and the determination of optimal lap times, while also gathering critical data such as speed, acceleration, braking forces, and more. This information is invaluable for guiding the production and design processes of our prototypes. Additionally, the team is tasked with analyzing and optimizing each prototype, making key decisions regarding essential characteristics such as wheelbase, rake, engine positioning, linkage geometry, and motorcycle ergonomics. Furthermore, during testing and competition events, the team handles trackside operations, focusing on motorcycle setup configuration, fine-tuning, and telemetry data analysis to maximize performance. Through this comprehensive approach, the Dynamics department plays a crucial role in ensuring the motorcycle’s competitiveness on the track.",
    technologies: ["VI-Grade", "Adams", "MATLAB/Simulink"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/vd/dynamics.webp",
        alt: "Vehicle Dynamics",
      },
      {
        type: "image",
        src: "/images/joinUs/vd/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/vd/tech3.webp",
        alt: "tech3",
      },
      {
        type: "video",
        src: "/videos/joinUs/simAragon.mp4",
        alt: "Aragon simulation",
      },
    ],
    icon: Gauge,
  },
  {
    id: "electronics",
    title: "Electronics",
    cardDescription:
      "Develops the motorcycle’s electronic systems and software, including the dashboard, telemetry, BMS, and wiring.",
    popupDescription:
      "The Electronics department brings together the expertise required to optimize electronic systems and develop software for critical components, namely the Battery Dashboard, Telemetry, and Battery Management System (BMS). The dashboard system provides critical data to both the rider and the team regarding the motorcycle’s performance. The telemetry system plays a vital role in collecting data from various sensors, enabling the team to analyze and monitor the motorcycle’s behavior during tests and competitions. Additionally, the Battery Management System (BMS) is responsible for controlling the system and managing the battery, ensuring optimal performance and safety. Moreover, this department is tasked with organizing the wiring of the various electrical systems, guaranteeing that all components are interconnected efficiently and reliably. This meticulous organization is essential for maintaining the overall functionality and performance of the motorcycle.",
    technologies: ["Altium Designer"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/eletro/eletronics.webp",
        alt: "Electronics",
      },
      {
        type: "image",
        src: "/images/joinUs/eletro/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/eletro/tech2.webp",
        alt: "tech2",
      },
      {
        type: "image",
        src: "/images/joinUs/eletro/tech3.webp",
        alt: "tech3",
      },
      {
        type: "image",
        src: "/images/joinUs/eletro/tech4.webp",
        alt: "tech4",
      },
    ],
    icon: CircuitBoard,
  },
  {
    id: "powertrain",
    title: "Powertrain",
    cardDescription: `Develops and integrates the motorcycle’s electric propulsion system, including the battery, motor, controller, and high-voltage components.`,
    popupDescription: `The Powertrain department brings together the necessary knowledge and expertise in high-voltage accumulator design, electric motor characterization, power electronics integration, and strict compliance with competition electrical safety regulations. This area manages all high-voltage areas of the motorcycle, including the battery pack, controller, and electric motor. Their responsibilities extend to running simulations and designing the battery pack, which involves determining the type and quantity of cells, the busbar material and configuration, and the overall geometry. The department also focuses on the characterization and modeling of the competition-supplied electric motor to optimize performance. Furthermore, they handle the selection and organization of wiring and plan the integration of high-voltage components in the motorcycle. Additionally, the Powertrain department works closely with the Electronics department. A close relationship between these two departments is crucial in assuring the optimal functioning of the electrical systems in the prototype, both in the development of the Battery Management System and the wiring.`,
    technologies: [
      "COMSOL",
      "About:Energy",
      "MATLAB/Simulink",
      "DVT",
      "High-Voltage System Assembly",
    ],
    media: [
      {
        type: "image",
        src: "/images/joinUs/pow/powertrain.webp",
        alt: "Powertrain",
      },
      {
        type: "image",
        src: "/images/joinUs/pow/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/pow/tech2.webp",
        alt: "tech2",
      },
      {
        type: "image",
        src: "/images/joinUs/pow/tech3.webp",
        alt: "tech3",
      },
    ],
    icon: Cog,
  },
  {
    id: "structures",
    title: "Structures",
    cardDescription: `Designs, simulates, and manufactures the motorcycle’s structural components, from the main structures to the parts connecting different systems.`,
    popupDescription: `The Structures department brings together the necessary knowledge and expertise in CAD modeling and FEM simulations. To maximize design and manufacturing efficiency across a broad operational scope, the team is divided into two specialized subdivisions: Main Structures and Connecting Components, managed by a sub-leader.`,
    subAreas: {
      "Main Structures": `is responsible for designing, simulating, and manufacturing all primary structural components of our prototype, including the frame, swingarm, subframe, and battery pack enclosure.`,
      "Connecting Components": `also handles design, simulation, and manufacturing, but focuses on all other structural parts of the motorcycle. This often includes components that connect two or more sub-assemblies, such as the motor mount and triple clamps, among many others.`,
    },
    technologies: ["SolidWorks", "Altair HyperMesh"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/structures/structures.webp",
        alt: "Structures",
      },
      {
        type: "image",
        src: "/images/joinUs/structures/tech2.webp",
        alt: "tech2",
      },
      {
        type: "image",
        src: "/images/joinUs/structures/tech3.webp",
        alt: "tech3",
      },
      {
        type: "image",
        src: "/images/joinUs/structures/tech4.webp",
        alt: "tech4",
      },
    ],
    icon: Blocks,
  },
  {
    id: "software",
    title: "Software",
    cardDescription: `Develops and maintains digital tools that support TLMoto’s technical and organizational needs, including telemetry, internal management tools, and the team’s website.`,
    popupDescription:
      "The Software department is responsible for developing and maintaining the digital tools and systems that support TLMoto’s technical and organizational needs. The department develops internal platforms that help manage team availability, meetings, events, and manufacturing shifts, making logistics more organized and accessible across the team. It also develops software for processing and analyzing telemetry data collected from the motorcycle, transforming raw data into meaningful graphs and metrics that support engineering decisions. Additionally, the department maintains the team’s official website, which serves as the main public and institutional platform for showcasing TLMoto’s history, prototypes, achievements, and activities. Through these tools, the Software department helps optimize internal operations, improve access to technical data, and support informed decision-making across the team.",
    technologies: ["Next.js", "React", "Airtable", "Polypane"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/software/software.webp",
        alt: "Software",
      },
      {
        type: "image",
        src: "/images/joinUs/software/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/software/tech2.webp",
        alt: "tech2",
      },
      {
        type: "image",
        src: "/images/joinUs/software/tech3.webp",
        alt: "tech3",
      },
    ],
    icon: Code2,
  },
];

const opDepartmentsTexts: DepartmentCardData[] = [
  {
    id: "marketing",
    title: "Marketing & Design",
    cardDescription: `Manages the team’s online presence and promotional content, while creating the team’s visual identity, merchandise, and motorcycle graphics.`,
    popupDescription:
      "The Marketing & Design team brings together the necessary knowledge and expertise to cover brand management, sponsor visibility, digital communication, media production, and motorcycle livery design. Marketing is responsible for the team’s social media presence, creating content that promotes the team, our events, recruitment, and relevant trends. The department is also responsible for designing physical materials such as roll-ups, pit box walls, merchandise, and other promotional materials. Lastly, it’s important to note that Marketing and Design play a crucial role in the promotion of sponsors. Through strategic content creation, visibility efforts, and effective brand integration across various platforms, they ensure that sponsors receive prominent exposure, contributing to a mutually beneficial partnership. This collaboration is vital for maintaining sponsor relationships and maximizing their impact within the team’s overall strategy.",
    technologies: ["Blender", "Adobe Photoshop", "Canva", "KeyShot", "DaVinci Resolve"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/marketing/marketing.webp",
        alt: "Marketing & Design",
      },
      {
        type: "image",
        src: "/images/joinUs/marketing/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/marketing/tech2.webp",
        alt: "tech2",
      },
    ],
    icon: Palette,
  },
  {
    id: "hr",
    title: "Human Resources",
    cardDescription: `Manages recruitment, supports team members, and promotes team development through training, workshops, and team-building activities.`,
    popupDescription:
      "Human Resources department is focused on recruitment planning, supporting different areas, leaders, and team members, as well as organizing team-building activities, training sessions, and workshops. Additionally, HR plays a key role in fostering a positive organizational culture that promotes collaboration, engagement, and the professional growth of all members. By providing these resources, the department ensures that each team member has the support needed to contribute effectively to the team’s goals.",
    technologies: ["Airtable"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/hr/hr.webp",
        alt: "Human Resources",
      },
      {
        type: "image",
        src: "/images/joinUs/hr/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/hr/tech2.webp",
        alt: "tech2",
      },
    ],
    icon: UsersRound,
  },
  {
    id: "management",
    title: "Management",
    cardDescription: `Manages the team’s sponsors and logistics, securing partnerships and organizing events, fairs, and RollOuts.`,
    popupDescription:
      "The Management department reflects the broad operational scope of sponsorship acquisition, sponsor management, logistics, events, and financial coordination required throughout the project cycle. This department primarily focuses on securing financial partnerships, maintaining strong relationships with existing team sponsors, and attracting additional companies and organizations to invest in the project. By fostering these relationships, the department ensures that the team has the necessary resources and support to achieve its goals. Additionally, the department is responsible for the team’s logistical tasks, which include planning the team’s presence at fairs nationwide, organizing promotional events for the team, and, of course, coordinating the RollOut events for the prototypes developed by the team. These tasks are crucial when it comes to increasing the team’s visibility and raising awareness of its accomplishments.",
    technologies: ["Airtable", "YAMM"],
    media: [
      {
        type: "image",
        src: "/images/joinUs/management/management.webp",
        alt: "Management",
      },
      {
        type: "image",
        src: "/images/joinUs/management/tech1.webp",
        alt: "tech1",
      },
      {
        type: "image",
        src: "/images/joinUs/management/tech2.webp",
        alt: "tech2",
      },
    ],
    icon: ChartNoAxesCombined,
  },
];

export const joinUsCards = {
  technical: tecDepartmentsTexts,
  operational: opDepartmentsTexts,
};
