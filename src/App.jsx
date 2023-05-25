import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

const App = () => {
  const [nombre, setNombre] = useState("Vanesa");

  let cantidad = 50;
  return (
    <div>
      <Navbar />
      <ItemListContainer nombre={nombre} cantidad={cantidad} />
      <button onClick={() => setNombre("Nuevo Usuario")}>
        Cambiar Usuario
      </button>
    </div>
  );
};

export default App;

// ProductsList(nombre)
