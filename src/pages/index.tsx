import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Market/>}/>
            </Routes>
        </>
    );
};

export default Routing;