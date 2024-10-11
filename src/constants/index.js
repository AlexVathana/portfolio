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
    shield,
    dbu,
    java,
    mysql,
    cpp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fitness Center Attendant",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: web,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
  ];
  
  const experiences = [
  {
      title: "Web Developer",
      company_name: "Dallas Baptist University",
      icon: shield,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Developed dynamic scholarship filter boxes for users using HTML, CSS, and JavaScript.",
        "Implemented a print receipt functionality for students’ tuitions using Velocity and JavaScript.",
        "Managed front-end development of the university’s websites using Cascade CMS.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Fitness Center Attendant",
      company_name: "Dallas Baptist University",
      icon: shield,
      iconBg: "#383E56",
      date: "December 2023 - May 2024",
      points: [
        "Managed operations: Oversaw daily fitness center activities, ensuring efficient operations and a positive customer experience, demonstrating strong organizational.",
        "Attention to detail: Maintained a high standard of cleanliness and safety by monitoring equipment and facilities.",
        "Customer service: Provided excellent service by assisting clients with inquiries and ensuring their needs were met.",
        "Team collaboration: Worked closely with colleagues to maintain a supportive and effective work environment.",
      ],
    },
  
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    

  ];
  

  
  export { services, technologies, experiences, testimonials };