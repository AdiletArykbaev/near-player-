import Wavesurfer from "wavesurfer.js";
import {useEffect, useRef} from "react";

const Waveform = ({url, playing, setPlaying}) => {

    const waveform = useRef(null);

    useEffect(() => {
        if (!waveform.current) {
            waveform.current = Wavesurfer.create({
                barWidth: 3,
                cursorWidth: 1,
                container: '#waveform',
                backend: 'WebAudio',
                height: 64,
                progressColor: '#E7B672',
                responsive: true,
                waveColor: 'rgba(6, 2, 13, 0.2)',
                cursorColor: 'transparent',
                mediaControls: true,
                pixelRatio: 1
            });
            waveform.current.load(url);
        }
    }, []);

    const playAudio = () => {
        if (!playing) {
            waveform.current.pause();

        } else {
            waveform.current.play();
        }
    };

    useEffect(() => {
        if (waveform.current){
            playAudio()
        }
    }, [playing]);

    useEffect(()=>{
        console.log(waveform.current.isPlaying())
    }, [waveform.current]);

    return (
        <div style={{width: "100%"}}>
            <div id="waveform"/>
        </div>
    );
};

export default Waveform;