import { useState } from "react";

const DisplayResult = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSubmit = () => {
    let sum =  Number(num1) + Number(num2);
    alert(`The sum of two numbers is ${sum}`);
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <p>Enter 1st num: <input onChange={(num1) => setNum1(num1.target.value)}></input></p>
        <p>Enter 2nd num: <input onChange={(num2) => setNum2(num2.target.value)}></input></p>
        <p><button type="submit">Get Sum!</button></p>
      </form>
    </div>
    </>
  )
}
export default DisplayResult