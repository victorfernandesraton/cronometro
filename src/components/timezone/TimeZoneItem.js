import React from "react"
import { format, formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"

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
					<div style={{
						display: "flex",
						flexDirection: "column"
					}}>
						<Clock {...parseHours(date)} /> 
						<Typography variant="caption">{format(date, "EEEE d MMMM yyyy",{
							locale: ptBR,
						})}</Typography>
						<Typography variant="caption">{formatDistance(date, Date.now(),{
							locale: ptBR
						})}</Typography>
					</div>
				}
			/>
			
		</ListItem>
	)
}

export default TimeZOneItem
