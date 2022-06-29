import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Board from './pages/Board';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap"
                  rel="stylesheet"
            />

            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<Perfil/>}/>*/}
                    <Route path="/canvas" element={<Board/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                </Routes>
            </BrowserRouter>
        </>
    </React.StrictMode>
);


reportWebVitals();
