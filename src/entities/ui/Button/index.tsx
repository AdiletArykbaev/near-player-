import React, {FC} from 'react';
import './button.scss';

interface ButtonProps {
    text?: string,
    color: string,
    background: string,
    border: string,
    children?: any,
    onClick?: any
}

const Button: FC<ButtonProps> = ({text, color, background, border, children, onClick}) => {
    return (
        <button onClick={() => onClick ? onClick() : null} style={{color, background, border}}
                className="button__component">{children}{text}</button>
    );
};

export default Button;