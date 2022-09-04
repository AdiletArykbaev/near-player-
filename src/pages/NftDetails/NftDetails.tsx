import React, {useState} from 'react';
import AudioWave from "../../features/ui/AudioWave/MusicPlayer";

interface Props {
    url: string
}

const NftDetails = ({url}: any) => {
    return (
        <div className="NftDetails">
            <AudioWave/>
            <audio id="track" src={url} />
        </div>
    );
};

export default NftDetails;