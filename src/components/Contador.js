import React from "react"
import "../App.css"

const Contador = (props) => (
	<h1 className="my-title">
		{props.minutos}:{props.segundos}
	</h1>
)

export default Contador
