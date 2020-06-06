const questions = [
  {
    id: 1,
    question: 'What is ReactJS?',
    answer: [
      'Server-side Framework',
      'A Library for building interaction interfaces',
      'User-interface framework',
      'None of the above',
    ],
    description:
      'ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps',
    right: 'A Library for building interaction interfaces',
  },
  {
    id: 2,
    question: 'Lifecycle methods are mainly used ?',
    answer: [
      'To keep track of event history',
      'To enhance components',
      'To Free up resources',
      'none of the options',
    ],
    description:
      'UI component in a web browser, each of these takes birth, grows by getting updates and dies.The lifecycle methods are various methods which are invoked at different phases of the lifecycle of a component',
    right: 'To Free up resources',
  },
  {
    id: 3,
    question: 'React considers everything as ?',
    answer: ['User interface', 'elements', 'components', 'Objects'],
    description:
      'A React component is a bit of code that represents a piece of the page. Each component is a JavaScript function that returns a piece of code that represents a piece of a web page.',
    right: 'components',
  },
  {
    id: 4,
    question: ' Which of the following is true about RESTful web services ?',
    answer: [
      'Web services based on REST Architecture are known as RESTful web services',
      'Web services uses HTTP methods to implement the concept of REST architecture',
      ' Both of the above',
      'None of the above',
    ],
    description:
      'REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods',
    right:
      'Web services uses HTTP methods to implement the concept of REST architecture',
  },
  {
    id: 5,
    question: 'What are the key features of Node.js ?',
    answer: [
      'Real time Data intensive',
      'A language Highly scalable servers for Web Applications',
      'All of the above',
      'Builds fast and scalable network Applications',
    ],
    description:
      "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    right: 'Builds fast and scalable network Applications',
  },
]

export default questions
