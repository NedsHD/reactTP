import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SpecialCaracter from "./SpecialCaracter"; 

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const allCharacters = [];
      let nextUrl = "https://rickandmortyapi.com/api/character";

      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();

        allCharacters.push(...data.results);
        nextUrl = data.info.next;
      }

      const shuffledCharacters = [...allCharacters].sort(() => Math.random() - 0.5);
      const tenRandomCharacters = shuffledCharacters.slice(0, 10);
      setCharacters(tenRandomCharacters);
    };

    fetchAllCharacters();
  }, []);

  return (
    <>
      {characters.map((character) => (
        <NavLink key={character.id} to={`/character/${character.id}`}>
          <SpecialCaracter character={character} />
        </NavLink>
      ))}
    </>
  );
};

export default Home;
