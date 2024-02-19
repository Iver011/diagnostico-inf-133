import sty from "./pokestats.module.css";
const { useState, useEffect } = require("react");

function PokeStats({url}){
    const [stats,setStats]=useState("")
    const [statList,setStatList]=useState("");

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
              
            const statsElements = data.stats.map((stat, index) => (
               <div className={sty.item} key={index}>
                  <div className={sty.name}>{stat.stat.name}:</div>
                  <div className={sty.info}>{stat.base_stat}</div>
               </div>
              ));
      
            setStatList(statsElements);

          });
      }, []);
    return(
        <div className={sty["stats-conteiner"]} style={{whiteSpace:"pre-line"}}>
            <p>{statList}</p>
        </div>

    );

}export default PokeStats;