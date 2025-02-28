'use client';

import { useState } from 'react';

export default function Header({ title , className=""}) {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(count + 1);
    }           
    
    console.log(`${title}: count = ${count}`);

    return <h1 className={className}onClick={increment}>{title}</h1>;
}