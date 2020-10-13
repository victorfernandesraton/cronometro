import React from "react"
import { aryIannaTimeZones } from "./TimeZone-constants"
import Clock from "../layout/ClockView-container"
import { extractCity, parseHours } from "./TimeZone-utils"
import { format } from "date-fns"
import { Information, InformationContainer } from "./TimeZone-style"
function TimeZOneItem({ date = new Date(Date.now()), locale }) {
	if (!aryIannaTimeZones.find((el) => el === locale)) {
		return <div>Loccalidssade inválida</div>
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
			}}
		>
			<Clock
				style={{
					justifyContent: "start",
					marginLeft: 50,
				}}
				{...parseHours(date)}
			/>
			<InformationContainer>
				<Information>{extractCity(locale)}</Information>
				<Information>{format(date, "d MMMM yyyy")}</Information>
			</InformationContainer>
		</div>
	)
}

export default TimeZOneItem
