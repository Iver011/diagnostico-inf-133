import { useEffect, useState } from "react";
import style from "./pokeimag.module.css"
import Image from "next/image";
function PokeImg({url}){

    const [imagen,setImagen]=useState("");

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setImagen(data.sprites.front_default)
        
        })
    },[])
    return(
            <div className={style["image-conteiner"]}>
                <Image src={imagen} width={325} height={325} ></Image>
            </div>
    );

}export default PokeImg;
