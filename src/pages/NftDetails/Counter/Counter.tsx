import React, {FC} from 'react';
import Button from "../../../entities/ui/Button";
import "./Counter.scss"

interface Interface {
    count: number,
    setCount: any
}

const Counter: FC<Interface> = ({count, setCount}) => {
    return (
        <div className="Counter">
            <div className="Counter__count">
                <div className="Counter__count_left">
                    <span>Price</span>
                    <h2>45.5 Near</h2>
                </div>
                <div className="Counter__count_right">
                    <button
                        onClick={() => {
                            if (count > 0) {
                                setCount(count-1)
                            }
                        }}
                        className={count > 0 ? "button active" : "button"}>-
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => {
                            setCount(count+1)
                        }}
                        className={"button active"}>+
                    </button>
                </div>
            </div>

            <button className="ConnectWallet">
                Connect Wallet
            </button>

        </div>
    );
};

export default Counter;