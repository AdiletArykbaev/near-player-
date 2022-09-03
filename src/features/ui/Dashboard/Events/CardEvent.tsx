import React, {FC} from 'react';
import "./EventCard.scss";
import Logo from "../../../../entities/ui/logo";

interface Props {
    name: string,
    aviable: boolean,
    image: string;
}


const CardEvent: FC<Props> = ({name, aviable, image}) => {

    return (
        <div className="EventCard">
            <img src={image} alt=""/>
            <div className="blur">

            </div>
            <div className="EventCard__padding">
                <div className="EventCard__title">
                    <Logo width={16} height={16}/>
                    <span>AVA BITHOLD</span>
                </div>
                {
                    aviable ?
                        <>
                            <h2 className="EventCard__name">
                                <span className="width">
                                {name}
                                    <span className="yellow"> x </span>
                                Ava Bithold

                                </span>
                            </h2>
                            <button className="button">Learn More
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.87493 7.95219L8.54135 7.95219L8.54135 0.0479155L0.637074 0.0479158L0.637074 1.71433L5.69642 1.71433L0.0478183 7.36294L1.22633 8.54145L6.87493 2.89284L6.87493 7.95219Z" fill="#F9F7F7"/>
                                </svg>
                            </button>
                        </>
                        : <div>
                            <h2 className="EventCard__name"> {name}</h2>
                            <span className="EventCard__subName">More partnership soon...</span>
                        </div>
                }
            </div>
        </div>
    );
};

export default CardEvent;