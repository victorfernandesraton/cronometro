import React from "react"
import Conometro from "./components/Conometro"
import CountDown from "./components/countDown/CountDownView-container"

import {MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

const App = () => {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Conometro />
			<CountDown/>
		</MuiPickersUtilsProvider>
	)
}

export default App
