import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

class AudioWave extends Component {
    state = {
        playing: false,
    };
    componentDidMount() {
        const track = document.querySelector('#track');
        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 80,
            progressColor: '#E7B672',
            responsive: true,
            waveColor: 'rgba(6, 2, 13, 0.2)',
            cursorColor: 'transparent',
        });
        this.waveform.load(track);
    };

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };

    render() {
        return (
            <div>
                <button onClick={this.handlePlay} >
                    {!this.state.playing ? 'Play' : 'Pause'}
                </button>
                <div id="waveform" />

            </div>
        );
    }
}

export default AudioWave;