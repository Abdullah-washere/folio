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

      "I led the development of the myrio.io website for Stecker Inc, showcasing expertise in web design and development. As an independent contractor, I revamped their digital presence with a responsive site from scratch, implementing a streamlined UI/UX design system for 10 pages.",
      "The bold color scheme and integrated graphics reflected Stecker Inc's energetic brand.",
      "The site features cross-browser optimization, new functionalities, a subscription email newsletter, and advanced SEO enhancements, resulting in improved site traffic, subscriber outreach, product sales, and overall user experience.",

    ],
    stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'SQL'],
    sourceCode: 'https://myrio.io/',
    livePreview: 'https://myrio.io/',
  },


  {
  thumbnail: 'images/proj1face.png',
  name: 'Web Development (Stecker Inc)',
  description: [
    "Full-Stack Development: Engineered the website from scratch, implementing both front-end and back-end functionalities.",
    "User Centric Design: Ensured an intuitive and engaging user experience through thoughtful design elements and navigation.",
    "Responsive Web Design: Developed a responsive design to ensure optimal viewing across various devices and screen sizes.",
  ],
  stack: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'SQL'],
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


  {
  thumbnail: 'images/placeholder-image.jpeg',
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
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 8',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 9',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 10',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 11',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 12',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 13',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 14',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 15',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 16',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 17',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 18',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
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
