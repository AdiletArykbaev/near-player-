import React from 'react';
import "./market.scss";
import Dashboard from "../../features/ui/Dashboard/Dashboard";
import Header from "../../shared/ui/Header";

const Market = () => {
    return (
        <div className="market">
            <div className="market__main">
                <Header type={true}/>
                <div className="market__left">
                    <div className="market__left_info">
                            <span className="market__left_version">
                            <span className="yellow">ALPHA</span> v.0.1
                        </span>
                        <div className="market__left_title">
                            <span>
                                Return to the world where <span className="yellow">yoU</span>
                            control the music
                            </span>
                        </div>
                        <span className="market__left_subtitle">Our creator toolkit makes it easy to create an NFT collection,
                            with tooling that scales with your creative ambitions.</span>
                    </div>
                    <div className="market__left_buttons">
                        <button className="button1">Try Demo
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.41083 10.4108L5.58917 11.5892L11.1783 5.99999L5.58917 0.410828L4.41083 1.58916L7.98833 5.16666H0V6.83333H7.98833L4.41083 10.4108Z"
                                    fill="#06020D"/>
                            </svg>
                        </button>
                        <button className="button2">Whitepaper</button>
                    </div>
                </div>
            </div>
            <Dashboard/>
        </div>
    );
};

export default Market;