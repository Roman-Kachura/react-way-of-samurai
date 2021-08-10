import React from "react";
import preloader from './Preload.svg';
import s from './Preloader.module.css'

const Preload = (props:any)=>{
    return <div className={s.preloadBlock}>
        <img src={preloader}/>
    </div>
}

export default Preload;