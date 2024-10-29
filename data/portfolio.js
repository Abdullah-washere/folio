const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Abdullah Malik',
  role: 'E-Commerce & Website Specialist ',
  company: 'Casinetto',
  description: [
    "I’m a creative computing enthusiast with a BSc in Creative Computing, driven by a commitment to crafting seamless digital experiences and a passion for building dynamic, user-friendly applications using React. My journey in web development is all about pushing the boundaries of what’s possible with React and transforming innovative ideas into reality. From performance optimization to interactive UI design, each project reflects my dedication to merging functionality with aesthetic precision.",

  ],
  CV: 'https://drive.google.com/file/d/1uddei4M3D-j3zMVs183FIBXNUKDmk0Ee/view?usp=sharing',

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
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 1',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 2',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 3',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 4',
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
  'Figma',
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
