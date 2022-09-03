import React from 'react';
import "./dashboard.scss";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dashboard__main">
                    <div className="dashboard__left">
                        <div className="dashboard__left_networks">

                            <svg className="twitter" width="18" height="14" viewBox="0 0 18 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.3609 3.66417C15.3717 3.81 15.3717 3.955 15.3717 4.1C15.3717 8.5375 11.9942 13.6508 5.82175 13.6508C3.92008 13.6508 2.15341 13.1 0.666748 12.1433C0.936748 12.1742 1.19675 12.185 1.47758 12.185C2.98841 12.1887 4.45645 11.6834 5.64508 10.7508C4.9446 10.7382 4.26556 10.507 3.70278 10.0898C3.14 9.67251 2.72157 9.08991 2.50591 8.42333C2.71341 8.45417 2.92175 8.475 3.14008 8.475C3.44091 8.475 3.74341 8.43333 4.02425 8.36083C3.26405 8.20735 2.58048 7.79529 2.08976 7.19474C1.59905 6.59418 1.33149 5.84221 1.33258 5.06667V5.025C1.78008 5.27417 2.29925 5.43 2.84925 5.45083C2.38849 5.14465 2.01068 4.72919 1.74953 4.24149C1.48838 3.7538 1.35201 3.20905 1.35258 2.65583C1.35258 2.0325 1.51841 1.46083 1.80925 0.962501C2.6527 2.00002 3.70467 2.8488 4.89703 3.45388C6.08939 4.05896 7.39555 4.40685 8.73091 4.475C8.67925 4.225 8.64758 3.96583 8.64758 3.70583C8.64736 3.26497 8.73404 2.82838 8.90265 2.42103C9.07126 2.01369 9.3185 1.64356 9.63024 1.33182C9.94198 1.02008 10.3121 0.772843 10.7194 0.604232C11.1268 0.435622 11.5634 0.348948 12.0042 0.349167C12.9709 0.349167 13.8434 0.754167 14.4567 1.40917C15.2082 1.26385 15.9289 0.989519 16.5867 0.598334C16.3363 1.37401 15.8115 2.03175 15.1109 2.44833C15.7774 2.37232 16.4288 2.19704 17.0434 1.92833C16.5844 2.59758 16.0155 3.18445 15.3609 3.66417Z"
                                    fill="#F9F7F7" fillOpacity="0.6"/>
                            </svg>

                            <svg className="discord" width="18" height="14" viewBox="0 0 18 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.3499 0.549999C11.1844 0.846405 11.0369 1.15252 10.9083 1.46667C9.6439 1.26671 8.35596 1.26671 7.0916 1.46667C6.96292 1.15252 6.81543 0.846405 6.64993 0.549999C5.45892 0.7535 4.3011 1.11795 3.20826 1.63333C1.25405 4.45357 0.367795 7.87746 0.708264 11.2917C1.9818 12.2491 3.41115 12.9792 4.93326 13.45C5.27986 12.9922 5.58918 12.5073 5.85826 12C5.36166 11.8169 4.88435 11.5852 4.43326 11.3083C4.55698 11.226 4.67401 11.1341 4.78326 11.0333C6.09865 11.6669 7.5399 11.996 8.99993 11.996C10.46 11.996 11.9012 11.6669 13.2166 11.0333C13.3333 11.1333 13.4499 11.225 13.5666 11.3083C13.1131 11.583 12.6362 11.8173 12.1416 12.0083C12.3995 12.5271 12.7006 13.0233 13.0416 13.4917C14.5618 13.0225 15.9887 12.2922 17.2583 11.3333C17.6069 7.9185 16.7199 4.49182 14.7583 1.675C13.6777 1.14895 12.5313 0.770558 11.3499 0.549999ZM6.23326 9.34167C5.81625 9.31173 5.42705 9.1214 5.14737 8.81064C4.86768 8.49988 4.71926 8.09285 4.73326 7.675C4.71715 7.2566 4.86484 6.8484 5.14494 6.53717C5.42505 6.22595 5.81548 6.03623 6.23326 6.00833C6.65105 6.03623 7.04148 6.22595 7.32159 6.53717C7.60169 6.8484 7.74938 7.2566 7.73326 7.675C7.74938 8.0934 7.60169 8.5016 7.32159 8.81282C7.04148 9.12405 6.65105 9.31377 6.23326 9.34167ZM11.7666 9.34167C11.3496 9.31173 10.9604 9.1214 10.6807 8.81064C10.401 8.49988 10.2526 8.09285 10.2666 7.675C10.2505 7.2566 10.3982 6.8484 10.6783 6.53717C10.9584 6.22595 11.3488 6.03623 11.7666 6.00833C12.1852 6.03414 12.5769 6.22325 12.8574 6.53496C13.1379 6.84666 13.2849 7.25604 13.2666 7.675C13.2849 8.09396 13.1379 8.50334 12.8574 8.81504C12.5769 9.12675 12.1852 9.31586 11.7666 9.34167Z"
                                    fill="#F9F7F7" fillOpacity="0.6"/>
                            </svg>

                        </div>
                        <div className="dashboard__left_tips">

                            <svg className="mouse" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.975 22H12C15.859 22 19 18.86 19 15V9C19 5.159 15.873 2.026 12.019 2H11.959C8.119 2.022 5 5.157 5 9V15C5 18.86 8.129 22 11.975 22ZM7 9C7.00184 7.67708 7.52715 6.40864 8.4612 5.47179C9.39524 4.53494 10.6621 4.00581 11.985 4C14.75 4.006 17 6.249 17 9V15C17 17.757 14.757 20 12 20H11.975C9.186 20 7 17.804 7 15V9Z"
                                    fill="#06020D"/>
                                <path d="M11 6H13V12H11V6Z" fill="#06020D"/>
                            </svg>

                            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.707 6.707L12.293 5.293L7.99997 9.586V0H5.99997V9.586L1.70697 5.293L0.292969 6.707L6.99997 13.414L13.707 6.707Z"
                                    fill="black"/>
                            </svg>

                        </div>
                    </div>
                    <div className="dashboard__right">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;