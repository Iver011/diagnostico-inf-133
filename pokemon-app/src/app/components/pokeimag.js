import { useEffect, useState } from "react";
import style from "./pokeimag.module.css"
import Image from "next/image";
function PokeImg({img}){

    
    return(
            <div className={style["image-conteiner"]}>
                <Image src={img} width={325} height={325} ></Image>
            </div>
    );

}export default PokeImg;
