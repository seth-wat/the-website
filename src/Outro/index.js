import {GoArrowDown} from "react-icons/go";
import {IconContext} from "react-icons/lib";

import React from "react";

export const Outro = (props) => {
    return(
        <div className='icon-box'>
            <IconContext.Provider value={{
                color: "white", size: "3em", className: props.isTyping ? 'gone' : 'arrow-down'
            }}>
                <GoArrowDown onClick={() => {
                    const work = document.querySelector('.contact-section')
                    work.scrollIntoView({behavior: 'smooth'})
                }}/>
            </IconContext.Provider>
        </div>
    )
}