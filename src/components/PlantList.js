import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
function PlantList() {
  const [plants, setPlants] = useState([])


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(plants => setPlants(plants))
  }, [])

  return (
    <ul className="cards">{plants.map((plant) => {
      return <PlantCard name={plant.name} key={plant.id}
        image={plant.image} price={plant.price} />
    }


    )}



    </ul>
  );
}

export default PlantList;
