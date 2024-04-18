import React from "react";
import "./UserDetails.css";

const UserDetails = ({ character }) => {
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
    <div className="contenedor">
      <div className="image">
        <img src={character.image} alt={`avatar de ${character.name}`}></img>
      </div>
      <div className="contenido">
        <h2>{character.name}</h2>
        <p className="status">
          <div className={`bolita ${getStatusClassName()}`}></div>
          {character.status} - {character.species}
        </p>
        <p className="text-gray-principal">visto por ultima vez en:</p>
        <p className="location">{character.location.name}</p>
        <p className="text-gray">visto por primera vez en el episodio:</p>
        <p className="view">{character.type}</p>
      </div>
    </div>
  );
};

export default UserDetails;