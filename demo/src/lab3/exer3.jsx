import React from "react";

const Operations = () => {
    let a = 5;
    let b = 2;

    sum = (a, b) => {
       result = a + b;
       alert("Sum of two numbers is " + result);
    }

    product = (a, b) => {
        result = a * b;
        alert("Sum of two numbers is " + result);
    }

    difference = (a, b) => {
        result = a - b;
        alert("Sum of two numbers is " + result);
    }
    
    quotient = (a, b) => {
        result = a / b;
        alert("Sum of two numbers is " + result);
    }
    


    
    return (
        <>
        <button onClick={sum()}>Sum</button>
        </>
    )
}

export default Operations