import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    
    const number = 56;
    const increaseCount = () =>{
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increaseCount}>Click me</button>
            <br />
            <p>Count: {count}</p>
            <h4>My Number:  {number}</h4>
            <h2>Count: {count}</h2>
            <p><small>Double count : {count * 2}</small></p>
        </div>
    );
};

export default Home;