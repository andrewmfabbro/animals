import { useState } from "react";

function App () {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  console.log('button clicked!')
  };

  //write a callback function inline or before to handle the click and call it.
  //<button onClick={() =>console.log('Button clicked!')}>

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        Number of animals: {count}
      </div>
    </div>
  );

}

export default App;