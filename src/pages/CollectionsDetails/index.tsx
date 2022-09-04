import React from 'react';
import './collectionsDetails.scss'
import ButtonBack from "../../features/ui/ButtonBack";
import CollectionInfo from "./ColletionInfo";
import CollectionList from "./CollectionList";
import Header from "../../shared/ui/Header";

const CollectionsDetails = () => {
    return (
        <div className="collectionsDetails">
            <Header type={false}/>
            <div className="collectionsDetails__container">
                <ButtonBack/>
                <div className="collectionsDetails__row">
                    <CollectionInfo/>
                    <CollectionList/>
                </div>
            </div>
        </div>
    );
};

export default CollectionsDetails;