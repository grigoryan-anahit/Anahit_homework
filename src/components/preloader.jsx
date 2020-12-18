import React from 'react';
import preloaderIMG from '../images/preloaderIMG.gif';

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloaderIMG} alt="Preloader" />
        </div>
    )
}

export default Preloader;