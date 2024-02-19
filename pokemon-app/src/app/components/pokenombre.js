import style from "./pokenombre.module.css";
import { useEffect, useState } from "react";
function pokeNombre({url}){
    const [nombre,setnombre]=useState("");

    useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setnombre(data.name)
        })

    },[])

    return(
        <div className={style["nombre-conteiner"]}>
            {nombre}
        </div>
    );

}export default pokeNombre;