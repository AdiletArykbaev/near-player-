import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market";
import UpcomingCard from "../features/ui/UpcomingCard";

const Routing = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Market/>}/>
                </Routes>
                <UpcomingCard width={"22%"}/>
            </div>
        </>
    );
};

export default Routing;