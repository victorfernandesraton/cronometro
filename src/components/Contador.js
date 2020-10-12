import React from "react"
import "../App.css"

const Contador = (props) => (
	<h1 className="container">
		{props.minutos}:{props.segundos}
	</h1>
)

export default Contador
