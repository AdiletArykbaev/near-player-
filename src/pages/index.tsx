import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market";
import UpcomingCard from "../features/ui/UpcomingCard";
import FeaturedCard from "../features/ui/FeaturedCard";
import RecentCard from "../features/ui/RecentCard";

const Routing = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Market/>}/>
                </Routes>
                <div style={{width: "22%"}}>
                    <UpcomingCard/>
                </div>
                <div style={{width: "calc(100% / 5 - (24px * 4 / 5)", margin: "40px 0"}}>
                    <FeaturedCard/>
                </div>
                <div style={{width: "calc(100% / 6 - (24px * 5 / 6)"}}>
                    <RecentCard/>
                </div>
            </div>
        </>
    );
};

export default Routing;