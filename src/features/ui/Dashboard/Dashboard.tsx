import React from 'react';
import "./dashboard.scss";
import TwitterIcon from "./icons/TwitterIcon";
import DiscordIcon from "./icons/DiscordIcon";
import MouseIcon from "./icons/MouseIcon";
import ArrowIcon from "./icons/ArrowIcon";
import CardEvent from "./Events/CardEvent";
import img from "./imgs/Octopus.png";
import img2 from "./imgs/Nearmusic.png";
import img3 from "./imgs/Soon.png";


const Dashboard = () => {
    return (
        <div className="dashboard">
                <div className="dashboard__main">
                    <div className="dashboard__left">
                        <div className="dashboard__left_networks">
                            <TwitterIcon/>
                            <DiscordIcon/>
                        </div>
                        <a href="#test" className="dashboard__left_tips">
                            <MouseIcon/>
                            <ArrowIcon/>
                        </a>
                    </div>
                    <div className="dashboard__right">
                        <CardEvent image={img} aviable={true} name="Octopus Network"/>
                        <CardEvent image={img2} aviable={true} name="Octopus Network"/>
                        <CardEvent image={img3} aviable={false} name="Stay tuned!"/>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;