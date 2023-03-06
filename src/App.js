import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimals() {
  const animals=['bird', 'cat', 'cow', 'dog', 'alligator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App () {
  const[animals, setAnimals] = useState([]);

  const handleClick = () => {
    //never update state directly
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>;
  });

  //write a callback function inline or before to handle the click and call it.
  //<button onClick={() =>console.log('Button clicked!')}>

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
      
    </div>
  );

}

export default App;