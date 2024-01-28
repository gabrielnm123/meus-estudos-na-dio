import React from "react";

function ComponentA(props) {
  return (
    <div>
      Componente A =D
      <div>{props.children}</div> {/* children server pra colocar mais componentes dentro de componentes */}
    </div>
  )
}

export default ComponentA
