import size from "../src/components/Assets/size.jpg";
import tarakki from "../src/components/Assets/tarakki.jpg";
import skincare from "../src/components/Assets/office skincare.jpg";
import truetest from "../src/components/Assets/tru test 1.jpg"


export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;

export const projects = [
  {
    id: 1,
    title: "Advance Capital Pay",
    subtitle: "The Future of Banking",
    description:
      "Send, Save and manage your money and cryptocurrency, all in one place. AdvanceCapitalPay is the Leading Pioneer for the Future Banking. Easy access to sending money to over 50 Countries across the world, up to 10x cheaper most banks.",
    image: toAbsoluteUrl(size),
    fullDescription: [{"id": 1, "description": "1st"}, {"id": 2, "description": "2st"}, {"id": 3, "description": "3rd"}],

    // link: "https://reactbootcamp.com",
  },
  {
    id: 2,
    title: "Flares",
    subtitle: "skincare app to discover the non-infectious skincare products",
    description:
      "Skincare app to discover the non-infectious ingredients that can be used to make your skin healthy and glowing. Also, help you to get rid of the infectious skin products.",
    image: toAbsoluteUrl(skincare),
    fullDescription: ["1st", "2nd", "3rd"]
    // link: "https://reactbootcamp.com",
  },
  {
    id: 3,
    title: "Tarakki",
    subtitle: "A Job portal for skilled labor",
    description:
      ["1st", "2nd", "3rd"],
    image: toAbsoluteUrl(tarakki),
    // link: "https://reactbootcamp.com",
  },
  {
    id: 4,
    title: "TrueTest App",
    subtitle: "App to help you find the test reports for you in one place",
    description:
      "This app is to check or view Infections Disease Report of the patient as well as his/her relatives. Patient can view pdf of the test results using the app. You can use this app to check the status of  Disease Report.",
    image: toAbsoluteUrl(truetest),
    fullDescription: ["1st", "2nd", "3rd"]

    // link: "https://reactbootcamp.com",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Sanjeev Kumar",
    company: "Dozzbee",
    fullDescription: ""

  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Abhilesh Gupta",
    company: "Dozzbee",
  },
];

export const skills = [
  "Cross Platform App Development",
  "Flutter",
  "Dart",
  "Firebase",
  "React",
  "Material UI",
];
