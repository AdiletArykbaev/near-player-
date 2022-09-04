import React, {FC} from 'react';
import "./SwitchCaser.scss"

interface Interface {
    setSwitcher: any,
    switcher: any
}

const SwitchCaser: FC<Interface> = ({setSwitcher, switcher}) => {
    return (
        <>
            <div className="switchCase">
                <div onClick={()=> setSwitcher(1)}
                    className={switcher === 1 ? "switchCaser active" : "switchCaser"}>
                    Buy or rent
                </div>
                <div onClick={()=> setSwitcher(2)}
                    className={switcher === 2 ? "switchCaser active" : "switchCaser"}>
                    AVA Beatstaking
                </div>
            </div>
        </>
    );
};

export default SwitchCaser;