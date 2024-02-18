'use client'
import Image from "next/image";
import styles from "./page.module.css";
import PokeImg from "./components/pokeimag";
import PokeNombre from "./components/pokenombre";
import PokeId from "./components/pokeid";
export default function Home() {
  const url='https://pokeapi.co/api/v2/pokemon/50'

  return (
    <main className={styles.main}>
         <PokeImg url={url}></PokeImg>
         <PokeNombre url={url}></PokeNombre>
         <PokeId url={url}></PokeId>
    </main>
  );
}


