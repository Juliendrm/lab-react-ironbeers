import { Link } from "react-router-dom";

function NewBeer() {
  return (
    <>
      <header>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="newBeerImage"
          />
        </Link>
      </header>
      <div>
        <h1>New Beer Page</h1>
      </div>
    </>
  );
}

export default NewBeer;
