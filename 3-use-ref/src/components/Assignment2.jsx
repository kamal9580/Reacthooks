import React, { useState, useCallback, useRef } from 'react';


export function Assignment2() {
    const [count, setCount] = useState(0);

    const nooftimesrerendered = useRef(0);

    const handleReRender = () => {
       
        setCount(count+1);
    };

    nooftimesrerendered.current = nooftimesrerendered.current+1;

    return (
        <div>
            <p>This component has rendered {nooftimesrerendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};