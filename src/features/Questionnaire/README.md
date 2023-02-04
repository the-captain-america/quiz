# Questionnaire

```js
// const HTMLCompare = () => {
//   const onChange = () => {};
//   return (
//     <TextArea
//       variant="SECONDARY"
//       onChange={onChange}
//       height={'55px'}
//       mb={4}
//       mt={16}
//       value={`<span>Hello</span>`}
//     />
//   );
// };

// const ImportView = () => {
//   const onChange = () => {};
//   return (
//     <TextArea
//       variant="SECONDARY"
//       onChange={onChange}
//       height={'55px'}
//       mb={4}
//       mt={16}
//       value={`import { thing } from './some-other-location.js'`}
//     />
//   );
// };
// const ExportView = () => {
//   const onChange = () => {};
//   return (
//     <TextArea
//       variant="SECONDARY"
//       onChange={onChange}
//       height={'55px'}
//       mb={4}
//       mt={16}
//       value={`export { thing };`}
//     />
//   );
// };

// const VariableContainer = styled.div`
//   padding: 16px;
//   background: ${blue};
//   margin-top: 16px;
//   border-radius: 5px;
// `;

// const VariableView = () => {
//   return (
//     <VariableContainer>
//       {`const`} <strong>thing</strong> = "{'hello'}";
//     </VariableContainer>
//   );
// };

// const WhatIsBoolean = () => {
//   return (
//     <VariableContainer>
//       {`const`} <strong>WhatAmI</strong> = true;
//     </VariableContainer>
//   );
// };

// const FunctionDeclaration = () => {
//   return (
//     <VariableContainer>
//       <strong style={{ paddingRight: '4px' }}>function</strong>
//       {`makeMeHappy()`}
//       {`{
//         return 5;
//       }`}
//     </VariableContainer>
//   );
// };

// const FunctionExpression = () => {
//   return (
//     <VariableContainer>
//       <strong style={{ paddingRight: '4px' }}>
//         var makeMeACoffee = function()
//       </strong>
//       {`{
//         return 5;
//       }`}
//     </VariableContainer>
//   );
// };

// const FunctionInvocation = () => {
//   return (
//     <VariableContainer>
//       {`let`}
//       <span style={{ paddingLeft: '5px' }}>makeMeASandwich</span>
//       {`= function() {`}
//       <br />
//       <div>
//         <span
//           style={{ paddingLeft: '8px', fontWeight: 'normal' }}
//         >{`  return 'First you gotta buy some bread';`}</span>
//       </div>
//       {`}`}
//     </VariableContainer>
//   );
// };

// COMPARE: HTMLCompare,
// IMPORT: ImportView,
// EXPORT: ExportView,
// VARIABLE: VariableView,
// BOOLEAN: WhatIsBoolean,
// FUNCTION_DECLARATION: FunctionDeclaration,
// FUNCTION_EXPRESSION: FunctionExpression,
// FUNCTION_INVOCATION: FunctionInvocation,
```

````js
// const lookupById =
//   (id) =>
//   (items = []) => {
//     if (!id || id === -1) return 0;
//     const foundIndex = items.filter((item) => item.id === id);
//     const index = prop('sequence')(foundIndex);
//     return index || 0;
//   };```
````

```js
const alterAll = curry((state, items) => map(assoc('active', state), items));

const getCurrentIndex = (index) => {
  const enableAllData = alterAll(true, items);
  // console.log({ enableAllData });
  // const foundIndex = findIdBySequence(index)({ items });
  // go through each item up and until the index + 1 and apply the correct answer and set the result.
  // setActiveId(foundIndex);
};

useEffect(() => {
  getCurrentIndex(5);
  // eslint-disable-next-line
}, []);
```
