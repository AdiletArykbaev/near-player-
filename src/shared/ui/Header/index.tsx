import React, {FC} from 'react';
import './header.scss'
import SearchBar from "../../../entities/ui/SearchBar";
import {Link, NavLink} from "react-router-dom";
import Button from "../../../entities/ui/Button";
import Logo from "../../../entities/ui/Logo";

interface HeaderProps {
    type: boolean
}

const Header: FC<HeaderProps> = ({type}) => {
    return (
        <header className="header">
            <div className="header__row">
                <div className="header__info">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <Logo svgColor={type ? "#F9F7F7" : "#06020D"} width={24} height={24}/>
                        </Link>
                    </div>
                    <SearchBar placeholder={"Search track...."} type={type ? 1 : 2} colorSvg={type ? "#F9F7F7" : "#06020D"}/>
                    <div className={`header__nav ${type ? "header__nav_light" : "header__nav_dark"}`}>
                        <NavLink to="/explore">Explore</NavLink>
                        <NavLink to="/collections/1">Collections</NavLink>
                    </div>
                </div>
                <div className="header__actions">
                    <button className={"header__actions_lang"}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.99999 1.66663C5.40499 1.66663 1.66666 5.40496 1.66666 9.99996C1.66666 14.595 5.40499 18.3333 9.99999 18.3333C14.595 18.3333 18.3333 14.595 18.3333 9.99996C18.3333 5.40496 14.595 1.66663 9.99999 1.66663ZM16.6092 9.16663H14.3058C14.203 7.34266 13.6927 5.56493 12.8125 3.96413C13.8327 4.44083 14.7157 5.16779 15.3795 6.07738C16.0433 6.98698 16.4663 8.04967 16.6092 9.16663ZM10.4417 3.35579C11.3042 4.49246 12.4642 6.50579 12.6308 9.16663H7.52499C7.64082 7.00329 8.35332 4.97663 9.56749 3.35496C9.71082 3.34663 9.85416 3.33329 9.99999 3.33329C10.1492 3.33329 10.295 3.34663 10.4417 3.35579ZM7.23999 3.93913C6.41999 5.51496 5.94666 7.30163 5.85832 9.16663H3.39082C3.5348 8.03982 3.96385 6.96838 4.6374 6.05364C5.31095 5.1389 6.20672 4.41112 7.23999 3.93913ZM3.39082 10.8333H5.86916C5.98249 12.8158 6.42332 14.565 7.16582 16.025C6.15098 15.5466 5.2731 14.8201 4.61329 13.9127C3.95348 13.0053 3.53304 11.9462 3.39082 10.8333ZM9.54166 16.6441C8.37416 15.2291 7.68499 13.2466 7.53416 10.8333H12.6283C12.455 13.1441 11.6975 15.1633 10.4592 16.6433C10.3075 16.6533 10.1558 16.6666 9.99999 16.6666C9.84499 16.6666 9.69416 16.6533 9.54166 16.6441ZM12.8842 16.0008C13.68 14.5058 14.1658 12.75 14.2933 10.8333H16.6083C16.4677 11.9369 16.0533 12.9877 15.4028 13.8903C14.7524 14.7928 13.8866 15.5183 12.8842 16.0008Z"
                                fill="#F9F7F7"/>
                        </svg>
                    </button>
                    {
                        type
                            ? <>
                                <Button text={"Log in"} color={"#F9F7F7"} background={"transparent"}
                                        border={"1px solid #F9F7F7"}/>
                                <Button text={"Sign up"} color={"#06020D"} background={"#E7B672"}
                                        border={"1px solid #E7B672"}/>
                            </>
                            : <>
                                <Button text={"Log in"} color={"#06020D"} background={"transparent"}
                                        border={"1px solid rgba(6, 2, 13, 0.2)"}/>
                                <Button text={"Sign up"} color={"#F9F7F7"} background={"#06020D"}
                                        border={"1px solid #06020D"}/>
                            </>
                    }
                </div>
            </div>
        </header>
    );
};
export default Header;