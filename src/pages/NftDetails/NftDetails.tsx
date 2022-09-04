import React, {FC} from 'react';
import AudioWave from "../../features/ui/AudioWave/MusicPlayer";
import Header from "../../shared/ui/Header";

interface Props {
    url: string
}

const NftDetails: FC<Props> = ({url}) => {
    return (
        <div className="NftDetails">
            <Header type={false}/>
            <AudioWave/>
            <audio id="track" src={url} />
        </div>
    );
};

export default NftDetails;