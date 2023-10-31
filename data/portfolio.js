const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Abdullah Malik',
  role: 'Web Developer',
  company: 'Stecker Inc',
  description: [
    "I am a creative computing enthusiast who has just completed my BSc in Creative Computing. With a passion for pushing the boundaries of web development and a penchant for turning innovative ideas into digital realities, I bring a unique blend of creativity and technical expertise to the table. My journey in the world of technology has been a thrilling adventure, and I'm excited to invite you to explore it with me through my portfolio. Join me as we dive into a realm where code and creativity converge, shaping the future one pixel at a time.",
  ],
  CV: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
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
