import React, {FC} from 'react';
import './cardList.scss';
import ListRefresh from "../../../features/ui/ListRefresh";

interface cardListProps {
    children: any
}

const CardList: FC<cardListProps> = ({children}) => {
    return (
        <section className="card__list">
            <div className="card__list_refresh">
                <ListRefresh/>
            </div>
            <div className="card__list_row">
                {children}
            </div>
        </section>
    );
};

export default CardList;