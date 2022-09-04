import React, {Component, useEffect} from 'react';
import WaveSurfer from 'wavesurfer.js';

class AudioWave extends Component {
    state = {
        playing: this.props.playing,
    };

    componentDidMount() {
        const track = document.querySelector('#track');
        this.waveform = WaveSurfer.create({
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
        this.waveform.load(track);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.playing !== this.state.playing){
            this.setState({ playing: this.props.playing });
            this.waveform.playPause();
        }

    }

    render() {
        return (
            <div className="waveForm_parent">
                <div id="waveform"/>
            </div>
        );
    }
}

export default AudioWave;
