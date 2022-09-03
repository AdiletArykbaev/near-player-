import React, {FC} from 'react';
import "./EventCard.scss";
import Logo from "../../../../entities/ui/logo";

interface Props {
    name: string,
    aviable: boolean,
    image: any;
}

const CardEvent: FC<Props> = ({name, aviable, image}) => {
    return (
        <div className="EventCard">
            <img src={image} alt="image"/>
            <div className="EventCard__title">
                <Logo width={16} height={16}/>
                <span>AVA BITHOLD</span>
            </div>
            {
                aviable ?
                    <h2 className="EventCard__name">
                        {name}
                        <span className="x">x</span>
                        Ava Bithold
                    </h2>
                    : <div>
                       <h2> {name}</h2>
                    <span>More partnership soon...</span>
                    </div>
            }

        </div>
    );
};

export default CardEvent;