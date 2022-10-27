import React from "react";
import Navbar from "../src/components/navbar";
import Midsection from "./components/midsection";
import { Card } from "./components/Card";
import data from "./data";
import "./style.css";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar /> <hr color="#f1f1f1" />
      <Midsection/>
      <section className="card--section">
        <h4>Travel with peace of mind when you book on Airbnb</h4>
        <section className="cards-list">{cards}</section>
      </section>
    </>
  );
}

export default App;