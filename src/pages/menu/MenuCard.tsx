import React from "react";

const MenuCard = ({ title, desc, image }) => {
  return (
    <div className="menu-item">
      <img src={image} alt="pizza" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default MenuCard;
