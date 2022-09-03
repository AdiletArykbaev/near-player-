import React, {FC} from 'react';

interface SwitchProps {
    text: string
}

const Switch: FC<SwitchProps> = ({text}) => {
    return (
        <div className="switch">
            <p className="switch__title">{text}</p>
            <div className="switch__box">
                <span className="switch__box_circle"/>
            </div>
        </div>
    );
};

export default Switch;