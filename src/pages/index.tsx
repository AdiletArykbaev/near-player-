import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Market from "./Market/Market";
import Explore from "./Explore";
import NftDetails from "./NftDetails/NftDetails";
import CollectionsDetails from "./CollectionsDetails";
import Collections from "./Collections";
// @ts-ignore
import SongSing from "./The_Neighbourhood_-_Sweater_Weather_47959107.mp3"

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
                <Route path={"/collections"} element={<Collections/>}/>
                <Route path={"/explore/:id"}
                       element={<NftDetails url={SongSing}/>}/>
                <Route path={"/collections/:id"} element={<CollectionsDetails/>}/>
            </Routes>
        </>
    );
};

export default Routing;