import React from 'react';
import {Route, Routes} from "react-router-dom";
import Market from "./Market";
import Header from "../shared/ui/Header";

const Routing = () => {
    return (
        <>
            <Header buttonBorder1={"1px solid #F9F7F7"} buttonBorder2={"1px solid #E7B672"} buttonBg2={"#E7B672"}
                    buttonBg1={"transparent"} buttonText1={"Log in"} buttonText2={"Sign up"} colorSvg={"#FFFFFF"}
                    buttonColor1={"#F9F7F7"} buttonColor2={"#06020D"}/>
            <Routes>
                <Route path={"/"} element={<Market/>}/>
            </Routes>
        </>
    );
};

export default Routing;