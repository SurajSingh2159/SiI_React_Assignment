import React, { useEffect, useState } from 'react'
import PlayersContext from './PlayersContext'
import axios from "axios"

const PlayerState = (props) => {
      const[data, setData] = useState([]);
      const getData = ()=>{
            try {
                  axios.get("https://api.npoint.io/20c1afef1661881ddc9c").then((response)=>{
                      return  (response.data.playerList.sort((a,b)=>{return a.Value - b.Value}));
                        // console.log("teamsList", response.data.teamsList);
                        // console.log("playerList", response.data.playerList);
                        // const PlayerArray = Object.keys(response.data)
                        // console.log( " type of " + typeof PlayerArray)
                        // console.log( " data " , data);
                        // console.log(response.data)
                  }).then((value)=>{
                        setData(value);
                      })
                  
            } catch (error) {
                  console.log(new Error('Problem occured...'))
            }
      }

      useEffect(()=>{
            getData();
      },[])

      const fromUTCToLocal = (utcDate)=>{
            let date = new Date(utcDate + ' UTC');
            return date.toLocaleString() 
      }

      

  return (
      <PlayersContext.Provider value={{data, fromUTCToLocal}}>
            {props.children}
      </PlayersContext.Provider>
    
  )
}

export default PlayerState;
