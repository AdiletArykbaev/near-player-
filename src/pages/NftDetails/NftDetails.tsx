import React, {FC, useEffect, useState, useRef} from 'react';
import AudioWave from "../../features/ui/AudioWave/MusicPlayer";
import Header from "../../shared/ui/Header";
import {Link} from "react-router-dom";
import "./NftDetails.scss";
import AudioPreview from "./AudioPreview/AudioPreview";
import AudioPlayer from "./AudioPlayer/AudioPlayer";

interface Props {
    url: string
}

const NftDetails: FC<Props> = ({url}) => {

    const [playing, setPlaying] = useState(false);
    const audioRef: any = useRef(null);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let i;
        if (playing) {
            const i = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 1000)
        } else {
            clearInterval(i)
        }
    }, [seconds]);
    console.log(seconds)

    return (
        <div className="NftDetails">
            <Header type={false}/>

            <div className="NftInfo">
                <AudioPreview setPlaying={setPlaying} playing={playing}/>
                <div className="Right">
                    <AudioWave ref={audioRef} setPlay={setPlaying} playing={playing}/>
                </div>
            </div>

            <AudioPlayer/>

            <audio id="track" src={url}/>

        </div>
    );
};

export default NftDetails;