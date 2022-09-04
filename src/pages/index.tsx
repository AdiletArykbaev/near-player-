import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Market from "./Market/Market";
import Explore from "./Explore";
import NftDetails from "./NftDetails/NftDetails";
import CollectionsDetails from "./CollectionsDetails";

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
                <Route path={"/explore/NFT/:id"}
                       element={<NftDetails url="https://dl2.mp3party.net/online/6829986.mp3"/>}/>
                <Route path={"/collections/:id"} element={<CollectionsDetails/>}/>
            </Routes>
        </>
    );
};

export default Routing;