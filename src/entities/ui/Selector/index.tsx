import React, {FC} from 'react';
import './selector.scss';

interface SelectorProps {
    data: any
}

const Selector: FC<SelectorProps> = ({data}) => {
    return (
        <div className="selector">
            <select className="selector__select">
                {
                    data && data.map((el: any) => (
                        <option key={el}>{el}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Selector;