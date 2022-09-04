import React from 'react';
import './explore.scss';
import Header from "../../shared/ui/Header";
import ExploreTools from "./ExploreTools";
import ExploreList from "./ExploreList";

const Explore = () => {
    return (
        <div className="explore">
            <Header type={false}/>
            <ExploreTools/>
            <ExploreList/>
        </div>
    );
};

export default Explore;