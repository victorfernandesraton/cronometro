import React from "react"
import { format } from "date-fns"
import { ListItem, ListItemText, Typography, Button } from "@material-ui/core"
import { Delete } from "@material-ui/icons"

import { ClockView as Clock } from "./TimeZone-style"
import { aryIannaTimeZones } from "./TimeZone-constants"
import { extractCity, parseHours } from "./TimeZone-utils"

function TimeZOneItem({ date = new Date(Date.now()), locale, deleteItem }) {
	if (!aryIannaTimeZones.find((el) => el === locale)) {
		return <div>Loccalidssade inválida</div>
	}
	return (
		<ListItem>
			<ListItemText
				primary={extractCity(locale)}
				secondary={
					<Typography variant="caption">{format(date, "d MMMM yyyy")}</Typography>
				}
			/>
			<Clock {...parseHours(date)} />
			<Button onClick={() => {
				deleteItem(locale)
			}} color="secondary"><Delete/></Button>
		</ListItem>
	)
}

export default TimeZOneItem
