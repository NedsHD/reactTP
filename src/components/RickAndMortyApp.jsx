import React, { useEffect, useState } from "react";
import Caracter from "./SpecialCaracter";
import { useSearchParams } from "react-router-dom";

const RickAndMortyApp = () => {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      // Si no hay ID de personaje, no hacemos nada
      return;
    }

    fetchCharacterAndEpisodes(id);
  }, [id]);

  const fetchCharacterAndEpisodes = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el personaje");
        }
        return response.json();
      })
      .then((data) => {
        setCharacter(data);
        fetchEpisodes(data.episode.slice(0, 5));
      })
      .catch((error) => console.error(error));
  };

  const fetchEpisodes = (episodeUrls) => {
    const promises = episodeUrls.map((url) =>
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los episodios");
        }
        return response.json();
      })
    );

    Promise.all(promises)
      .then((episodes) => {
        setEpisodes(episodes);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {character && (
        <Caracter key={character.id} character={character} episodes={episodes} />
      )}
    </>
  );
};

export default RickAndMortyApp;
