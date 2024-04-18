import React from "react";
import UserDetails from "./UserDetails";
/* import ButtonSection from "./ButtonSection"; */
import "./Card.css";

const Card = ({ character }) => {
  return (
    <div className="card">
      <UserDetails character={character} />
      {/* <ButtonSection character={character} /> */}
    </div>
  );
};

export default Card;