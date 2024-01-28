import React from "react";

function Button(props) {
  const { name, onClick } = props; // mesma coisa que embaixo
  // const name = props.name
  return (
    <button onClick={onClick}>{name}</button> // la no index.js a proprieda onClick e name vai ficar no lugar de {onClick} {name}, respectivamente
  )
}
export default Button;
