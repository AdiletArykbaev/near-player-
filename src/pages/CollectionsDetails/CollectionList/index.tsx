import React from 'react';
import './collectionsList.scss';
import Selector from "../../../entities/ui/Selector";
import Switch from "../../../entities/ui/Switch";
import Button from "../../../entities/ui/Button";
import SearchBar from "../../../entities/ui/SearchBar";
import ListRefresh from "../../../features/ui/ListRefresh";
import RecentCard from "../../../features/ui/RecentCard";

const CollectionList = () => {
    return (
        <section className="collectionList">
            <div className="collectionList__tools">
                <div className="collectionList__tools_selector">
                    <Selector data={["Trending", "The Best", "Favorites"]}/>
                </div>
                <div className="collectionList__tools_selector">
                    <Selector data={["Sort By", "Qwe", "Ouy"]}/>
                </div>
                <div className="collectionList__tools_switch">
                    <Switch text={"Available"}/>
                </div>
                <Button text={"Filters"} color={"#06020D"} background={"transparent"} border={"1px solid #06020D"}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.83325 9.16671H14.1666V10.8334H5.83325V9.16671ZM3.33325 5.83337H16.6666V7.50004H3.33325V5.83337ZM8.33325 12.5H11.6666V14.1667H8.33325V12.5Z"
                            fill="#06020D"/>
                    </svg>
                </Button>
                <div className="collectionList__tools_search">
                    <SearchBar placeholder={"Search by track or artist...."} colorSvg={"#06020D"} type={3}/>
                </div>
            </div>
            <div className="collectionList__refresh">
                <ListRefresh/>
            </div>
            <div className="collectionList__row">
                {
                    Array.from(Array(12).keys()).map((el: number) => (
                        <div className="collectionList__item">
                            <RecentCard id={el}/>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default CollectionList;