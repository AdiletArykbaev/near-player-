import React, {FC, useState} from 'react';
import "./AudioPreview.scss";
import {Interface} from "ethers/lib/utils";

interface Props {
    playing: boolean
    setPlaying: any
}

const AudioPreview: FC<Props> = ({playing, setPlaying}) => {
    return (
        <div className="Audio">
            <div className="blur">

            </div>
            <img className="Audio__cover"
                 src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9e212655336473.59807db1efd99.jpg"
                 alt=""/>
            <button className="Audio__status" onClick={() => setPlaying((prev: boolean) => !prev)}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_623_1407)">
                        <rect className="rectangle" width="44" height="44" rx="2.65868" fill="#E7B672"
                              fillOpacity="0.2"/>
                        {
                            playing ?
                                <path
                                    d="M14.6667 12.8334H20.1667V31.1667H14.6667V12.8334ZM23.8334 12.8334H29.3334V31.1667H23.8334V12.8334Z"
                                    fill="#F9F7F7"/>
                                : <path
                                    d="M15.1097 31.4348V12.5652C15.1097 12.2208 15.4855 12.0081 15.7808 12.1853L31.5054 21.62C31.7923 21.7921 31.7923 22.2079 31.5054 22.38L15.7808 31.8147C15.4855 31.9919 15.1097 31.7792 15.1097 31.4348Z"
                                    fill="#E7B672" stroke="#E7B672" strokeWidth="0.886228"/>

                        }

                    </g>
                    <rect x="0.443114" y="0.443114" width="43.1138" height="43.1138" rx="2.21557" stroke="#E7B672"
                          strokeOpacity="0.5" strokeWidth="0.886228"/>
                    <defs>
                        <clipPath id="clip0_623_1407">
                            <rect width="44" height="44" rx="2.65868" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
};

export default AudioPreview;