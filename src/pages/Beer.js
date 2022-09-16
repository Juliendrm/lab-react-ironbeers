import { Link } from "react-router-dom";

function Beer({ beers }) {
  const style = { width: "80px" };

  return (
    <div className="Beer">
      <header>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="newBeerImage"
          />
        </Link>
      </header>
      <div>
        <h1>Beer Page</h1>
      </div>
      {beers.map((element) => {
        return (
          <div>
            <Link to="/beers/:beerId">
              <img style={style} src={element.image_url} alt="beer_image" />
            </Link>
            <h1>{element.name}</h1>
            <h2>{element.tagLine}</h2>
            <p>{element.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beer;
