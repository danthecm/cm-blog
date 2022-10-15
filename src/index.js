import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router"
import { StateProvider } from "./components/stateManagement/store";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <StateProvider>
            <Router />
        </StateProvider>
    </React.StrictMode>
)