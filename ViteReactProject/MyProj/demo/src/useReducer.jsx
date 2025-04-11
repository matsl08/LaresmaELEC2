import React, {useReducer } from "react";

const CounterOne = ()=> {
    const initialState = 0;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state + action.payload;
            
            case 'decrement':
                return state - action.payload;
            
            case 'reset':
                return initialState;

            default:
                throw new Error()
        }        
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        <div className="counter-container">
            <h2 className="counter-header">Counter</h2>
            <h1 className="counter-value">{state}</h1>

        <div className="button-group">
            <button onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrease</button> 
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button> 
            <button onClick={() => dispatch({type: 'increment', payload: 1})}>Increase</button> 
        </div>
        
        </div>
        </>
    )
}

export default CounterOne