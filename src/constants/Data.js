import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.jpg";

import { FaRegLightbulb } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
];

export const projects = [
  {
    id: 1,
    name: "Dashboard",
    url: "https://wejdan.github.io/dashboardv2/",
    screenshot: Project1,
    description:
      "Simple responsive front-end dashboard. This dashboard uses the Bootstrap styles along with a variety of powerful libraries and tools to create a powerful admin panel.",

    fearures: [
      "Responsive Dashboard.",
      "Display all movies of specific genre.",
      "Uses Chart JavaScript library to design the Reports'chart",
      "Uses Tidio integrations to add chatbot in dashboard website.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Vanilla Javascript/jquery",
      "Chartjs",
      "Bootstrap",
      "Tidio",
    ],
  },
  {
    id: 2,
    name: "Movies App",
    url: "https://hardcore-curran-d6a8dc.netlify.app/",
    screenshot: Project2,
    description: "JavaScript app that fetches movie data from the Movie DB API",
    fearures: [
      "Display trending movies.",
      "Display selected movies from all genres in the home page.",
      "Display movies detailes.",
      "Allow uses to search for movies by keyword.",
      "Display all movies of specific genre.",
      "Allow users to add and remove movies from watch later list.",
      "Allow users to add and remove movies from favorite list.",
      "Allow users to rate and unrate movies.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Vanilla Javascript/jquery",
      "slick slider",
      "Tailwind Css.",
    ],
  },
  {
    id: 3,
    name: "Metro App",
    url: "https://nrt-mentorship.github.io/metro-map/",
    screenshot: Project3,
    description:
      "JavaScript app that uses Google map api to display Riyadh metro",

    fearures: [
      "Display Riyadh metro stations and lines.",
      "Display information and detailes about the stations.",
      "Allow users to zoom in and out.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Vanilla Javascript/jquery",
      "Google map api",
    ],
  },
  {
    id: 4,
    name: "News App",
    url: "https://wejdan.github.io/newsApp/",
    screenshot: Project4,
    description: "JavaScript app that fetches movie data from the Movie DB API",

    fearures: [
      "Categorize news into Categories such as health, general, bushiness etc.",
      "Allow a Users to Search for News by Words.",
      "Display Weather on Your Website Home Page.",
      "Allow the User to Search of Weather for a Specific City.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Vanilla Javascript/jquery",
      "Weather API",
      "News API",
      "Semantic ui",
    ],
  },
];

export const skills = [
  {
    id: 1,
    icon: <MdWeb />,
    title: "Web Development",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <BsImageFill />,
    title: "Graphic Design",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <FaRegLightbulb />,
    title: "Problem-solving",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
