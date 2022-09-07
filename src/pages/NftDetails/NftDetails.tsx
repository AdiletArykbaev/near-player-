import React, {FC, useEffect, useState, useRef} from 'react';
import AudioWave from "../../features/ui/AudioWave/MusicPlayer";
import Header from "../../shared/ui/Header";
import "./NftDetails.scss";
import AudioPreview from "./AudioPreview/AudioPreview";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import ButtonBack from "../../features/ui/ButtonBack";
import {Link} from "react-router-dom";
import NftDes from "./NftDescription/NftDes";
import SwitchCaser from "./Switcher/SwitchCaser";
import Counter from "./Counter/Counter";
import Owner from "./Owner/Owner";
import Offers from "./Offers/Offers";
import RecentCard from "../../features/ui/RecentCard";
import CardCarousel from "../../features/ui/CardCarousel";

interface Props {
    url: string
}

const NftDetails: FC<Props> = ({url}) => {

    const [playing, setPlaying] = useState(false);
    const [switcher, setSwitcher] = useState(1);
    const [count, setCounter] = useState(0);
    const audioRef: any = useRef(null);

    return (
        <div className="NftDetails">
            <Header type={false}/>
            <Link to={"/explore"}>
                <ButtonBack/>
            </Link>
            <div className="NftInfo">
                <AudioPreview setPlaying={setPlaying} playing={playing}/>
                <div className="Right">
                    <NftDes/>
                    <AudioWave url={url} setPlaying={setPlaying} playing={playing}/>
                    <SwitchCaser switcher={switcher} setSwitcher={setSwitcher}/>
                    <Counter count={count} setCount={setCounter}/>
                    <Owner/>
                    <Offers/>
                    <div className="OtherArtists">
                        <CardCarousel type={3} text={"Other artist’s tracks "}
                                      data={Array.from(Array(8).keys())} slidesCount={3} rowCount={1}/>
                    </div>


                </div>
            </div>
            {
                playing
                    ? <AudioPlayer classProps={"up"}/>
                    : <AudioPlayer classProps={"down"}/>
            }
            <audio id="track" src={url}/>
        </div>
    );
};

export default NftDetails;