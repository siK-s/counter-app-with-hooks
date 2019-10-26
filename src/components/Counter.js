import React, { useState } from 'react';
import './Counter.css';

function Counter () {
    const [count, setCount] = useState(0);

    function handleChange(e) {
        const newCount = parseInt(e.target.value);
        setCount(newCount);
    }

    return (
        <div className='counter'>
            <form>
                <label htmlFor="count">Compteur avec Hooks</label>
                <input type="text" id='count' name='count' value={count} onChange={handleChange} />
            </form>
            <p>Le compteur est à : <strong> {count} </strong></p>
            <button onClick={() => setCount(count - 1)}> - 1</button>
            <button onClick={() => setCount(count + 1)}> + 1</button>
        </div>
    );
}

export default Counter;