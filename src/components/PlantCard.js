import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [stock, setInStock] = useState(true)
  function stockOnClick() {
    setInStock(stockOnClick => !stockOnClick)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={stockOnClick}>In Stock</button>
      ) : (
        <button onClick={stockOnClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
