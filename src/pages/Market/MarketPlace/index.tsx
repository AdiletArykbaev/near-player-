import React from 'react';
import CardCarousel from "../../../features/ui/CardCarousel";
import "./Market.scss";

const MarketPlace = () => {
    return (
        <>
            <CardCarousel type={1} text={"Upcoming releases"}
                          data={Array.from(Array(10).keys())} slidesCount={4} rowCount={1}/>
            <CardCarousel type={2} text={"Featured Collections"}
                          data={Array.from(Array(10).keys())} slidesCount={5} rowCount={1}/>
            <CardCarousel type={3} text={"Recent drops"}
                          data={Array.from(Array(70).keys())} slidesCount={6} rowCount={2}/>
            <CardCarousel type={3} text={"Electronic/Dance"}
                          data={Array.from(Array(10).keys())} slidesCount={6} rowCount={1}/>
            <CardCarousel type={3} text={"Pop"}
                          data={Array.from(Array(10).keys())} slidesCount={6} rowCount={1}/>
        </>
    );
};

export default MarketPlace;