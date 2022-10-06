import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider as Header } from "react-helmet-async";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Header>
                <App />
            </Header>
        </Router>
    </React.StrictMode>
);
