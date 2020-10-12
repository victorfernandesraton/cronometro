import React from "react"

import MainScreen from "./screen/mian-screen"
import MenuProvider from "./components/Menu/Menu-context"
import Navbar from "./components/layout/Navbar"
const App = () => {
	return (
		<>
			<MenuProvider>
				<Navbar/>
				<MainScreen />
			</MenuProvider>
		</>
	)
}

export default App
