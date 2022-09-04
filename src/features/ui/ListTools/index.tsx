import React from 'react';
import './listTools.scss';
import Button from "../../../entities/ui/Button";
import ExploreGenres from "../../../features/ui/ExploreGenres";
import SearchBar from "../../../entities/ui/SearchBar";
import Selector from "../../../entities/ui/Selector";
import Switch from "../../../entities/ui/Switch";

const ListTools = () => {
    return (
        <section className="explore__tools">
            <ExploreGenres/>
            <Button text={"Filters"} color={"#06020D"} background={"transparent"} border={"1px solid rgba(6, 2, 13, 0.2)"}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.83325 9.16671H14.1666V10.8334H5.83325V9.16671ZM3.33325 5.83337H16.6666V7.50004H3.33325V5.83337ZM8.33325 12.5H11.6666V14.1667H8.33325V12.5Z"
                        fill="#06020D"/>
                </svg>
            </Button>
            <div className="explore__tools_search">
                <SearchBar placeholder={"Search by track or artist...."} colorSvg={"#06020D"} type={3}/>
            </div>
            <div className="explore__tools_selector">
                <Selector data={["Trending", "The Best", "Favorites"]}/>
            </div>
            <div className="explore__tools_selector">
                <Selector data={["Sort By", "Qwe", "Ouy"]}/>
            </div>
            <div className="explore__tools_switch">
                <Switch text={"Available"}/>
            </div>
        </section>
    );
};

export default ListTools;