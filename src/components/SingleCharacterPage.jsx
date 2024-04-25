import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Lógica para cargar los detalles del personaje utilizando su ID
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          {/* Muestra otros detalles del personaje según sea necesario */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default SingleCharacterPage;
