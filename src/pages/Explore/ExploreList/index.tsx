import React from 'react';
import './exploreList.scss';
import RecentCard from "../../../features/ui/RecentCard";
import ListRefresh from "../../../features/ui/ListRefresh";

const ExploreList = () => {
    return (
        <section className="explore__list">
            <div className="explore__list_refresh">
                <ListRefresh/>
            </div>
            <div className="explore__list_row">
                {
                    Array.from(Array(12).keys()).map((el) => (
                        <div className="explore__list_item">
                            <RecentCard/>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ExploreList;