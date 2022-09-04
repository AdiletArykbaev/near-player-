import React, {useEffect, useRef, useState} from 'react';
import Button from "../../../entities/ui/Button";

const ExploreGenres = () => {

    const sliderBox: any = useRef();
    const sliderBoxParent: any = useRef();

    const genres = ["All genres", "Pop", "Rap", "Electronic/Dance", "Rock", "Indie", "Raggie", "Metal", "Funk", "Instrumental", "Qwe", "Lol", "Gucci", "Raggie", "Metal", "Funk", "Instrumental", "Qwe", "Lol", "Gucci"];

    const [genre, setGenre] = useState("All genres");
    const [sliderLeftValue, setSliderLeftValue] = useState(0);
    const [diff, setDiff] = useState(0);

    useEffect(() => {
        setDiff(sliderBoxParent.current.clientWidth - sliderBox.current.clientWidth);
    }, []);

    const slideNextHandler = () => {
        if (diff < sliderLeftValue) {
            if (diff < sliderLeftValue - 100) {
                const val = sliderLeftValue - 100;
                setSliderLeftValue(val);
                sliderBox.current.style.left = `${val}px`;
            } else {
                const val = sliderLeftValue + (diff - sliderLeftValue);
                setSliderLeftValue(val);
                sliderBox.current.style.left = `${val}px`;
            }
        } else if (diff === sliderLeftValue) {
            setSliderLeftValue(0);
            sliderBox.current.style.left = 0
        }
    };

    return (
        <>
            <div ref={sliderBoxParent} className="explore__tools_genres">
                <div ref={sliderBox} className="explore__tools_genres-slider">
                    {genres
                        ? genres.map((el: any) => (
                            <div onClick={() => setGenre(el)}>
                                <Button text={el} color={genre === el ? "#F9F7F7" : "#06020D"}
                                        background={genre === el ? "#06020D" : "transparent"}
                                        border={genre === el ? "1px solid #06020D" : "1px solid rgba(6, 2, 13, 0.2)"}/>
                            </div>
                        ))
                        : ''
                    }
                </div>
                <div className="explore__tools_genres-hidden">
                    <Button text={"A"} color={'#000'} background={"#000"} border={"1px solid"}/>
                </div>
            </div>
            <Button onClick={slideNextHandler} color={"#06020D"}
                    background={"transparent"}
                    border={"1px solid #06020D"}>
                {diff === sliderLeftValue
                    ? <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.0775 15.2558L6.32169 10.5L11.0775 5.74414L12.2559 6.92247L8.67836 10.5L12.2559 14.0775L11.0775 15.2558Z"
                            fill="#06020D" fillOpacity="0.6"/>
                    </svg>
                    : <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.92247 15.2558L13.6783 10.5L8.92247 5.74414L7.74414 6.92247L11.3216 10.5L7.74414 14.0775L8.92247 15.2558Z"
                            fill="#06020D"/>
                    </svg>}
            </Button>
        </>
    );
};

export default ExploreGenres;