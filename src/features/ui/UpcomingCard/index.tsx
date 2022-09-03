import React from 'react';
import cardImg from '../../img/upcomingCard.png';
import './upcomingCard.scss';

const UpcomingCard = () => {
    return (
        <div className="card">
            <div className="card__top">
                <div className="card__img">
                    <img src={cardImg} alt="upcomingCard"/>
                </div>
                <div className="card__date">
                    <p>October 12, 12:00</p>
                </div>
            </div>
            <div className="card__bottom">
                <h2 className="card__title">Too Many People</h2>
                <p className="card__subtitle">
                <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_461_2189)">
                            <path
                                d="M8.31873 3.55043C8.32831 3.47793 8.33331 3.40543 8.33331 3.33334C8.33331 2.34209 7.4404 1.54668 6.44956 1.68126C6.16081 1.16751 5.61081 0.833344 4.99998 0.833344C4.38915 0.833344 3.83915 1.16751 3.5504 1.68126C2.55748 1.54668 1.66665 2.34209 1.66665 3.33334C1.66665 3.40543 1.67165 3.47793 1.68123 3.55043C1.16748 3.83959 0.833313 4.38959 0.833313 5.00001C0.833313 5.61043 1.16748 6.16043 1.68123 6.44959C1.67162 6.52156 1.66675 6.59407 1.66665 6.66668C1.66665 7.65793 2.55748 8.45126 3.5504 8.31876C3.83915 8.83251 4.38915 9.16668 4.99998 9.16668C5.61081 9.16668 6.16081 8.83251 6.44956 8.31876C7.4404 8.45126 8.33331 7.65793 8.33331 6.66668C8.33331 6.59459 8.32831 6.52209 8.31873 6.44959C8.83248 6.16043 9.16665 5.61043 9.16665 5.00001C9.16665 4.38959 8.83248 3.83959 8.31873 3.55043ZM4.56456 6.84001L3.03665 5.29251L3.62998 4.70751L4.5704 5.66001L6.37331 3.87084L6.95998 4.46251L4.56456 6.84001Z"
                                fill="#E7B672"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_461_2189">
                                <rect width="10" height="10" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                    Shawn Mendes
                </p>
            </div>
            <img className="card__bg" src={cardImg} alt="upcomingCard"/>
        </div>
    );
};

export default UpcomingCard;