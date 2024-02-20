import style from "./pokenombre.module.css";
import { useEffect, useState } from "react";
function pokeNombre({name}){
    

    return(
        <div className={style["nombre-conteiner"]}>
            {name}
        </div>
    );

}export default pokeNombre;

