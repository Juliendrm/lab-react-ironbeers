import React from "react";
import { useParams, Link } from "react-router-dom";

const OneBeer = ({ beers }) => {
  let { beerId } = useParams();
  if (!beers) {
    return <p>loading...</p>;
  }
  let beer = beers.find((element) => {
    //console.log(typeof element._id, typeof beerId);
    return element._id === beerId;
  });

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
      <p>Created by: {beer.contributed_by}</p>
    </div>
  );
};

export default OneBeer;
