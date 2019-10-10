import React, { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);
    return (
        <p>Le compteur est à : {count}</p>
    );
}

export default Counter;