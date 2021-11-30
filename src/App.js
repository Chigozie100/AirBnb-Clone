import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
    )
  })
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}
export default App;
