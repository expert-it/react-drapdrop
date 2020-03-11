import React from "react";

const Image = ({ index, onClick, photo}) => {
 
  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <img
      style={{ cursor: "pointer" }}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt="img"
    />
  );
};

export default Image;
