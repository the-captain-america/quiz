### Import Export Javascript

```js
// So this is the place where I will create a "component" which is made using Javascript :)

// The first thing we will do is make sure to "import" the styles.css file.

// why did did I import? Ok so I want to add some styles (css) to this design once we have something inside the component. The styles.css file
// adds the nice looking font colors and stuff.

// Next (before we put anything inside this the component) we need to export it/them so that it might be available for any file to use it (initially, we would want the index.js file to use this component.)
const Stuff = '';

export { Stuff };
```

```js
const ComponentOne = () => {
  return <div>Component One</div>;
};

const ComponentTwo = () => {
  return <div>Component Two</div>;
};
```

export { VinuThing, ComponentTwo }
