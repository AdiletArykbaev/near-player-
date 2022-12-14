import React, {useEffect, useState, useRef} from 'react';
import "./market.scss";
import Dashboard from "../../features/ui/Dashboard/Dashboard";
import Header from "../../shared/ui/Header";
import UpperPage from "./UpperPage/UpperPage";
import Demo from "./Demo/Demo";
import MarketPlace from "./MarketPlace";

const Market = () => {

    const [tab, setTab] = useState("UpperPage");

    const [stateTop, setStateTop] = useState(0);
    const elementRef: any = useRef();

    useEffect(() => {
        setStateTop(elementRef.current.clientHeight);
    }, [elementRef]);

    return (
        <>
            <div ref={elementRef} className="market">
                <div className="market__main">
                    <Header type={true}/>
                    <div className="market__container">
                        {
                            tab === "UpperPage"
                                ? <UpperPage setTab={setTab}/>
                                : tab === "Demo"
                                ? <Demo setTab={setTab}/>
                                : ""
                        }
                    </div>
                </div>
                <Dashboard/>
            </div>
            <div id="marketplace" style={{top: stateTop}} className="MarketPlace">
                <MarketPlace/>
            </div>
        </>
    );
};

export default Market;