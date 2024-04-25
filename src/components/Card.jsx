import React from "react";
import { Link } from "react-router-dom"; // Importa Link en lugar de NavLink
import "./Card.css"; // Asegúrate de importar el archivo CSS necesario para los estilos de la tarjeta

const Card = ({ character }) => {
  return (
    <div className="Card"> 
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
        {/* Otros detalles del personaje pueden agregarse aquí */}
      </Link>
    </div>
  );
};

export default Card;
