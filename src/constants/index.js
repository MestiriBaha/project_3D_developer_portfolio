import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Jobs",
  },
  {
    id: "contact",
    title: "For Employers",

  },
  {
    id: "login",
    title: "Sign Up",


  },
  {
    id : "Advice",
    title :"Recommend Me"

  }
];

const services = [
  {
    title: "For job seekers",
    icon: web,
  },
  {
    title: "For employees",
    icon: mobile,
  },
  {
    title: "For employers",
    icon: backend,
  },
  {
    title: "For Advice seekers",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ODDO Bhf",
    icon: html,
  },
  {
    name: "AxeFinance",
    icon: css,
  },
  {
    name: "BNP PARIBAS",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Visit the Talent Match website and click on the sign up button",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      
    ],
  },
  {
    title: "Fill out the registration form.",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      
    ],
  },
  {
    title: "Add your resume, work experience, education, and skills.",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      
    ],
  },
  {
    title: "Get job  recommendations that match your qualifications and preferences.",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
     
    ],
  },
  {
    title: "Apply for the ones that interest you.",
    company_name: "Take advantage of Talent Match's recommended training programs.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
     
    ],
  },
  {
    title: "Take advantage of Talent Match's recommended training programs.",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
     
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I never thought finding the right job for me could be this easy and personalized!",
    name: "Ons Kallel",
    designation: "Recent bachelor graduate",
    company: " Esprit ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The platform matched me with my dream job and helped me land an interview!",
    name: "Ahmed Jarraya",
    designation: "Devops Engineer",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "thanks to the training recommendations on the platform, I was able to gain new skills and find better job opportunities.",
    name: "Wassim belgacem",
    designation: "Software engineer",
    company: "AxeFinance",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "JOBS Best places to work 2023 Revealed",
    description:
    "Over the past year, working professionals have been leaving their jobs for better opportunities, resisting “return to office” directives, and pushing for improvements from their employers — including more flexibility on where and when to work, better pay, improved work-life balance",

    tags: [
      {
        name: "JOBS",
        color: "blue-text-gradient",
      },
      {
        name: "Employee",
        color: "green-text-gradient",
      },
      {
        name: "Employer",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Workplace Trends 2023",
    description:
      "The trends identified will persist beyond the near-term fluctuations in the business cycle, and the companies that focus on them will ensure their workplace survives, even thrives, into the future",
      tags: [
        {
          name: "JOBS",
          color: "blue-text-gradient",
        },
        {
          name: "Employee",
          color: "green-text-gradient",
        },
        {
          name: "Employer",
          color: "pink-text-gradient",
        },
      ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Checklist for increasing your chances of making the Best Places to Work list",
    description:
    "Since the beginning, it has honored companies who are doing right by their employees - as told to us by employees. You can say it's the People's Choice of employer awards. ",
    tags: [
      {
        name: "JOBS",
        color: "blue-text-gradient",
      },
      {
        name: "Employee",
        color: "green-text-gradient",
      },
      {
        name: "Employer",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
