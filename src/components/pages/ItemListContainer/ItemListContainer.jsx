import Counter from "../../common/counter/Counter";

export const ItemListContainer = ({ nombre, cantidad }) => {
  return (
    <>
      <h2>Bienvenido/a {nombre}</h2>
      <h3>Te invitamos a conocer nuestros {cantidad} productos en stock</h3>
      <h2>LISTADO DE PRODUCTOS</h2>

      <Counter />
    </>
  );
};
