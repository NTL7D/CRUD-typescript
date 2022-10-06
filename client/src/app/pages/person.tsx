import React from "react";
import { Helmet } from "react-helmet-async";
import { PersonProps } from "../context/interface";

const Person: React.FC<PersonProps> = ({ name, age, email }) => {
    const [count, setCount] = React.useState<number>(0);
    const [text, setText] = React.useState<string | null>("");

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <Helmet>
                <title>Anh bạn à</title>
            </Helmet>

            <div>
                <h1>Hello</h1>
                <p>{name}</p>
                <p>{age}</p>
                <p>{email}</p>
                <input
                    placeholder='Write something here...'
                    onChange={handleChange}
                />
                <p>{text}</p>
                <p>{count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
};

export default Person;
