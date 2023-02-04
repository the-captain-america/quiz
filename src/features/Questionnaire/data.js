const questions = {
  'thing to ask': {
    id: '12323',
    label:
      'What element/elements are required inside of any basic html document/file?',
    code: [],
    options: [
      { id: 'a', value: '<div>' },
      { id: 'b', value: '<body>' },
      { id: 'c', value: '<html>' },
      { id: 'd', value: '<section>' },
      { id: 'e', value: '<span>' }
    ],
    answers: ['b', 'c'],
    value: 10,
    components: []
  },
  'What kind of code is it': {
    id: '38282ls',
    label: 'What kind of code is represented below?',
    code: [{ type: 'html', value: `<span>Hello</span>` }],
    options: [
      { id: 'a', value: 'jQuery' },
      { id: 'b', value: 'CSS' },
      { id: 'c', value: 'Javascript' },
      { id: 'd', value: 'HTML' },
      { id: 'e', value: 'class' }
    ],
    answers: ['d'],
    value: 5,
    components: []
  },
  'another thing to ask': {
    id: '291818188182ss',
    label: 'What does an import statement do inside a javascript file?',
    code: [{ type: 'js', value: `import { Thing } from './somewhere'; ` }],
    options: [
      {
        id: 'a',
        value:
          'The file that has this import will be able to use functionality from another place'
      },
      { id: 'b', value: 'It allows you to export the file.' },
      {
        id: 'c',
        value:
          'It means that the exported item will be available to be consumed inside another file'
      }
    ],
    answers: ['a'],
    value: 5,
    components: []
  },
  'another thing to for js but for export': {
    id: '29982lss828288282s',
    label: 'What does an export statement do?',
    code: [{ type: 'js', value: `export { Thing };` }],
    options: [
      {
        id: 'a',
        value: 'It exports.'
      },
      {
        id: 'b',
        value:
          'It is like a declaration there are thing(s) you want to be availble for usage (by name) outside of the file you are looking at.'
      },
      {
        id: 'c',
        value:
          'It means that the exported thing will not be exported from the file you are working on. '
      }
    ],
    answers: ['a', 'b'],
    value: 5,
    components: []
  },
  'show me the money - variables': {
    id: '29982ls8ssls',
    label: 'In the example below, what is the thing that is in bold?',
    code: [{ type: 'js', value: `const Greeting = 'Hello friend';` }],
    options: [
      {
        id: 'a',
        value: 'a function'
      },
      {
        id: 'b',
        value: 'a variable'
      },
      { id: 'c', value: 'a constant type variable' }
    ],
    answers: ['b', 'c'],
    value: 5,
    components: []
  },
  'Ok real questions now': {
    id: '2998ls822lsss92',
    label: 'How do I create a variable in javascript?',
    code: [],
    options: [
      {
        id: 'a',
        value: 'var thing = 1 + 1;',
        type: 'js'
      },
      {
        id: 'b',
        value: 'const thing + thing = 1 + 2;',
        type: 'js'
      },
      {
        id: 'c',
        value: 'letthing = 1 + 1 + 3;',
        type: 'js'
      },
      {
        id: 'd',
        value: 'var var = 1 + 1 + 3;',
        type: 'js'
      },
      {
        id: 'e',
        value: 'const thing = 1 * (5 + 3);',
        type: 'js'
      }
    ],
    answers: ['a', 'e'],
    value: 5,
    components: []
  },
  'more on javascript': {
    id: '227198ls822lsss92',
    label:
      "How do I find an element / tag with an id equal or set to the value of 'vinu' inside a HTML document / file?",
    code: [
      {
        type: 'html',
        value: `
    <html>
    <body>
    <div data-vinu id="vinu" />
    </body>
    </html>
    `
      }
    ],

    options: [
      {
        id: 'a',
        value: "document.getElementById('vinu');"
      },
      {
        id: 'b',
        value: "document.getElementByClassName('vinu')"
      },
      {
        id: 'c',
        value: `document.querySelector('[data-vinu]')`
      }
    ],
    answers: ['a', 'c'],
    value: 5,
    components: []
  },
  'more js plz. thanks': {
    id: '29027198ls822lsss92',
    code: [],
    label: 'What other properties exist on a <div> element?',
    options: [
      {
        id: 'a',
        value: 'onClick',
        type: 'none'
      },
      {
        id: 'b',
        value: 'id',
        type: 'none'
      },
      {
        id: 'c',
        value: 'class',
        type: 'none'
      },
      {
        id: 'd',
        value: 'style',
        type: 'none'
      }
    ],
    answers: ['a', 'b', 'c', 'd'],
    value: 5,
    components: []
  },
  'extra html questions': {
    id: '1234',
    label: 'What is the main difference between a <span> and a <div> ?',
    code: [],
    options: [
      {
        id: 'a',
        type: 'none',
        value:
          "A <span> takes up only the amount of space that it's inner content requires. "
      },
      {
        id: 'b',
        type: 'none',
        value:
          "A <div> is a 'block' elmement, which means it will stack underneath whatever element was before it, while a <span> is an 'inline' element."
      },
      {
        id: 'c',
        type: 'none',
        value:
          "A <div> is a 'inline' element, it is always red. A <span> is not a good choice when dealing with text."
      },
      {
        id: 'd',
        type: 'none',
        value: 'A <span> is hard to use, while a <div> is not.'
      }
    ],
    answers: ['a', 'b', 'c', 'd'],
    value: 5,
    components: []
  },
  'javascript 1.0': {
    id: 'js 1.0',
    label: 'What is the below an example of?',
    code: [{ type: 'js', value: `const WhatAmI = true;` }],
    options: [
      {
        id: 'a',
        value: 'A boolean (otherwise known as bool for short)',
        type: 'none'
      },
      {
        id: 'b',
        value: 'A function.',
        type: 'none'
      },
      {
        id: 'c',
        value: 'An object',
        type: 'none'
      },
      {
        id: 'd',
        value: 'An array',
        type: 'none'
      },
      {
        id: 'e',
        value: 'A string',
        type: 'none'
      }
    ],
    answers: ['a'],
    value: 5,
    components: []
  },
  'javascript 1.1': {
    id: 'js 1.1',
    label: 'What is a function declaration?',
    code: [
      {
        type: 'js',
        value: `function makeMeHappy() {
        return 5;
      }`
      }
    ],
    options: [
      {
        id: 'a',
        value: 'A function that is stored to / against a variable.',
        type: 'none'
      },
      {
        id: 'b',
        value:
          'A function that is defined without the use of a variable (const / var / let)',
        type: 'none'
      },
      {
        id: 'c',
        value: 'A function that returns a value.',
        type: 'none'
      },
      {
        id: 'd',
        value:
          'A function that is interpreted right away, and is loaded before any other code is run.',
        type: 'none'
      }
    ],
    answers: ['b', 'd'],
    value: 5,
    components: []
  },
  'javascript 1.2': {
    id: 'javascript 1.2',
    label: 'What is a function expression?',
    code: [
      {
        type: 'js',
        value: `var makeMeACoffee = function() {
        return 5;
      }`
      }
    ],
    options: [
      {
        id: 'a',
        value: 'A function that is stored to / against a variable.',
        type: 'none'
      },
      {
        id: 'b',
        value:
          'A function that can be used/called at another time within the code.',
        type: 'none'
      },
      {
        id: 'c',
        value:
          'A function that when/if called must be called by the variable/function name it was assigned when created.'
      },
      {
        id: 'd',
        value: 'A function that is called right away.',
        type: 'none'
      }
    ],
    answers: ['a', 'b', 'c'],
    value: 5,
    components: []
  },
  'javascript 1.3': {
    id: 'javascript 1.3',
    label: 'How do you use / call / invoke the below function?',
    code: [{ type: 'js', value: `const makeMeASandwich = () => {}` }],
    options: [
      {
        id: 'a',
        value: 'makeMeASandwich function();',
        type: 'js'
      },
      {
        id: 'b',
        value: 'makeMeASandwich;',
        type: 'js'
      },
      {
        id: 'c',
        value: 'makeMeASandwich();',
        type: 'js'
      },
      {
        id: 'd',
        value: 'const makeMeASandwich();',
        type: 'js'
      }
    ],
    answers: ['c'],
    value: 5,
    components: []
  },
  '55c80a51-469c-4002-9298-697ca8362119': {
    id: '55c80a51-469c-4002-9298-697ca8362119',
    label:
      ' When creating a javascript variable, what is the benefit of using const instead of var?',
    code: [
      {
        type: 'js',
        value:
          "const exampleVariable = 'hello world';\n\n// vs\n\nvar exampleThing = 'hello thing';"
      }
    ],
    options: [
      {
        id: 'a',
        value:
          'When using a constant type of variable, it means that the value that the variable is assigned to cannot cannot be accidentally changed later on in the code'
      },
      {
        id: 'b',
        value:
          'The code will stop working if a  variable type using var is used later in the code'
      }
    ],
    answers: ['a'],
    value: 10,
    components: []
  },
  'f728f83d-d390-411a-a0b7-399ffabcdc45': {
    id: 'f728f83d-d390-411a-a0b7-399ffabcdc45',
    label: 'What two elements / tags are very similar to each other?',
    code: [
      {
        type: 'html',
        value: '<><div>Hello</div><section>This is a section</section></>'
      }
    ],
    options: [
      { id: 'a', value: '<div> and <section> are very simliar' },
      { id: 'b', value: '<div> and <span> are very similar' },
      { id: 'c', value: '<span> and <p> are very simliar' },
      { id: 'd', value: '<html> and <body> are very similar' }
    ],
    answers: ['a'],
    value: 10,
    components: []
  },
  'be9f4692-2d94-4855-96e8-36be4c670f13': {
    id: 'be9f4692-2d94-4855-96e8-36be4c670f13',
    label:
      'What tag is required in order to make use of a stylesheet inside your website?',
    code: [{ type: 'html', value: '' }],
    options: [
      { id: 'a', value: 'The <link /> tag is required for this.' },
      { id: 'b', value: 'The <script /> tag is required for this.' }
    ],
    answers: ['a'],
    value: 10,
    components: []
  },
  '9dd3d386-49b1-408c-a1ff-d7b6d82a8997': {
    id: '9dd3d386-49b1-408c-a1ff-d7b6d82a8997',
    label:
      'What two attributes are needed on a <link /> in order to get access to an external stylesheet?',
    code: [{ type: 'html', value: '<link />' }],
    options: [
      { id: 'a', value: 'The "id" attribute is required for this' },
      { id: 'b', value: 'The "class" is required for this' },
      { id: 'c', value: 'The "href" is required for this' },
      { id: 'd', value: 'The "rel" attribute is required for this' }
    ],
    answers: ['c', 'd'],
    value: 10,
    components: []
  },
  'javascript 1.4': {
    id: 'javascript 1.4',
    label: 'What does it mean to hoist a function? ',
    code: [{ type: 'js', value: `` }],
    options: [
      {
        id: 'a',
        value:
          'Hoisting refers to the process where the interpreter (browser usually) appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.'
      },
      {
        id: 'b',
        value: 'Moving constant variable definitions to the top of a file.'
      }
    ],
    answers: ['a', 'b'],
    value: 5,
    components: []
  },
  'c9ced831-5b2e-405d-8e27-b7a65039a0d3': {
    id: 'c9ced831-5b2e-405d-8e27-b7a65039a0d3',
    label: 'What does this function below do if called?',
    code: [
      { type: 'js', value: 'const someFunction = () => {\n  return 10;\n}' }
    ],
    options: [
      { id: 'a', value: 'This function console logs 10 then quits' },
      {
        id: 'b',
        value: 'This function console logs the result of 10 and then quits'
      },
      { id: 'c', value: 'This function returns 10 and then quits' }
    ],
    answers: ['c'],
    value: 10,
    components: []
  },
  '96304680-d3f3-472c-aeba-4520eda75b17': {
    id: '96304680-d3f3-472c-aeba-4520eda75b17',
    label: 'What will be printed to the console when the below code is read?',
    code: [
      {
        type: 'js',
        value:
          "const doFunction = () => {\n  const findElement = document.getElementById('thing');\n  console.log(findElement)\n}"
      }
    ],
    options: [
      { id: 'a', value: 'Nothing will be printed to the console.' },
      {
        id: 'b',
        value:
          'The element with an id of "thing" will be printed to the console.'
      }
    ],
    answers: ['a'],
    value: 10,
    components: []
  },
  '7a4aa0d8-727a-46cd-8db4-e35b2238e9f4': {
    id: '7a4aa0d8-727a-46cd-8db4-e35b2238e9f4',
    label:
      "What is the value / result of the variable 'combo'  when these two functions are called and then added together?",
    code: [
      {
        type: 'js',
        value:
          'const someFunction = () => {\n  return 5\n}\n\nconst someOtherFunction = () => {\n  return 6\n}\n\nconst combo = someFunction() + someOtherFunction();\n\n'
      }
    ],
    options: [
      { id: 'a', value: '12' },
      { id: 'b', value: 'Nothing' },
      { id: 'c', value: 'undefined' },
      { id: 'd', value: '11' }
    ],
    answers: ['d'],
    value: 10,
    components: []
  },
  '4b3e2744-35ad-4567-bb6b-4db048f2b9c1': {
    id: '4b3e2744-35ad-4567-bb6b-4db048f2b9c1',
    label: 'What is the benefit of immutability?',
    code: [{ type: 'js', value: '' }],
    options: [
      {
        id: 'a',
        value: 'To avoid problems like race conditions and unexpected changes'
      },
      { id: 'b', value: 'To control the changes we want to see changed' },
      { id: 'c', value: 'It makes it easier to break the code' },
      { id: 'd', value: 'It is not good to use immutable code' }
    ],
    answers: ['a', 'b'],
    value: 10,
    components: []
  }
};

export { questions };
