import axios from "axios";
import { useEffect, useState } from "react";

const Coba = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => {
        setList(response.data.results);
        //   console.log(response.data.results);
      })
      .catch((err) => {
        alert("error");
      });
  });

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
