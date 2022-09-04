import React from 'react';
import './collections.scss';
import Header from "../../shared/ui/Header";
import ListTools from "../../features/ui/ListTools";
import CardList from "../../features/ui/CardList";
import FeaturedCard from "../../features/ui/FeaturedCard";

const Collections = () => {
    return (
        <div className="collections">
            <Header type={false}/>
            <ListTools/>
            <CardList>
                {
                    Array.from(Array(12).keys()).map((el: number) => (
                        <div className="card__list_item">
                            <FeaturedCard id={el}/>
                        </div>
                    ))
                }
            </CardList>
        </div>
    );
};

export default Collections;