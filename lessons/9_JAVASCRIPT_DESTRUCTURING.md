### Destructuring in Javascript

### What is destructuring?

- When creating an object in javascript, we will have added keys and values. See below:

```js
const someObject = { key: 'value' };
```

- As the object becomes more complex, we might need to access certain properties (or 'keys') off of that object later. One way to do this is like so:

```js
console.log(someObject.key); // 'value'
```

- Now in this example we will add another key/value pair to our object with the new key being 'lover' and the value of 'Philip'. So this example now looks like this:

```js
const someObject = {
  key: 'value',
  lover: 'Philip'
};
```

- How might we access the value of the key `lover`? See below:

```js
console.log(someObject.lover);
```

- Now here comes the destructuring concept and use-case. Using the `dot` operator as seen in the above example (the dot representing the period inbetween `someObject` and `lover`) - this is an example of accessing a `property by point`. One of the disadvantages of accessing properties (or `keys`) this way, is that we can only access one property at a time. See example below:

```js
console.log(someObject.key, someObject.lover); // 'value', 'Philip'
```

- Note in the above example how we had to indicate the object we wanted to get a key from two times? See: `someObject.key` and `someObject.lover`.

- There is a better way to access properties off of an object literal. See below for destructuring:

```js
const someObject = {
  key: 'value',
  lover: 'Philip'
};

const { key, lover } = someObject;
console.log(key, lover); // 'value', 'Philip'
```

- In the above example, we assigned `key` and `lover` to a const variable. How did we do this? Well notice the equals sign just after the closing curly bracket? It is pointing to something, it's pointing to `someObject`. It is saying (in code sorta) Hey, look at this object that I'm pointing to, (btw it's named `someObject`), I want to get two properties off from that object and when I've collected them from that object I want to assign them to a constant.
- In the end, both `key` and `lover` became independent variables (constants) that are now able to be used, and in this case printed to the console as seen in the example.

```js
const someFunction = ({ children }) => {
  console.log('hi ', children);
};

const someObject = { children: 'children' };

someFunction(someObject);
```
