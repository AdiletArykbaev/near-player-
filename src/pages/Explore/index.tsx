import React from 'react';
import './explore.scss';
import Header from "../../shared/ui/Header";
import ListTools from "../../features/ui/ListTools";
import CardList from "../../features/ui/CardList";
import RecentCard from "../../features/ui/RecentCard";

const Explore = () => {
    return (
        <div className="explore">
            <Header type={false}/>
            <ListTools/>
            <CardList>
                {
                    Array.from(Array(12).keys()).map((el: number) => (
                        <div className="card__list_item">
                            <RecentCard id={el}/>
                        </div>
                    ))
                }
            </CardList>
        </div>
    );
};

export default Explore;