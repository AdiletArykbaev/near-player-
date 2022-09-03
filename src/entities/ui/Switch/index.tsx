import React, {FC, useState} from 'react';
import './switch.scss';

interface SwitchProps {
    text: string
}

const Switch: FC<SwitchProps> = ({text}) => {
    const [circleStatus, setCircleStatus] = useState(false);
    return (
        <div onClick={() => setCircleStatus(!circleStatus)} className="switch">
            <p className="switch__title">{text}</p>
            <div className="switch__box">
                <div
                    className={`switch__box_circle ${circleStatus ? "switch__box_circle-active" : "switch__box_circle-disabled"}`}/>
            </div>
        </div>
    );
};

export default Switch;