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

    useEffect(()=>{
        console.log(audioRef.current.currentTime)
    }, [audioRef.current]);

    return (
        <div className="NftDetails">
            <Header type={false}/>

            <div className="NftInfo">
                <AudioPreview setPlaying={setPlaying} playing={playing}/>
                <div className="Right">
                    <AudioWave  setPlay={setPlaying} playing={playing}/>
                </div>
            </div>

            <AudioPlayer/>

            <audio ref={audioRef} id="track" src={url}/>

        </div>
    );
};

export default NftDetails;