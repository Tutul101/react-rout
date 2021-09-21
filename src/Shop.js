import "./App.css";
import { useState, useEffect } from "react";
function Shop() {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Shop Page</h1>
      {items.map((item) => {
        return <h1>{item.item.name}</h1>;
      })}
    </div>
  );
}

export default Shop;
