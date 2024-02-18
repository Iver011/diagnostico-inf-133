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
        <div className="conteiner-nombre">
            {nombre}
        </div>
    );

}export default pokeNombre;