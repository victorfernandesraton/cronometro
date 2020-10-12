import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import { useMenu } from "../Menu/Menu-context"

export default function SimpleBottomNavigation() {
	const [value, setValue] = useMenu()

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue)
			}}
			showLabels
		>
			<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
			<BottomNavigationAction label="Contador" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
		</BottomNavigation>
	)
}
