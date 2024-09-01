import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";


export const HERO_CONTENT = `Elevate your digital presence with Vikram Reshmi, a versatile web developer proficient in frontend development, web designing and backend development. With a meticulous eye for detail and a passion for crafting immersive digital experiences.`;

export const ABOUT_TEXT = `
I am a skilled web developer specializing in frontend and backend development with the knowledge of JavaScript language. I have a knack for turning ideas into visually appealing and user-friendly websites. With a sharp eye for detail and a commitment to excellence,I can ensure every project not only meets but exceeds expectations. Fluent in Hindi, Kannada, Marathi, and English,I can easily communicates and collaborates with a diverse range of clients and teams. `;

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    description:
      "A simple weather app using api which fetch weather, humidity, wind speed of any place worldwide created using vanilla js",
    technologies: ["HTML", "CSS", "JS", "API"],
    repo:"https://github.com/VikramR8/Weather-App-using-api",
  },
  {
    title: "To-Do List Using React",
    image: project2,
    description:
      "A Simple ToDo List App which stores data in local storage and performs add, delete and update operations",
    technologies: ["React JS","Tailwind CSS"],
    repo:"https://github.com/VikramR8/ToDo-List-using-React",
  },
  {
    title: "Notes App Usin MERN",
    image: project3,
    description:
      "A Notes app with CRUD applications which involves user authentication by signing up and many functions when the note is being created and note can be pinned",
    technologies: ["React JS", "Tailwind CSS", "Express JS", "MongoDb"],
    repo:"https://github.com/VikramR8/Notes-app-using-MERN-",
  },
];

export const CONTACT = {
  address: "#2 Vishwakarma Colony R C Nagar, Belagavi",
  phoneNo: "+91 6360712914",
  email: "vikramadityareshmi@gmail.com",
};
