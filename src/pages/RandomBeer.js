import React from "react";
import { Link } from "react-router-dom";

const RandomBeer = ({ beers }) => {
  if (!beers) {
    return <p>loading...</p>;
  }
  const randomIndex = Math.floor(Math.random() * beers.length);

  // get random item
  const beer = beers[randomIndex];
  console.log(beer);

  return (
    <div className="random-beer">
      <header>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="newBeerImage"
          />
        </Link>
      </header>
      <img src={beer.image_url} alt="beer" width="200px" />
      <h1>
        {beer.name} {beer.attenuation_level}
      </h1>

      <h2>
        {beer.tagline} {beer.first_brewed}
      </h2>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
