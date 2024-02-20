'use client'
import Image from "next/image";
import styles from "./page.module.css";
import PokeImg from "./components/pokeimag";
import PokeNombre from "./components/pokenombre";
import PokeId from "./components/pokeid";
import PokeAbout from "./components/pokeabout";
import PokeStats from "./components/pokestats";
import { useEffect, useState } from "react";

export default function Home() {  
  const [id, setId] = useState(2);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setPokemonData(data)
    })
  },[id])
  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  
  const next =()=>{
    setId(id+1)
  }

  const prev=()=>{
    setId(id-1)
  }
  return (
    
    <main className={styles.main}>
      <div className={styles["sub"]}>
      <div className={styles["top-pokemon"]}>
        <div className={styles.titulo}>My Pokemon</div>
        <PokeNombre name={pokemonData.name}></PokeNombre>
        <PokeId id={pokemonData.id}></PokeId>
        <PokeImg img={pokemonData.sprites.front_default}></PokeImg>
      </div>
      <div className={styles["info-pokemon"]}>
        <div className={styles["about"]}>About</div>
        <hr className={styles.line}></hr>
        <PokeAbout type={pokemonData.types.map((array) => array.type.name).join(", ")} peso={pokemonData.weight} 
        altura={pokemonData.height} skills={pokemonData.abilities.map((skills)=>skills.ability.name).join(", ")}></PokeAbout>
        <div className={styles.stats}>Stats</div>
        <PokeStats stats={pokemonData.stats}></PokeStats>
      </div>
      </div>
      <button  className={styles.arrow} id={styles.sig} onClick={next}>NEXT</button>
      <button  className={styles["arrow"]} id={styles.prev} onClick={prev}>PREV</button>
    </main>
  );
}
