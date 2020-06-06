const questions = [
  {
    id: 1,
    question:
      'Which attribute is used to specify that the script is executed when the page has finished parsing',
    answer: ['parse', 'async', 'defer', 'type'],
    description:
      'The defer attribute is a Boolean attribute. When present, it specifies that the script is executed when the page has finished parsing.',
    right: 'defer',
  },
  {
    id: 2,
    question: 'JavaScript can be written ?',
    answer: [
      'directly into JS file and included into HTML',
      'directly on the server page',
      'directly into HTML pages',
      'directly into the css file',
    ],
    description:
      'JavaScript files can be saved by .JS extension and can be included in the HTML files. Script tag along with src attribute is used to include the js files.',
    right: 'directly into JS file and included into HTML',
  },
  {
    id: 3,
    question:
      'Which of the operator is used to test if a particular property exists or not?',
    answer: ['in', 'exist', 'within', 'exists'],
    description:
      'The operator “in” tests whether a particular property exists or not. In operator is usually added in looping statements to traverse the array or the object.',
    right: 'in',
  },
  {
    id: 4,
    question: 'What is closure?',
    answer: [
      'Function objects',
      'Scope where function’s variables are resolved',
      'Both Function objects and Scope where function’s variables are resolved',
      'Function return value',
    ],
    description:
      'A combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure.',
    right:
      'Both Function objects and Scope where function’s variables are resolved',
  },
  {
    id: 5,
    question: 'What kind of scoping does JavaScript use?',
    answer: ['Literal', 'Lexical', 'Segmental', 'Sequential'],
    description:
      'Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.',
    right: 'Lexical',
  },
];

export default questions;
