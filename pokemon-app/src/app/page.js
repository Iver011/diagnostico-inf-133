'use client'
import Image from "next/image";
import styles from "./page.module.css";
import PokeImg from "./components/pokeimag";
import PokeNombre from "./components/pokenombre";
import PokeId from "./components/pokeid";
import PokeAbout from "./components/pokeabout";
import PokeStats from "./components/pokestats";

export default function Home() {
  const url='https://pokeapi.co/api/v2/pokemon/151'

  return (
    <main className={styles.main}>
      <div className={styles["top-pokemon"]}>
      <div className={styles.titulo}>My Pokemon</div>
      <PokeNombre url={url}></PokeNombre>
      <PokeId url={url}></PokeId>
         <PokeImg url={url}></PokeImg>
         </div>
         <div className={styles["info-pokemon"]}>
          <div className={styles["about"]}>About</div>
          <hr className={styles.line}></hr>
         <PokeAbout url={url}></PokeAbout>
         <div className={styles.stats}>Stats</div>
         <PokeStats url={url}></PokeStats>
         </div>
    </main> 
  );
}


