import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HourglassFullIcon from "@material-ui/icons/HourglassFull"
import TimerIcon from "@material-ui/icons/Timer"
import LanguageIcon from "@material-ui/icons/Language"
import { useMenu } from "../Menu/Menu-context"

export default function SimpleBottomNavigation() {
	const [value, setValue] = useMenu()

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				console.log(newValue)
				setValue(newValue)
			}}
		>
			<BottomNavigationAction label="Conômetro" icon={<TimerIcon />} />
			<BottomNavigationAction label="Contador" icon={<HourglassFullIcon />} />
			<BottomNavigationAction label="Relogio" icon={<LanguageIcon />} />
		</BottomNavigation>
	)
}
