import React from 'react';
import CardCarousel from "../../../features/ui/CardCarousel";
import "./Market.scss";

const MarketPlace = () => {
    return (
        <div className="MarketPlace">
            <CardCarousel type={1} text={"Upcoming releases"}
                          data={Array.from(Array(10).keys())} slidesCount={4}/>
            <CardCarousel type={2} text={"Featured Collections"}
                          data={Array.from(Array(10).keys())} slidesCount={5}/>
            <CardCarousel type={3} text={"Recent drops"}
                          data={Array.from(Array(24).keys())} slidesCount={6}/>
        </div>
    );
};

export default MarketPlace;