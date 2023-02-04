### StepBuilder

    - How this component works?

```.js
  const getClientHeight = () => {
    if (ref && ref.current) {
      return ref.current.clientHeight;
    }
    return 900;
  };

  const getHeight = getClientHeight();
```
