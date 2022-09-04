import React from 'react';
import "./NftDes.scss"
import Button from "../../../entities/ui/Button";

const NftDes = () => {
    return (
        <div className="NftDes">


            <div className="NftDes__profile">

                <div className="left">

                    <img className="img"
                         src="https://avatars.mds.yandex.net/i?id=2a00000179f5ab53c67340ae5e78bc38c0d2-4089855-images-thumbs&n=13" alt=""/>
                    <div className="NftDes__profile_titles">
                        <h2>2022</h2>
                        <div>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.3099 5.18071C12.3253 5.06471 12.3333 4.94871 12.3333 4.83337C12.3333 3.24737 10.9046 1.97471 9.31925 2.19004C8.85725 1.36804 7.97725 0.833374 6.99992 0.833374C6.02258 0.833374 5.14258 1.36804 4.68058 2.19004C3.09192 1.97471 1.66659 3.24737 1.66659 4.83337C1.66659 4.94871 1.67459 5.06471 1.68992 5.18071C0.867918 5.64337 0.333252 6.52337 0.333252 7.50004C0.333252 8.47671 0.867918 9.35671 1.68992 9.81937C1.67454 9.93451 1.66674 10.0505 1.66659 10.1667C1.66659 11.7527 3.09192 13.022 4.68058 12.81C5.14258 13.632 6.02258 14.1667 6.99992 14.1667C7.97725 14.1667 8.85725 13.632 9.31925 12.81C10.9046 13.022 12.3333 11.7527 12.3333 10.1667C12.3333 10.0514 12.3253 9.93537 12.3099 9.81937C13.1319 9.35671 13.6666 8.47671 13.6666 7.50004C13.6666 6.52337 13.1319 5.64337 12.3099 5.18071ZM6.30325 10.444L3.85859 7.96804L4.80792 7.03204L6.31258 8.55604L9.19725 5.69337L10.1359 6.64004L6.30325 10.444Z"
                                    fill="#E7B672"/>
                            </svg>
                            <span>Eternal Hunger</span>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <Button children={<svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.9999 1.82922C8.0919 0.994304 6.90341 0.530923 5.6699 0.530884C5.01702 0.531564 4.37071 0.66135 3.76818 0.912774C3.16565 1.1642 2.61879 1.5323 2.15907 1.99588C0.198236 3.96505 0.199069 7.04505 2.16074 9.00588L8.27074 15.1159C8.4124 15.3651 8.68574 15.5259 8.9999 15.5259C9.1289 15.5246 9.25581 15.4931 9.37043 15.4339C9.48506 15.3748 9.5842 15.2895 9.6599 15.1851L15.8391 9.00588C17.8007 7.04422 17.8007 3.96505 15.8374 1.99255C15.3779 1.52981 14.8315 1.16246 14.2295 0.91162C13.6276 0.660775 12.982 0.531383 12.3299 0.530884C11.0964 0.531085 9.90799 0.994444 8.9999 1.82922ZM14.6591 3.17088C15.9616 4.48005 15.9624 6.52505 14.6607 7.82755L8.9999 13.4884L3.33907 7.82755C2.0374 6.52505 2.03824 4.48005 3.3374 3.17422C3.97074 2.54422 4.79907 2.19755 5.6699 2.19755C6.54074 2.19755 7.36574 2.54422 7.99407 3.17255L8.41074 3.58922C8.48806 3.66667 8.5799 3.72812 8.68099 3.77005C8.78209 3.81197 8.89046 3.83355 8.9999 3.83355C9.10935 3.83355 9.21772 3.81197 9.31881 3.77005C9.41991 3.72812 9.51175 3.66667 9.58907 3.58922L10.0057 3.17255C11.2657 1.91505 13.4007 1.91838 14.6591 3.17088Z"
                            fill="#06020D"/>
                    </svg>
                    }
                            color={"#06020D"}
                            background={"none"}
                            border={"1px solid rgba(0, 0, 0, 0.2)"} text={"10"}/>

                    <Button children={<svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.5 8C0.5 9.37833 1.62167 10.5 3 10.5C3.66167 10.5 4.26 10.2375 4.7075 9.81667L9.7 12.67C9.685 12.7783 9.66667 12.8867 9.66667 13C9.66667 14.3783 10.7883 15.5 12.1667 15.5C13.545 15.5 14.6667 14.3783 14.6667 13C14.6667 11.6217 13.545 10.5 12.1667 10.5C11.505 10.5 10.9067 10.7625 10.4592 11.1833L5.46667 8.33083C5.48167 8.22167 5.5 8.11333 5.5 8C5.5 7.88667 5.48167 7.77833 5.46667 7.66917L10.4592 4.81667C10.9067 5.2375 11.505 5.5 12.1667 5.5C13.545 5.5 14.6667 4.37833 14.6667 3C14.6667 1.62167 13.545 0.5 12.1667 0.5C10.7883 0.5 9.66667 1.62167 9.66667 3C9.66667 3.11333 9.685 3.22167 9.7 3.33083L4.7075 6.18333C4.24667 5.74557 3.63561 5.50102 3 5.5C1.62167 5.5 0.5 6.62167 0.5 8Z"
                            fill="#06020D"/>
                    </svg>
                    } color={"#06020D"} background={"none"} border={"1px solid rgba(0, 0, 0, 0.2)"}/>
                    <Button children={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.99992 8.33337C9.08325 8.33337 8.33325 9.08337 8.33325 10C8.33325 10.9167 9.08325 11.6667 9.99992 11.6667C10.9166 11.6667 11.6666 10.9167 11.6666 10C11.6666 9.08337 10.9166 8.33337 9.99992 8.33337ZM14.9999 8.33337C14.0833 8.33337 13.3333 9.08337 13.3333 10C13.3333 10.9167 14.0833 11.6667 14.9999 11.6667C15.9166 11.6667 16.6666 10.9167 16.6666 10C16.6666 9.08337 15.9166 8.33337 14.9999 8.33337ZM4.99992 8.33337C4.08325 8.33337 3.33325 9.08337 3.33325 10C3.33325 10.9167 4.08325 11.6667 4.99992 11.6667C5.91659 11.6667 6.66659 10.9167 6.66659 10C6.66659 9.08337 5.91659 8.33337 4.99992 8.33337Z"
                            fill="#06020D"/>
                    </svg>

                    } color={"#06020D"} background={"none"} border={"1px solid rgba(0, 0, 0, 0.2)"}/>
                </div>

            </div>

            <span className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, id vitae posuere ut ac. In faucibus
                fringilla vitae volutpat urna morbi. Arcu donec nam amet, diam...
            </span>

        </div>
    );
};

export default NftDes;