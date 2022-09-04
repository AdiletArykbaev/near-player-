import React from 'react';
import './collectionsDetails.scss'
import ButtonBack from "../../features/ui/ButtonBack";
import CollectionInfo from "./ColletionInfo";
import CollectionList from "./CollectionList";

const CollectionsDetails = () => {
    return (
        <div className="collectionsDetails">
            <ButtonBack/>
            <div className="collectionsDetails__row">
                <CollectionInfo/>
                <CollectionList/>
            </div>
        </div>
    );
};

export default CollectionsDetails;