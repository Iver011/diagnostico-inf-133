import sty from "./pokestats.module.css";
const { useState, useEffect } = require("react");

function PokeStats({stats}){
    
    
            
              
          const statList=stats.map((stat, index) => (
               <div className={sty.item} key={index}>
                  <div className={sty.name}>{stat.stat.name}:</div>
                  <div className={sty.info}>{stat.base_stat}</div>
               </div>
              ));
      


      
    return(
        <div className={sty["stats-conteiner"]} style={{whiteSpace:"pre-line"}}>
            <p>{statList}</p>
        </div>

    );

}export default PokeStats;