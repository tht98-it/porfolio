import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer",
    company: "Galaxy Technology Services",
    startDate: "November 2023",
    isCurrentJob: true,
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Engineered responsive UI with Next.js, TypeScript, and Tailwind CSS.",
      "Designed reusable HOCs, cutting code duplication by 30%.",
      "Developed SMS scheduling and authentication logic, reducing errors by 25%.",
      "Built Excel export for stream analytics, boosting reporting efficiency.",
      "Managed GitLab tasks, achieving 95% sprint deadline compliance.",
      "Resolved client issues within 48 hours, ensuring CN01 flow accuracy.",
      "Enhanced payment flow documentation, lowering support tickets by 20%.",
    ],
  },
  {
    designation: "Front End Developer",
    company: "Intelli JSC",
    startDate: "Juanuary 2023",
    endDate: "October 2023",
    location: "Vietnam",
    description: [
      "Built interactive UI with React-Redux, TypeScript, and Material UI.",
      "Developed ArcGIS widgets for geospatial tank point visualization.",
      "Created secure RESTful APIs for user authentication and logic.",
      "Optimized ArcGIS database schemas, reducing query times by 15%.",
      "Delivered features on time, meeting 90% of client requirements.",
      "Implement bussiness logic API for tank point management, improving data accuracy.",
    ],
  },
  {
    designation: "Front End Developer",
    company: "Hitachi Vantara Vietnam",
    startDate: "January 2022",
    endDate: "December 2022",
    location: "Vietnam",
    description: [
      "Designed responsive UI with Material UI, React-Redux, and TypeScript.",
      "Wrote Jest/Enzyme unit tests, achieving 80% coverage, reducing bugs.",
      "Refactored legacy code, improving performance and cutting technical debt.",
      "Deployed scalable apps with Docker, ensuring zero-downtime releases.",
      "Iterated features from client feedback, meeting 95% requirements.",
    ],
  },
  {
    designation: "Front End Developer",
    company: "Dision Tech LLC",
    startDate: "January 2021",
    endDate: "December 2021",
    location: "Vietnam",
    description: [
      "Refactored React/TypeScript code, enhancing performance and maintainability.",
      "Designed modern UI with Figma, Material UI, and Tailwind CSS.",
      "Deployed apps on Nginx, optimizing server performance for scalability.",
      "Aligned features with business goals via product manager feedback.",
      "Implemented CI/CD pipelines, reducing deployment time",
    ],
  },
];

export default experiences;
