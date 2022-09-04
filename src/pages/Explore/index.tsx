import React from 'react';
import Header from "../../shared/ui/Header";
import ExploreTools from "./ExploreTools";
import ExploreList from "./ExploreList";

const Explore = () => {
    return (
        <>
            <Header type={false}/>
            <ExploreTools/>
            <ExploreList/>
        </>
    );
};

export default Explore;