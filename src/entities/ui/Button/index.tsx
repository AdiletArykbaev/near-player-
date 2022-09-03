import React, {FC} from 'react';
import './button.scss';

interface ButtonProps {
    text: string,
    color: string,
    background: string,
    border: string,
}

const Button: FC<ButtonProps> = ({text, color, background, border}) => {
    return (
        <button style={{color, background, border}} className="button__component">{text}</button>
    );
};

export default Button;