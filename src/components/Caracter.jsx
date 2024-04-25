import React from "react";
import "./Caracter.css";
import { NavLink } from "react-router-dom";

const Caracter = ({ character, episodes }) => {
  const getStatusClassName = () => {
    switch (character.status) {
      case "Alive":
        return "alive";
      case "Dead":
        return "dead";
      default:
        return "unknown";
    }
  };

  return (
    <div className="single-card">
      <div className="principal">
        <img src={character.image} alt={`avatar de ${character.name}`} />
        <div className="status">
          <div className={`bolita ${getStatusClassName()}`} />
          <p>
            {character.status} - {character.species}
          </p>
        </div>
        <p className="type">{character.name}</p>
      </div>
      <div className="secundario">
        <p className="texto-secundario">Episodios:</p>
        <div className="episode">
          {episodes.map((episodio) => (
            <div key={episodio.id} className="episode-contenedor">
              <p>
                {episodio.name} ({episodio.episode})
              </p>
              <p>{episodio.created}</p>
            </div>
          ))}
        </div>
      </div>
      <NavLink to={"/"}>
        <button className="button-home">Home</button>
      </NavLink>
    </div>
  );
};

export default Caracter;
