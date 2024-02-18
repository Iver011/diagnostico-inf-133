import { useEffect, useState } from "react";
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
            <div className="image-conteiner">
                <Image src={imagen} width={250} height={250} ></Image>
            </div>
    );

}export default PokeImg;
