import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Market from "./Market/Market";
import Explore from "./Explore";

const Routing = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [location.pathname]);

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