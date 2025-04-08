import { useState, useEffect } from "react";


const Timer = () => {
    const [count, setCount] = useState(0);

   useEffect (() => {
    setTimeout(()=> {
        setCount((count) => count + 1 );
    }, 5000);
   });

   return <h1>Battle loops {count} times!</h1>
}

export default Timer