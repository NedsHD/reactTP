// SpecialCaracter.jsx
import React, { useEffect, useState } from "react";
import "./SpecialCaracter.css";
import { NavLink } from "react-router-dom";
const SpecialCaracter = () => {
  const [character, setCharacter] = useState(null);
  const [randomCharacterEpisodes, setRandomCharacterEpisodes] = useState([]);

  useEffect(() => {
    const fetchRandomCharacter = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character/");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomCharacter = data.results[randomIndex];
        setCharacter(randomCharacter);
        fetchCharacterEpisodes(randomCharacter);
      } catch (error) {
        console.error("Error fetching random character:", error);
      }
    };

    fetchRandomCharacter();
  }, []);

  const fetchCharacterEpisodes = async (randomCharacter) => {
    try {
      const episodeDetails = await Promise.all(randomCharacter.episode.map(async (episodeUrl) => {
        const response = await fetch(episodeUrl);
        return response.json();
      }));
      const limitedEpisodes = episodeDetails.slice(0, 5);
      setRandomCharacterEpisodes(limitedEpisodes);
    } catch (error) {
      console.error("Error fetching character episodes:", error);
    }
  };

  return (
    <div className="special-character-container">
      <div className="character-details-container">
        <h2>Special Character</h2>
        {character && (
          <>
            <div className="special-character-image">
              <img src={character.image} alt={character.name} />
            </div>
            <div className="character-details">
              <p>
                <strong>Name:</strong> {character.name}
              </p>
              <p>
                <strong>Status:</strong> {character.status}
              </p>
              <p>
                <strong>Species:</strong> {character.species}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="episode-cards-container">
        <h3>Episodes of Random Character</h3>
        <div className="episode-cards">
          {randomCharacterEpisodes.map((episode, index) => (
            <div className="episode-card" key={index}>
              <p><strong>Episode Number:</strong> {episode.id}</p>
              <p><strong>Release Date:</strong> {episode.air_date}</p>
              <p><strong>Episode Name:</strong> {episode.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="button-home">Home</button>
    </div>
  );
};

export default SpecialCaracter;