import React, {FC} from 'react';
import './cardCarousel.scss';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Grid} from "swiper";
import "swiper/css";
import "swiper/css/grid";
import UpcomingCard from "../UpcomingCard";
import FeaturedCard from "../FeaturedCard";
import RecentCard from "../RecentCard";
import Switch from "../../../entities/ui/Switch";

interface CardCarouselProps {
    text: string,
    data?: any,
    slidesCount?: number,
    rowCount?: number,
    type?: number,
}

const SwiperBtn: FC<CardCarouselProps> = ({text, type}) => {

    const swiper = useSwiper();
    return (
        <div className="cardCarousel__row">
            <h2 className="cardCarousel__title">{text}</h2>
            <div className="cardCarousel__btnBox">
                {
                    type === 1
                        ? <>
                            <button onClick={() => swiper.slidePrev()}>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.0775 15.2558L6.32169 10.5L11.0775 5.74414L12.2559 6.92247L8.67836 10.5L12.2559 14.0775L11.0775 15.2558Z"
                                        fill="#06020D" fillOpacity="0.6"/>
                                </svg>
                            </button>
                            <button onClick={() => swiper.slideNext()}>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.92247 15.2558L13.6783 10.5L8.92247 5.74414L7.74414 6.92247L11.3216 10.5L7.74414 14.0775L8.92247 15.2558Z"
                                        fill="#06020D"/>
                                </svg>
                            </button>
                        </>
                        : type === 2
                        ? <>
                            <select>
                                <option>24H</option>
                                <option>36H</option>
                                <option>48H</option>
                            </select>
                        </>
                        : <>
                            <select>
                                <option>24H</option>
                                <option>36H</option>
                                <option>48H</option>
                            </select>
                            <Switch text={"Available"}/>
                            <button onClick={() => swiper.slidePrev()}>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.0775 15.2558L6.32169 10.5L11.0775 5.74414L12.2559 6.92247L8.67836 10.5L12.2559 14.0775L11.0775 15.2558Z"
                                        fill="#06020D" fillOpacity="0.6"/>
                                </svg>
                            </button>
                            <button onClick={() => swiper.slideNext()}>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.92247 15.2558L13.6783 10.5L8.92247 5.74414L7.74414 6.92247L11.3216 10.5L7.74414 14.0775L8.92247 15.2558Z"
                                        fill="#06020D"/>
                                </svg>
                            </button>
                        </>
                }

            </div>
        </div>
    )
};

const CardCarousel: FC<CardCarouselProps> = ({
                                                 text, data,
                                                 slidesCount, type,
                                                 rowCount = 1
                                             }) => {
    return (
        <div className="cardCarousel">
            <Swiper navigation={true}
                    modules={[Grid]}
                    className="mySwiper"
                    slidesPerView={slidesCount}
                    spaceBetween={24}
                    grid={{rows: rowCount}}>
                {data && data.map((el: any) => (
                    <SwiperSlide>
                        {
                            type === 1
                                ? <UpcomingCard/>
                                : type === 2
                                ? <FeaturedCard/>
                                : <RecentCard/>
                        }
                    </SwiperSlide>
                ))}
                <SwiperBtn text={text} type={type}/>
            </Swiper>
        </div>
    );
};

export default CardCarousel;