import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Beer from "./pages/Beer";
import NewBeer from "./pages/New_Beer";
import RandomBeer from "./pages/Random_Beer";
import HomePage from "./pages/Home";
import OneBeer from "./pages/OneBeer";

function App() {
  const [beers, setBeers] = useState([]); // countries est le tableau d'objet du json, setCountries est la fonction qui  permet de re render sur le browser.

  useEffect(() => {
    // Here, we make the request with axios
    const config = {
      method: "get",
      url: "https://ih-beers-api2.herokuapp.com/beers",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setBeers(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(beers);

  const addNewBeer = (newBeer) => {
    setBeers([...beers, newBeer]);
  };
  //les Route créee le lien vers les pages initialisés grace aux components dans /pages.js
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beer beers={beers} />} />
        {/*We get the
        beers from axios and pass them as props to link them with Beer
        component*/}
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<OneBeer beers={beers} />} />
        <Route path="/random-eer" element={<RandomBeer beers={beers} />} />
        <Route path="/new-beer" element={<NewBeer addNewBeer={addNewBeer} />} />
      </Routes>
    </div>
  );
}

export default App;
