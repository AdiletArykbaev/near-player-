import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market/Market";
import Explore from "./Explore";

const Routing = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Market/>}/>
                    <Route path={"/explore"} element={<Explore/>}/>
                </Routes>
            </div>
        </>
    );
};

export default Routing;