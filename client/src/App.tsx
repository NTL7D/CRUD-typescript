import React from "react";
import { Routes, Route } from "react-router-dom";
import { Person } from "./app/Page";
const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Person />} />
            </Routes>
        </>
    );
};

export default App;
