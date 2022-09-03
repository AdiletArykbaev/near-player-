import React from 'react';
import featuredCard from '../../img/featuredCard.png'
import './featuresCard.scss'

const FeaturedCard = () => {
    return (
        <div className="featuredCard">
            <div className="featuredCard__top">
                <div className="featuredCard__promo">
                    <img src={featuredCard} alt="featuredCard"/>
                </div>
                <div className="featuredCard__list">
                    <div className="featuredCard__list_item">
                        <img src={featuredCard} alt="featuredCard"/>
                    </div>
                    <div className="featuredCard__list_item">
                        <img src={featuredCard} alt="featuredCard"/>
                    </div>
                    <div className="featuredCard__list_item">
                        <img src={featuredCard} alt="featuredCard"/>
                    </div>
                </div>
            </div>
            <h3 className="featuredCard__title">Ensch-maschine</h3>
            <h4 className="featuredCard__subtitle">
                <span>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.31 6.18067C13.3253 6.06467 13.3333 5.94867 13.3333 5.83334C13.3333 4.24734 11.9046 2.97467 10.3193 3.19C9.85731 2.368 8.97731 1.83334 7.99998 1.83334C7.02265 1.83334 6.14265 2.368 5.68065 3.19C4.09198 2.97467 2.66665 4.24734 2.66665 5.83334C2.66665 5.94867 2.67465 6.06467 2.68998 6.18067C1.86798 6.64334 1.33331 7.52334 1.33331 8.5C1.33331 9.47667 1.86798 10.3567 2.68998 10.8193C2.6746 10.9345 2.6668 11.0505 2.66665 11.1667C2.66665 12.7527 4.09198 14.022 5.68065 13.81C6.14265 14.632 7.02265 15.1667 7.99998 15.1667C8.97731 15.1667 9.85731 14.632 10.3193 13.81C11.9046 14.022 13.3333 12.7527 13.3333 11.1667C13.3333 11.0513 13.3253 10.9353 13.31 10.8193C14.132 10.3567 14.6666 9.47667 14.6666 8.5C14.6666 7.52334 14.132 6.64334 13.31 6.18067ZM7.30331 11.444L4.85865 8.968L5.80798 8.032L7.31265 9.556L10.1973 6.69334L11.136 7.64L7.30331 11.444Z"
                            fill="#E7B672"/>
                    </svg>
                </span>
                Kraftwerk
            </h4>
        </div>
    );
};

export default FeaturedCard;