import style from "./pokeid.module.css"

import { useEffect, useState } from "react";

function PokeId({url}){
    const[id,setId]=useState("");

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setId(data.id)})
    },[])

    return(
        <div className={style["id-conteiner"]}>
            {`#${String(id).padStart(3,'0')}`}
        </div>

    );
}export default PokeId;