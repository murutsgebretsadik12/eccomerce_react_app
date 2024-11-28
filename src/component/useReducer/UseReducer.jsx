import { useState } from 'react';

function CounterComponent() {
  // Step 1: Create state to store the counter value
  const [count, setCount] = useState(10);

  // Step 2: Functions to change the state
  const increment = () => setCount(count + 1); // Add 1
  const decrement = () => setCount(count - 1); // Subtract 1
  const reset = () => setCount(10);  // Reset to initial value

  // Step 3: Render the component
  return (
    <div>
      <h1>Count: {count}</h1> {/* Display the counter */}
      <button onClick={increment}>Increment</button> {/* +1 */}
      <button onClick={decrement}>Decrement</button> {/* -1 */}
      <button onClick={reset}>Reset</button> {/* Reset */}
    </div>
  );
}

export default CounterComponent;
