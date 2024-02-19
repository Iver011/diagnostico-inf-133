import { useEffect, useState } from "react";
import style from "./pokeabout.module.css";

function PokeAbout({url}){
    const [type,setType]=useState("");
    const [altura,setAltura]=useState("");
    const [peso,setPeso]=useState("");
    const [skills,setSkills]=useState("")

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setType(data.types.map((array)=>array.type.name).join(", ")),
            setAltura(data.height),
            setPeso(data.weight),
            setSkills(data.abilities.map((skills)=>skills.ability.name).join(", "))
        
            
        })


    },[])



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


