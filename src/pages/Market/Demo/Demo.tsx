import React, {useState} from 'react';
import "./Demo.scss"

const Demo = ({setTab}: any) => {

    const [type, setType] = useState("Collector");

    return (
        <div className="market__demo">
            <div className="market__demo_left">
                <svg width="15" height="300" viewBox="0 0 15 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7.5" y1="7.5" x2="7.49999" y2="292.004" stroke="#FCFCFC" strokeOpacity="0.2"/>
                    <line x1="7.5" y1="8" x2="7.5" y2="77" stroke="#E7B672"/>
                    <circle cx="7.5" cy="7.5" r="7" fill="#E7B672" stroke="#E7B672"/>
                    <circle cx="7.5" cy="102.5" r="7.5" fill="#2D2039"/>
                    <circle cx="7.5" cy="102.5" r="7" stroke="#F9F7F7" strokeOpacity="0.2"/>
                    <circle cx="7.5" cy="197.5" r="7.5" fill="#433152"/>
                    <circle cx="7.5" cy="197.5" r="7" stroke="#FCFCFC" strokeOpacity="0.2"/>
                    <circle cx="7.5" cy="292.5" r="7.5" fill="#523C62"/>
                    <circle cx="7.5" cy="292.5" r="7" stroke="#FCFCFC" strokeOpacity="0.2"/>
                </svg>

            </div>
            <div className="market__demo_right">
                <button className="market__demo_button" onClick={() => {
                    setTab("UpperPage")
                }}>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5 6.16668H3.34503L7.75586 1.75585L6.57753 0.577515L0.155029 7.00001L6.57753 13.4225L7.75586 12.2442L3.34503 7.83335H15.5V6.16668Z"
                            fill="#E7B672"/>
                    </svg>
                    Back
                </button>
                <h2 className="market__demo_mainTitle">Who are you?</h2>
                <span className="market__demo_subTitle">
                    Our creator toolkit makes it easy to create an NFT collection,
                    with tooling that scales with your creative ambitions.
                </span>
                <div className="market__demo_choose">
                    <div onClick={()=>{
                        setTab("Collector")
                    }} className="market__demo_chooseBlock activeChoose">
                        <h2>Collector</h2>
                        <span>
                            Collectors can browse and buy
                            NFTs but not submit anything for sale.
                        </span>
                    </div>
                    <div onClick={()=>{
                        setTab("Artist")
                    }} className="market__demo_chooseBlock">
                        <h2>Artist</h2>
                        <span>
                            Artists can browse and buy
                            NFTs as well as submit NFTs for sale
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;