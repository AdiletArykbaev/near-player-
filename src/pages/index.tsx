import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market/Market";
import Explore from "./Explore";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Market/>}/>
                <Route path={"/explore"} element={<Explore/>}/>
            </Routes>
        </>
    );
};

export default Routing;