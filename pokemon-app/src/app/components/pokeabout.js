import { useEffect, useState } from "react";
import style from "./pokeabout.module.css";

function PokeAbout({type,peso,altura,skills}){
    

    return (
        <div className={style["about-container"]}>
            <div className={style["item"]}>
                <div className={style["label"]}>Type:</div>
                <div className={style["value"]}>{type}</div>
            </div>
    
            <div className={style["item"]}>
                <div className={style["label"]}>Height:</div>
                <div className={style["value"]}>{altura/10} m</div>
            </div>
    
            <div className={style["item"]}>
                <div className={style["label"]}>Weight:</div>
                <div className={style["value"]}>{peso/10} kg</div>
            </div>
    
            <div className={style["item"]}>
                <div className={style["label"]}>Abilities:</div>
                <div className={style["value"]}>{skills}</div>
            </div>
        </div>
    );
} export default PokeAbout;