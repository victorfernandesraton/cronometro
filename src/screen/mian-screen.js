import React from "react"

import { useMenu } from "../components/Menu/Menu-context"

import Conometro from "../components/Conometro"
import CountDown from "../components/countDown/CountDownView-container"

const MainScreen = () => {
	const [value] = useMenu()

	switch (value) {
	case 1:
		return <CountDown />
	default:
	case 2:
		return (
			<>
				<Conometro />
			</>
		)
	}
}

export default MainScreen
