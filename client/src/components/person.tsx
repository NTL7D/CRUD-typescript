import React, { useState } from "react";

interface PersonProps {
    name?: string;
    age?: number;
    email?: string;
}

export const Person: React.FC<PersonProps> = ({ name, age, email }) => {
    const [counter, setCounter] = useState<number>(0);

    function increase() {
        setCounter(counter + 1);
    }

    function decrease() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Hello World</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{email}</h2>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
};
