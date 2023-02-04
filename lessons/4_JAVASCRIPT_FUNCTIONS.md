```js
// understanding objects (object literals) in javascript

// const application = {
//   name: 'first app',
//   version: '1.0',
//   newObject: {
//     name: 'New Object Inside the first object',
//     version: '1.1',
//     someFunction: (name) => {
//       console.log('hi', name)
//     }
//   }
// }

// const myCar = {
//   model: 'Mitsubishi',
//   drive: () => {
//     console.log('drive')
//   },
//   driver: (name, age) => {
//     console.log('The driver is:',name, 'and my age is:', age)
//   },

// }

// console.log(myCar.driver('Philip', 27))

const Gym = {
  train: (musclegroup) => {
    console.log(musclegroup);
  },
  welcome: 'Hi there'
};

console.log(Gym.welcome);
console.log(Gym.train('Arms'));
```

```js
// Question: functions usually return something... What does this mean?

/* 
  - It means that the function might recieve a value 
  - (from outside itself - for example an argument which was passed into the function) 
  - this value might be "returned" from the function which recieved the argument.   
  */

// Example

const functionThing = () => {
  return 'hi';
};

functionThing(); // this returns 'hi'

const functionThingWithArgument = (hi) => {
  return hi;
};

functionThingWithArgument('hi'); // this returns ??? 'hi'

const worldFunction = (world) => {
  return world;
};

worldFunction('hi world'); // 'hi world'

// argument
const someFunction = (something) => {
  // return ==== is the same as take the stuff inside the parenthesis / or inside the function and make this
  // function hand over that "thing" to something else (that "something else" can be another function).

  return something; // undefined
};

someFunction();

const thefunction = (name) => {
  return 'wakeup ' + name;
};

console.log(thefunction('philip'));

const tellMeWhatdoyoulike = () => {
  return 'I like going to the gym ';
};

tellMeWhatdoyoulike(); // 'i like the gym'

const myGymBuddy = (buddy) => {
  return 'with my boyfriend ' + buddy;
};

console.log(tellMeWhatdoyoulike() + myGymBuddy('philip'));
```
