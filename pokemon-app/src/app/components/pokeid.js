import style from "./pokeid.module.css"

import { useEffect, useState } from "react";

function PokeId({id}){
    

    return(
        <div className={style["id-conteiner"]}>
            {`#${String(id).padStart(3,'0')}`}
        </div>

    );
}export default PokeId;