import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import Canvas from './pages/Canvas';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={"light wrapper"}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Canvas/>}/>
                    <Route path="/canvas" element={<Canvas/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </div>
);


reportWebVitals();
