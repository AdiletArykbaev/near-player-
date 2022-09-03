import React, {FC} from 'react';
import './selector.scss';

interface SelectorProps {
    data: any
}

const Selector: FC<SelectorProps> = ({data}) => {
    return (
        <select className="selector">
            {
                data && data.map((el: any) => (
                    <option>{el}H</option>
                ))
            }
        </select>
    );
};

export default Selector;