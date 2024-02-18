import { useEffect, useState } from "react";

function PokeId({url}){
    const[id,setId]=useState("");

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setId(data.id)})
    },[])

    return(
        <div className="id-conteiner">
            {id}
        </div>

    );
}export default PokeId;