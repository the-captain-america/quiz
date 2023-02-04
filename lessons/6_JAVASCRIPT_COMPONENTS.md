### Component Example

```js
// Next we will create a component

const Blue = () => {
  return (
    <div
      style={{
        background: 'blue',
        position: 'absolute',
        padding: '64px',
        left: 0,
        top: 0,
        height: '100vh'
      }}
    >
      <h1>This is blue</h1>
      <div
        style={{
          background: 'red',
          padding: '0px'
        }}
      >
        The component blue
      </div>
    </div>
  );
};

const Orange = () => {
  return (
    <div
      id="Hi"
      onClick={() => console.log('philip is cool x2')}
      style={{
        backgroundColor: 'orange',
        position: 'absolute',
        right: 0,
        top: 0,
        padding: '24px',
        height: '100vh'
      }}
    >
      <span>Hello this is the stuff</span>
      <span>This is under the div</span>
    </div>
  );
};
```
