import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../../../entities/ui/Button";

const ButtonBack = () => {
    const navigate = useNavigate();
    const prevPageHandler = () => {
        navigate(-1)
    };
    return (
        <Button onClick={prevPageHandler} color={"#06020D"} background={"transparent"}
                border={"1px solid rgba(6, 2, 13, 0.2)"}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.5 9.16667H5.34503L9.75586 4.75583L8.57753 3.5775L2.15503 10L8.57753 16.4225L9.75586 15.2442L5.34503 10.8333H17.5V9.16667Z"
                    fill="black"/>
            </svg>
        </Button>
    );
};

export default ButtonBack;