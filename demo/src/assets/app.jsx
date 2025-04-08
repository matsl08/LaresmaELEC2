import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import car from './carr.gif'

console.log(car);
function App() {
  
  class Car{
    constructor(name, color){
      this.brand = name;
      this.color = color;
    }
  }
  const mycar = new Car("Isuzu", "Grey");
  
  const displayCarBrand =()=>{
    return mycar.brand;
  }

  const displayCarColor =()=>{
    return mycar.color;
  }
  
  
  return (
    <>
      <div className='container'>
        <h1>Hello World!</h1>
        <h2>I have an {displayCarBrand()} car and the color is <span>{displayCarColor()}</span></h2>
        <img src={car} alt="Car" />
      </div>
    </>
  )
}


export default App