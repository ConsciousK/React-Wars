import React, { useState, useEffect } from "react";
import Character from "./Character";
import './components.css';
import axios from 'axios'

export default function CharacterList() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("https://swapi.co/api/people/").then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      });
    }, []);
  

  return (
    <div>
      {data.map(item => {
        return (
          <Character
            character={item}
            key={item.height}
          />
        );
      })}
    </div>
  );
}
