import api from "../api";
import { useEffect, useState } from "react";

const Coba = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // use fetch via api or native fetch; using native fetch here to call external API
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((data) => setList(data.results))
      .catch(() => alert("error"));
  }, []);

  return (
    <>
      {list.map()}
      <ul>
        {list.map((e, i) => (
          <a key={i} href={e.url} target="_blank">
            <li key={i}>{e.name}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Coba;
