import React from "react"
import Contador from "./Contador"
import LabelRelogio from "./LabelRelogio"
import "../App.css"
import Button from "@material-ui/core/Button"

class Cronometro extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			segundos: 0,
			minutos: 0,
			stop: false,
			nameStop: "Stop",
			name: "Relógio",
			parcial: "",
		}
	}
	zerarCronometro() {
		this.state.segundos = 0
		this.state.minutos = 0
		this.state.parcial = ""
	}

	parcial() {
		let p = this.state.minutos + ":" + this.state.segundos + "\n\n"
		this.state.parcial = this.state.parcial + p
	}

	pararTempo() {
		this.setState({
			stop: !this.state.stop,
		})
		if (this.state.stop) this.state.nameStop = "Stop"
		else this.state.nameStop = "Start"
	}

	incrementar() {
		if (this.state.stop === false) {
			this.setState(function (state, props) {
				if (state.segundos >= 5) {
					this.zerar()
					this.incrementarMinuto(state)
				}
				return { segundos: state.segundos + 1 }
			})
		}
	}

	incrementarMinuto(state) {
		this.setState(() => {
			return { minutos: state.minutos + 1 }
		})
	}

	zerar() {
		this.setState({
			segundos: 0,
		})
	}

	componentDidMount() {
		if (!this.state.stop) {
			this.timer = setInterval(() => this.incrementar(), 1000)
		}
	}

	render() {
		return (
			<div className="container">
				<LabelRelogio name={this.state.name} />
				<Contador minutos={this.state.minutos} segundos={this.state.segundos} />
				<Button onClick={() => this.zerarCronometro()}>Zerar</Button>
				<Button onClick={() => this.pararTempo()}>Start/Stop</Button>
				<Button onClick={() => this.parcial()}>Parcial</Button>
				<LabelRelogio name={this.state.parcial} />
			</div>
		)
	}
}

export default Cronometro
