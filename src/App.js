import React from "react"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

import MenuProvider from "./components/Menu/Menu-context"
import MainScreen from "./screen/mian-screen"

import Navbar from "./components/layout/Navbar"
const App = () => {
	return (
		<>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<MenuProvider>
					<Navbar />
					<MainScreen />
				</MenuProvider>
			</MuiPickersUtilsProvider>
		</>
	)
}

export default App
