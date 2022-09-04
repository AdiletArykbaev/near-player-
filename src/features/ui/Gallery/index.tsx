import React, {useEffect, useRef} from 'react';
import './gallery.scss';
import recentCard from "../../img/recentCard.png";

const Gallery = () => {
    const refPromo: any = useRef();
    const refItem1: any = useRef();
    const refItem2: any = useRef();
    const refItem3: any = useRef();

    useEffect(() => {
        refPromo.current.style.height = `${refPromo.current.clientWidth}px`;
        refItem1.current.style.height = `${refItem1.current.clientWidth}px`;
        refItem2.current.style.height = `${refItem2.current.clientWidth}px`;
        refItem3.current.style.height = `${refItem3.current.clientWidth}px`;
    }, []);

    return (
        <div className="gallery">
            <div ref={refPromo} className="gallery__promo gallery__img_box">
                <img src={recentCard} alt="gallery__promo"/>
            </div>
            <div className="gallery__list">
                <div ref={refItem1} className="gallery__img_box">
                    <img src={recentCard} alt="gallery__list_item"/>
                </div>
                <div ref={refItem2} className="gallery__img_box">
                    <img src={recentCard} alt="gallery__list_item"/>
                </div>
                <div ref={refItem3} className="gallery__img_box">
                    <img src={recentCard} alt="gallery__list_item"/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;