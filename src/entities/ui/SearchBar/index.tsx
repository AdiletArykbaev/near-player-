import React, {FC, useState} from 'react';
import './search.scss';

interface SearchBarProps {
    colorSvg: string,
    placeholder: string,
    type: number,
}

const SearchBar: FC<SearchBarProps> = ({colorSvg, type, placeholder}) => {
    const [input, setInput] = useState(false);

    return (
        <form style={{border: `1px solid ${type === 1 ? "rgba(252, 252, 252, 0.2)" : "rgba(6, 2, 13, 0.2)"}`}}
              className={`search ${input ? "search-padding" : ''}`}>
            <label>
                {
                    !input
                        ? <span className="search__img">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.33332 14C8.81247 13.9997 10.249 13.5045 11.4142 12.5933L15.0775 16.2566L16.2558 15.0783L12.5925 11.415C13.5042 10.2497 13.9996 8.81282 14 7.33329C14 3.65746 11.0092 0.666626 7.33332 0.666626C3.65749 0.666626 0.666656 3.65746 0.666656 7.33329C0.666656 11.0091 3.65749 14 7.33332 14ZM7.33332 2.33329C10.0908 2.33329 12.3333 4.57579 12.3333 7.33329C12.3333 10.0908 10.0908 12.3333 7.33332 12.3333C4.57582 12.3333 2.33332 10.0908 2.33332 7.33329C2.33332 4.57579 4.57582 2.33329 7.33332 2.33329Z"
                                    fill={colorSvg}/>
                            </svg>
                    </span>
                        : ''
                }
                <input onBlur={() => setInput(false)} onFocus={() => setInput(true)}
                       placeholder={placeholder} type="text"
                       className={`search__input ${input ? "search__input_active" : ''} ${type === 1 ? "search__input_light" : type === 2 ? "search__input_dark" : "search__input_black"}`}/>
            </label>
        </form>
    );
};

export default SearchBar;