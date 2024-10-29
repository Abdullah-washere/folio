const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Abdullah Malik',
  role: 'E-Commerce & Website Specialist ',
  company: 'Casinetto',
  description: [
    "I’m a creative computing enthusiast with a BSc in Creative Computing, driven by a commitment to crafting seamless digital experiences and a passion for building dynamic, user-friendly applications using React. My journey in web development is all about pushing the boundaries of what’s possible with React and transforming innovative ideas into reality. From performance optimization to interactive UI design, each project reflects my dedication to merging functionality with aesthetic precision.",
  ],
  resume: 'https://drive.google.com/file/d/1uddei4M3D-j3zMVs183FIBXNUKDmk0Ee/view?usp=sharing',

  social: {
    linkedin: 'https://www.linkedin.com/in/abdmal',
    github: 'https://github.com',
  },
  greetingEmoji: '👋',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
  thumbnail: 'images/proj1.png',
  name: 'Web Development (Stecker Inc)',
  description: [
    "Led the development of the myrio.io website for Stecker Inc as an independent contractor, utilizing React to create a highly responsive and interactive site from scratch. I designed a modular UI/UX system that optimized performance across 10 pages, incorporating reusable React components and hooks for a seamless user experience.",
    "Implemented a dynamic color scheme and integrated React animations to reflect Stecker Inc's vibrant brand identity.",
    "The site features cross-browser optimization, newsletter integration with Mailchimp API, and advanced SEO practices, resulting in enhanced site traffic, increased subscriber outreach, and improved overall user engagement."
  ],
  stack: ['React', 'SCSS', 'JavaScript', 'React Router', 'React Hook Form', 'Mailchimp API', 'SEO Enhancements'],
  sourceCode: 'https://myrio.io/',
  livePreview: 'https://myrio.io/',
},


{
thumbnail: 'images/proj1face.png',
name: 'Web Development (Stecker Inc)',
description: [
  "Full-Stack React Development: Built the entire website from the ground up using React for front-end functionalities and Node.js for back-end services.",
  "User-Centric Design: Crafted an engaging, intuitive interface by employing React animations, state management with Redux, and optimized navigation.",
  "Responsive Design with React: Ensured seamless performance and adaptability across devices with a responsive layout, utilizing styled-components for modular design.",
],
stack: ['React', 'Redux', 'Styled-Components', 'Node.js', 'Express', 'MongoDB'],
sourceCode: 'https://myrio.io/',
livePreview: 'https://myrio.io/',
},



  {
    thumbnail: 'images/spon1.png',
    name: 'Roosevelt University Hackathon Sponsor Platform',
    description: [
      "In addition to client website work, I spearheaded development for a custom site enabling sponsor signups and payments for the 2022 hackathon event held at Roosevelt University Chicago.",
      "As the lead UI/UX designer and front-end developer, I crafted this targeted site from scratch to facilitate the event organizers’ sponsor outreach initiatives. My responsibilities spanned designing an appealing interface to match their brand aesthetic, constructing the site architecture, implementing registration/payment functionality with Stripe, and ensuring a streamlined sponsor signup experience across devices.",
      "Key solutions included crafting custom Stripe webhook payment integrations tailored to the university’s accounting needs, responsive layouts providing consistency across desktop and mobile, and automated email confirmations to new sponsors. The site played a pivotal role in sponsorship fulfillment leading up to the hackathon.",
    ],
    stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'SQL'],
    sourceCode: 'https://myrio.io/sponsor.html',
    livePreview: 'https://myrio.io/sponsor.html',
  },
  {
    thumbnail: 'images/stripe1.png',
    name: 'Roosevelt University Hackathon Sponsor Platform',
    description: [
  "Custom Sponsorship Platform: Engineered a tailored sponsorship platform to facilitate seamless contributions from sponsors.",
  "Payment Gateway Integration: Integrated Stripe.com as the payment gateway, providing a secure and efficient method for sponsors to make financial contributions.",
  "User-Friendly Interface: Designed an intuitive and user-friendly interface for sponsors to navigate and complete the sponsorship process effortlessly.",
  "Personalized Payment Workflow: Customized the payment workflow to align with the unique requirements of the Roosevelt University Hackathon.",
  "The success of the sponsorship platform played a crucial role in securing funding for the Roosevelt University Hackathon. The platform's secure and user-friendly design, coupled with the seamless payment gateway integration, contributed to the overall success of the event.",
],
stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'SQL'],
sourceCode: 'https://myrio.io/sponsor.html',
livePreview: 'https://myrio.io/sponsor.html',
  },



  {
  thumbnail: 'images/bb.jpeg',
  name: 'Breaking Bad Characters App',
  description: [
    'Are you a fan of Breaking Bad and a Web Development enthusiast? This mobile app brings characters from the series to life with a dynamic, React Native experience. It’s built to provide seamless interaction and quick access to detailed information on each character from Breaking Bad.',
  ],
  stack: ['React Native', 'JavaScript', 'Breaking Bad API'],
  features: [
    'Interactive UI built with React Native components.',
    'Data fetched in real-time using the Breaking Bad API.',
    'Optimized navigation and state management with React Native hooks for a responsive experience.'
  ],
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
},



{
thumbnail: 'images/nertf.png',
name: 'Netflix Clone',
description: [
  'A fully-responsive Netflix clone built using React, simulating the user experience of Netflix with dynamic content and a sleek UI. This project was bootstrapped with Create React App and uses Firebase for deployment.',
],
stack: ['React', 'JavaScript', 'CSS', 'Firebase'],
features: [
  'Bootstrapped with Create React App for a quick and structured setup.',
  'Supports local development with scripts such as npm start, npm test, and npm run build for building and testing.',
  'Live deployment on Firebase, available for testing [here](https://netflix-1ad95.web.app/).',
  'Customizable build process, with options to eject for complete control over configuration and dependencies.'
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},


{
thumbnail: 'images/ewap.png',
name: 'E-commerce WebApp',
description: [
  'A responsive and user-friendly E-commerce WebApp built with React, providing a seamless shopping experience with dynamic product listings, an interactive shopping cart, and location-based store information using Google Maps API. This project was bootstrapped with Create React App and enhanced using the clean-cra template for a structured, lightweight setup.'
],
stack: ['React', 'JavaScript', 'CSS', 'Google Maps API', 'clean-cra Template'],
features: [
  'Bootstrapped with Create React App, leveraging the clean-cra template for optimized setup.',
  'Dynamic product listings and interactive shopping cart functionality.',
  'Google Maps API integration to provide location-based store information and directions.',
  'Responsive design ensuring accessibility and usability across devices.',
  'Structured codebase suitable for scaling and customization, with clean, minimal configuration.',
],
sourceCode: 'https://github.com',  // Placeholder link, replace with actual repository link
livePreview: 'https://github.com',  // Placeholder link, replace with actual preview link
},


{
thumbnail: 'images/rand.jpeg',
name: 'RandomUser API Explorer',
description: [
  'An app built with React to display random user profiles. It integrates the RandomUser API to fetch user data and allows filtering and sorting options to explore various user attributes dynamically.'
],
stack: ['React', 'JavaScript', 'CSS', 'RandomUser API'],
features: [
  'Fetches random user profiles and displays them in a user-friendly layout.',
  'Includes sorting and filtering options to explore user data by attributes.',
  'Responsive design for optimal viewing on various devices.',
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},




{
thumbnail: 'images/ojb.png',
name: 'Job Portal',
description: [
  'A comprehensive job portal application built with React, offering job listings, search functionality, and application tracking. This app simplifies the job search process and makes finding the right position easier for users.'
],
stack: ['React', 'JavaScript', 'CSS', 'REST API'],
features: [
  'Job listing functionality with search and filter capabilities.',
  'Interactive application tracking to monitor job application statuses.',
  'Optimized for responsive browsing and streamlined user experience.',
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},




{
thumbnail: 'images/ojb.png',
name: 'PokeAPI Explorer',
description: [
  'A React application that integrates with the PokeAPI to bring users details about various Pokémon. This app provides real-time data fetching and a sleek design to explore the world of Pokémon in an interactive way.'
],
stack: ['React', 'JavaScript', 'CSS', 'PokeAPI'],
features: [
  'Real-time Pokémon data fetching with details on stats, abilities, and types.',
  'Filter and search functionality for quick access to specific Pokémon.',
  'User-friendly design optimized for mobile and desktop viewing.',
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},






  {
  thumbnail: 'images/ojb.png',
  name: 'IMDb Clone',
  description: [
    'A clone of the IMDb platform, built using React to display movie and TV show data with ratings, descriptions, and trailers. It offers a comprehensive and engaging experience for film enthusiasts.'
  ],
  stack: ['React', 'JavaScript', 'CSS', 'Movie Database API'],
  features: [
    'Detailed movie and TV show pages with ratings, descriptions, and trailers.',
    'Search and filter options for easy navigation of large data sets.',
    'Optimized performance and responsive design for all device sizes.',
  ],
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
},




{
thumbnail: 'images/ojb.png',
name: 'Game of Thrones Character Explorer',
description: [
  'A React app that showcases characters from Game of Thrones, pulling data from a third-party API. Users can browse character details, alliances, and house information in an interactive layout.'
],
stack: ['React', 'JavaScript', 'CSS', 'Game of Thrones API'],
features: [
  'Character bios, alliances, and house information with intuitive navigation.',
  'Search and filtering capabilities to quickly find specific characters.',
  'Responsive design for smooth browsing on all device types.',
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},




{
thumbnail: 'images/money.png',
name: 'Expense Tracker',
description: [
  'A React-based expense tracking application that helps users manage and categorize their expenses. With a clean UI and detailed financial summaries, it simplifies budgeting and expense management.'
],
stack: ['React', 'JavaScript', 'CSS', 'Local Storage'],
features: [
  'Add, delete, and categorize expenses with real-time updates.',
  'Persistent storage using Local Storage for user data.',
  'Interactive charts and summaries to visualize spending patterns.',
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},




{
thumbnail: 'images/recipe.jpeg',
name: 'Recipe App',
description: [
  'An interactive recipe app that lets users explore a variety of recipes, search by ingredients, and view step-by-step cooking instructions. Built with React and integrated with a recipe API.'
],
stack: ['React', 'JavaScript', 'CSS', 'Recipe API'],
features: [
  'Search for recipes by ingredient, cuisine, or name.',
  'Detailed ingredient lists and cooking instructions for each recipe.',
  'Responsive, mobile-friendly layout for a smooth experience.',
],
sourceCode: 'https://github.com',
livePreview: 'https://github.com',
},




{
  thumbnail: 'images/todo.png',
  name: 'Todo App with Local Storage',
  description: [
    'A simple yet effective Todo App created with React. This app uses Local Storage to retain task data, ensuring users can track their tasks easily across sessions.'
  ],
  stack: ['React', 'JavaScript', 'CSS', 'Local Storage'],
  features: [
    'Add, delete, and mark tasks as complete with ease.',
    'Tasks are saved in Local Storage, preserving data across sessions.',
    'Minimalistic design with a focus on usability and accessibility.',
  ],
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
},



{
  thumbnail: 'images/weather.png',
  name: 'Weather App',
  description: [
    'A React-based Weather App that retrieves real-time weather data from an API. Users can search for weather conditions by city and see details such as temperature, humidity, and weather descriptions.'
  ],
  stack: ['React', 'JavaScript', 'CSS', 'Weather API'],
  features: [
    'Real-time weather data retrieval with search functionality by city.',
    'Detailed weather conditions, including temperature, humidity, and descriptions.',
    'Responsive and easy-to-navigate design for all device types.',
  ],
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
},



{
  thumbnail: 'images/timelapse.png',
  name: 'Timelapse',
  description: [
"I craft compelling timelapse videos, capturing the essence of moments and subjects through visually concise storytelling."
],

  stack: ['Video Editing', 'Videography', 'Storytelling'],
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
},

{
  thumbnail: 'images/greenmissle.png',
  name: 'Digital Story Experience',
  description: [

"I ventured into digital storytelling, creating and editing my first video. This journey ignited my passion for visual storytelling and honed my video production skills.",
  ],
  stack: ['SASS', 'TypeScript', 'React'],
  sourceCode: 'https://github.com',
  livePreview: 'https://github.com',
},

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'SQL',
  'Canva',
  'SASS',
  'Figma',
  'Photoshop',
  'Unity',
  'Twine',
  'AI',
  'Canvas',
  'Arduino',
  'Data Visualisation',
  'UI/UX',
  'App Dev',
  'Machine Learning',
  'Cyber Security',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'asualeheen@yahoo.com',
}

export { about, projects, skills, contact }
