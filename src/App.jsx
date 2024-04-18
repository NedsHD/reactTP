import "./App.css";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";

function App() {
  const [character, setCharacter] = useState([]);

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

      const mezclarId = [...allCharacters];
      for (let i = mezclarId.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezclarId[i], mezclarId[j]] = [mezclarId[j], mezclarId[i]];
      }

      const tenRandomCharacters = mezclarId.slice(0, 10);
      setCharacter(tenRandomCharacters);
      console.log(allCharacters);
    };

    fetchAllCharacters();
  }, []);

  return (
    <>
      {character.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </>
  );
}

export default App;