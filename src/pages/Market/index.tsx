import React, {useState} from 'react';
import "./market.scss";
import Dashboard from "../../features/ui/Dashboard/Dashboard";
import Header from "../../shared/ui/Header";
import UpperPage from "./UpperPage/UpperPage";
import Demo from "./Demo/Demo";

const Market = () => {

    const [tab, setTab] = useState("UpperPage");
    const tabs = ["UpperPage", "Demo"];

    return (
        <div className="market">

            <div className="market__main">

                <Header buttonBorder1={"1px solid #F9F7F7"} buttonBorder2={"1px solid #E7B672"} buttonBg2={"#E7B672"}
                        buttonBg1={"transparent"} buttonText1={"Log in"} buttonText2={"Sign up"} colorSvg={"#FFFFFF"}
                        buttonColor1={"#F9F7F7"} buttonColor2={"#06020D"}/>

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