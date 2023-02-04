## Javascript End to End Comprehensive Example

```js
const End2EndExample = () => {
  const airlines = {
    tigerAir: {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXs66Bxw1MAO2X63pWTT3SQsohw1ZqSNQAqa3A0SXs&s',
      crew: ['Kari', 'Sonja', 'Philip'],
      arrivalTimes: ['8:00am', '10:00pm'],
      feulType: 'Jet fuel'
    },
    jetstart: {
      image:
        'https://content.presspage.com/uploads/1183/1920_plane3-939255.jpg?10000',
      crew: ['Vinu', 'James', 'Ron'],
      arrivalTimes: ['2:00am', '7:00pm'],
      feulType: 'Special elite jet fuel'
    }
  };

  const renderCrew = (stuff) => {
    return stuff.map((crewMemeber) => <span>{crewMemeber}</span>);
  };
  const arrivalTimes = (times) => {
    return times.map((crewMemeber) => <span>{crewMemeber}</span>);
  };

  const renderResult = () => {
    const sutffToShow = Object.values(airlines);
    return sutffToShow.map((item) => (
      <div
        style={{
          background: 'blue',
          border: '2px soild black',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img src={item.image} style={{ width: '100px' }} />
        <span>{renderCrew(item.crew)}</span>
        <span>{arrivalTimes(item.arrivalTimes)}</span>
        <span>Fuel Type: {item.feulType}</span>
      </div>
    ));
  };

  return <div>{renderResult()}</div>;
};
```
