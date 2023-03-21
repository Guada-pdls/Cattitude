import React from "react";
import "./NotFound.css";
import angryCat from "./AngryCat.jpeg";

const NotFound = () => {
  return (
    <div className="container-404">
      <h5>404 Error</h5>
      <p> Page not found. Meow!</p>
      <img src={angryCat} alt="Angry cat" />
    </div>
  );
};

export default NotFound;
