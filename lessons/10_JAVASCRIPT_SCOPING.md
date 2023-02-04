# Javascript Scoping

### What is scoping?

1. Scoping is like looking through a telescope, focusing on what we want to see and nothing else. If we look through the "scope" we only can "see" what the "scope" shows us.
2. So in coding sense, this means that code is only "visible" if it is within the "scope".
3. What defines a scope? A scope is defined by the body of a function. ie: (the open curly bracket and closing bracket. Whatever is within those brackets is "scoped" - is what the "telescope is viewing". If you want to view something else, you would need your telescope looking somehwhere else.)

### Varaibles

Which should I use? const / let or var?

1. Use const as often as you can.
2. Using const is considered best practice
3. What does it do? The word "const" --> means "constant" so this variable type will "constantly be there". "It will constantly be the same thing no matter what."

```js
const someFunction = () => {
  const countryNames = {
    australia: () => {
      return 'Australia';
    },
    usa: 'USA',
    korea: 'Korea'
  };
  return countryNames;
};
const myCountry = someFunction().australia();

// Log the result to the console (see below)
console.log('result of variable named myCountry', myCountry);
```
