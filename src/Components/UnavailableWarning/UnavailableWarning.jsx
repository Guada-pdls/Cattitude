import React from "react";
import "./UnavailableWarning.css";
import { Link } from "react-router-dom";

const UnavailableWarning = ({factor}) => {

  return (
    <div className="container-warning-unavailable">
      <p>
        We're sorry, but the {factor === "product" ? "product" : "category"}  you're looking for is currently
        unavailable. Please try searching for a similar {factor === "product" ? "item" : "one"}.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to store
      </Link>
    </div>
  );
};

export default UnavailableWarning;
