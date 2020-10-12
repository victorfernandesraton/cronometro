import React from "react"
import Conometro from "../components/Conometro"
import CountDown from "../components/countDown/CountDownView-container"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { useMenu } from "../components/Menu/Menu-context"

const MainScreen = () => {
	const [value] = useMenu()

	switch (value) {
	case 1:
		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<CountDown />
			</MuiPickersUtilsProvider>
		)	
	default:
	case 2:
		return (<>
			<Conometro type="teste"/>
		</>)
	}
}

export default MainScreen
