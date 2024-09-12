// components/Card.js
import * as React from "react";
import "./card.css";  // Estilos personalizados para la tarjeta

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

export default Card;
