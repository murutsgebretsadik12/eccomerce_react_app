import { useReducer} from 'react';

const initialState = {count : 10};


function reducer(state, action){
    console.log(state.count);
    switch (action.type){
        case 'increment':
            return {count : state.count + 1};
        case 'decrement':
            return {count : state.count - 1}; 
        case 'reset':
            return initialState;
        default:
            throw new Error('Unknown action type')     
        
    }
}

function CounterComponent(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
export default CounterComponent;