import React, { useState, useEffect, useMemo } from "react"

import { format } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"
import { List, Typography } from "@material-ui/core"
import Clock from "../layout/ClockView-container"

import TimeZoneItem from "./TimeZoneItem"

import {
	aryIannaTimeZones,
	defaultZones as initialZones,
} from "./TimeZone-constants"
import { generateZones, parseHours } from "./TimeZone-utils"
import { ptBR } from "date-fns/locale"

function TimeZoneView({ defaultZones = [...initialZones] }) {
	const [date, setDate] = useState(Date.now())
	const [timeZones] = useState(defaultZones)

	const zones = useMemo(() => {
		return aryIannaTimeZones.map((el) => generateZones(el))
	}, [])

	useEffect(() => {
		let timer = setInterval(() => {
			setDate(Date.now())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>Relógio Mundial</h1>
			</div>
			<div>
				<div style={{ textAlign: "center" }}>
					<Typography varieant="h6">Brasília</Typography>
				</div>

				<Clock {...parseHours(new Date(date))} />
				<div style={{ textAlign: "center" }}>
					<Typography variant="h6">
						{format(new Date(date), "EEEE d MMMM yyyy", {
							locale: ptBR,
						})}
					</Typography>
				</div>
			</div>

			<List
				style={{
					height: "50vh",
					overflow: "auto",
				}}
			>
				{timeZones.length > 0 &&
					timeZones.map((el, i) => {
						if (!zones.find((z) => z.timezone === el)) {
							return <div>{`Não encontrado ${el}`}</div>
						}
						return (
							<TimeZoneItem
								key={i}
								date={utcToZonedTime(new Date(date), el)}
								locale={el}
							/>
						)
					})}
			</List>
		</>
	)
}

export default TimeZoneView
