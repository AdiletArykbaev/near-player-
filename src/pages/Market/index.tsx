import React, {useState} from 'react';
import "./market.scss";
import Dashboard from "../../features/ui/Dashboard/Dashboard";
import Header from "../../shared/ui/Header";
import UpperPage from "./UpperPage/UpperPage";
import Demo from "./Demo/Demo";

const Market = () => {

    const [tab, setTab] = useState("UpperPage");

    return (
            <div className="market">
                <div className="market__main">
                    <Header type={true}/>
                    {
                        tab === "UpperPage"
                            ? <UpperPage setTab={setTab}/>
                            : tab === "Demo"
                            ? <Demo setTab={setTab}/>
                            : ""
                    }
                </div>
                <Dashboard/>
            </div>
    );
};

export default Market;