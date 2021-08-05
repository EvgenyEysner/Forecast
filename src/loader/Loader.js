import React from 'react'
import './Loader.css'


let Loader = () => {
    return(
        <div className = "wrapper">
            <div className = "lds_ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
   
    )
}

export default Loader