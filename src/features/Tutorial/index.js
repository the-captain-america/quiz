// import React, { useEffect, useState } from 'react';
// import './mario.css';
// import Mario from './mario.png';

// const useKeyPress = function (targetKey) {
//   const [keyPressed, setKeyPressed] = useState(false);

//   function downHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(true);
//     }
//   }

//   const upHandler = ({ key }) => {
//     if (key === targetKey) {
//       setKeyPressed(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('keydown', downHandler);
//     window.addEventListener('keyup', upHandler);

//     return () => {
//       window.removeEventListener('keydown', downHandler);
//       window.removeEventListener('keyup', upHandler);
//     };
//   });

//   return keyPressed;
// };

// const styleBackground = {
//   background: '#5e99ff',
//   width: '500px',
//   height: '346px',
//   position: 'relative'
// };

// const styleCloudRight = {
//   background: 'white',
//   width: '40px',
//   height: '20px',
//   borderRadius: '50%',
//   position: 'absolute',
//   right: '-10px',
//   top: '10px'
// };

// const styleCloudTop = {
//   background: 'white',
//   width: '40px',
//   height: '20px',
//   borderRadius: '50%',
//   position: 'absolute'
// };

// const styleCloudLeft = {
//   background: 'white',
//   width: '40px',
//   height: '20px',
//   borderRadius: '50%',
//   position: 'absolute',
//   left: '-10px',
//   top: '10px'
// };

// const styleGame = {
//   overflow: 'hidden'
// };

// const styleCloudGroup = {
//   position: 'relative',
//   width: '200px',
//   height: '30px'
// };

// const styleGround = {
//   background: '#dd4401',
//   width: '100%',
//   height: '80px',
//   position: 'absolute',
//   bottom: 0,
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap'
// };

// const innerGround = {
//   height: '100%',
//   width: '10px',
//   position: 'absolute',
//   right: '0px',
//   top: 0,
//   borderRight: '2px solid #d59c8b'
// };

// const innerGroundTop = {
//   height: '10px',
//   width: '100%',
//   position: 'absolute',
//   right: 0,
//   top: 0,
//   borderTop: '2px solid #d59c8b'
// };

// const styleGroundBlock = {
//   borderRight: '2px solid #580100',
//   borderBottom: '2px solid #580100',
//   height: '30px',
//   width: '30px',
//   position: 'relative'
// };

// const styleMountain = {
//   width: '50px',
//   height: '72px',
//   background: '#05b002',
//   position: 'absolute',
//   bottom: '80px',
//   left: '20px',
//   borderTopRightRadius: '80px',
//   borderTopLeftRadius: '30px',
//   borderTop: '2px solid black',
//   borderRight: '2px solid black',
//   borderLeft: '2px solid black'
// };

// const styleTubeTop = {
//   width: '64px',
//   height: '20px',
//   background: 'green',
//   position: 'absolute',
//   border: '2px solid black',
//   top: '-2px',
//   right: '50%',
//   transform: 'translateX(50%)',
//   display: 'flex'
// };

// const styleTubeTopRight = {
//   width: '20px',
//   height: '20px',
//   background: '#89e102',
//   position: 'relative'
// };

// const styleTubeTopCenter = {
//   width: '20px',
//   height: '20px',
//   background: '#01b100',
//   position: 'relative'
// };

// const styleTubeBase = {
//   width: '60px',
//   height: '60px',
//   background: '#05b002',
//   position: 'absolute',
//   border: '2px solid black',
//   borderBottom: 'none',
//   right: 0,
//   bottom: 0,
//   display: 'flex'
// };

// const styleTubeBaseCenter = {
//   width: '20px',
//   height: '100%',
//   background: '#01b100',
//   position: 'relative'
// };
// const styleTubeBaseLeft = {
//   width: '20px',
//   height: '100%',
//   background: '#89e102',
//   position: 'relative'
// };

// const styleTubeBaseRight = {
//   width: '20px',
//   height: '100%',
//   background: 'green',
//   position: 'relative'
// };

// const styleTubeContainer = {
//   position: 'absolute',
//   bottom: '80px',
//   left: '300px'
// };

// const styleMario = {
//   width: '40px',
//   position: 'absolute',
//   bottom: '80px',
//   zIndex: 1,
//   left: '190px'
// };

// const Cloud = () => (
//   <div style={styleCloudGroup} className="cloud">
//     <div style={styleCloudTop}>
//       <div style={styleCloudRight}></div>
//       <div style={styleCloudLeft}></div>
//     </div>
//   </div>
// );

// const Tube = () => {
//   return (
//     <div style={styleTubeContainer}>
//       <div style={styleTubeBase}>
//         <div style={styleTubeBaseLeft} />
//         <div style={styleTubeBaseCenter} />
//         <div style={styleTubeBaseRight} />
//         <div style={styleTubeTop}>
//           <div style={styleTubeTopRight} />
//           <div style={styleTubeTopCenter} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Mountain = ({ children }) => {
//   return <div style={styleMountain}></div>;
// };

// const Background = ({ children }) => {
//   return <div style={styleBackground}>{children}</div>;
// };

// const Game = ({ children }) => {
//   return <div style={styleGame}>{children}</div>;
// };

// const Ground = ({ children }) => {
//   return <div style={styleGround}>{children}</div>;
// };

// const Tutorial = () => {
//   const renderGround = () => {
//     const items = [...Array(30).keys()].map((i) => i + 1);
//     return items.map((thing) => (
//       <div key={thing} style={styleGroundBlock}>
//         <div style={innerGroundTop} />
//         <div style={innerGround} />
//       </div>
//     ));
//   };

//   // useEffect(() => {

//   //   document.addEventListener('keydown', (e) => {
//   //     // e = e || window.event;
//   //     if (e.keyCode === 38) {
//   //       console.log('up arrow pressed')
//   //     } else if (e.keyCode === 40) {
//   //       console.log('down arrow pressed')
//   //     } else if (e.keyCode === 37) {
//   //       console.log('left arrow pressed')
//   //     } else if (e.keyCode === 39) {
//   //       console.log('right arrow pressed')
//   //     }

//   //   }

//   // }, []);

//   // const checkKey = (e) => {
//   //   console.log(e);
//   //   let event = e || window.event;

//   //   const { keyCode } = event;

//   //   console.log(keyCode);

//   //   if (keyCode == '38') {
//   //     // up arrow
//   //     console.log(keyCode);
//   //   } else if (keyCode == '40') {
//   //     // down arrow
//   //     console.log(keyCode);
//   //   } else if (keyCode == '37') {
//   //     // left arrow
//   //     console.log(keyCode);
//   //   } else if (keyCode == '39') {
//   //     // right arrow
//   //     console.log(keyCode);
//   //   }
//   // };

//   //   const callback = {
//   //     "ArrowLeft"  : leftHandler,
//   //     "ArrowRight" : rightHandler,
//   //     "ArrowUp"    : upHandler,
//   //     "ArrowDown"  : downHandler,
//   // }[event.key]
//   // callback?.()

//   const arrowRight = useKeyPress('ArrowRight');
//   const arrowUp = useKeyPress('ArrowUp');
//   const arrowLeft = useKeyPress('ArrowLeft');

//   console.log({ arrowLeft });
//   const [marioPos, setMarioPos] = useState(180);
//   useEffect(() => {
//     if (arrowLeft) {
//       console.log('arrow left');
//       setMarioPos((state) => state - 10);
//     }
//     if (arrowRight) {
//       console.log('arrow left');
//       setMarioPos((state) => state + 10);
//     }
//   }, [arrowRight, arrowLeft]);
//   return (
//     <Game>
//       <Background>
//         <Cloud />
//         <img style={{ ...styleMario, left: `${marioPos}px` }} src={Mario} />
//         <Ground>
//           <Mountain />
//           <Tube />
//           {renderGround()}
//         </Ground>
//       </Background>
//     </Game>
//   );
// };

// export { Tutorial };

// const somethingProtected = () => {
//   // function body
//   const thing = {
//     stationary: 'Pencil',
//     furniture: 'Chair'
//   }; // its an empty object
// string
// boolean --> true / false
// object {}
// array []
// undefined
// null -- this means empty
// () => {} -- function
//   return thing;
// };

// const someVariable = somethingProtected().furniture;

import React from 'react';
import styled from 'styled-components';

const Wall = styled.div`
  width: 800px;
  background: white;
  height: 200px;
  border-bottom: 2px solid grey;
`;
const Door = styled.div`
  width: 100px;
  height: 200px;
  transition: all 0.2s ease-in-out;
  left: 100px;
  background-color: brown;
  position: relative;
  bottom: 0;
  border-right: 6px solid black;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-50);
    border-radius: 50%;
    background: silver;
    width: 20px;
    height: 20px;
  }
`;

const Tutorial = () => {
  // thefunction -->
  const giveMeTaskList = () => {
    const taskList = {
      isLampOn: true,
      isDoorClosed: false
    };

    return taskList;
  };

  const theList = giveMeTaskList(); //  { isLampOn: true, isDoorClosed: false }

  const turnOffLamp = () => {
    console.log('this should turn off the lamp');
    console.log(theList);
  }; // { isLampOn: false }

  turnOffLamp();

  const shutTheDoor = () => {}; // { isDoorClosed: true }

  const [stateOfDoor, setStateOfDoor] = React.useState(false);
  const onOpenDoor = () => {
    console.log('open the door');
    setStateOfDoor(!stateOfDoor);
  };
  return (
    <div>
      <Wall>
        {stateOfDoor && <Door style={{ width: '100px' }} />}
        {!stateOfDoor && <Door style={{ width: '200px' }} />}
        <button onClick={onOpenDoor}>Open / Close Door</button>
      </Wall>
    </div>
  );
};

export { Tutorial };

// Javascript and "Scoping"

// const weWantToGetAccessToThis = () => {
//     return 'we have a result!';
//   };

// const someFunction = () => {
//   return 'Hello world!'
// }

// const result = someFunction(); // Hello world!

// const telescopeB = () => {
//   return '';
// };

// const telescopeA = () => {
//   // this is stuff inside telescopeA (no one has access unless we return a value from this function...)
//   return telescopeB();
// };

// console.log('What is this value? :::', telescopeB());
// console.log('telescopeA ::', telescopeA());

// const learnBlockScoping = () => {
//   // Stuff inside learnBlock
//   const countryNames = {
//     australia: 'Australia',
//     usa: 'USA'
//   };
//   // now we have the return statement
//   return countryNames;
// };
// // just above is the closing body bracket for the leanrblockScoping function

// const OfSomeFunction = learnBlockScoping();

// console.log();
