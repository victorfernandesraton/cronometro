/* eslint-disable indent */
import React from "react"

import { useMenu } from "../components/Menu/Menu-context"

import Conometro from "../components/Conometro"
import CountDown from "../components/countDown/CountDownView-container"

const MainScreen = () => {
	const [value] = useMenu()

	switch (value) {
		default:
		case 0:
			return (
				<>
					<Conometro />
				</>
			)
		case 1:
			return <CountDown />
	}
}

export default MainScreen
