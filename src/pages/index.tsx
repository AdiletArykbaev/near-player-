import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market/Market";
import Explore from "./Explore";
import NftDetails from "./NftDetails/NftDetails";

const Routing = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path={"/"} element={<Market/>}/>
                    <Route path={"/explore"} element={<Explore/>}/>
                    <Route path={"/explore/NFT/:id"} element={<NftDetails url="https://dl2.mp3party.net/online/6829986.mp3"/>}/>
                </Routes>
            </div>
        </>
    );
};

export default Routing;