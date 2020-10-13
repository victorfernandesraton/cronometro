import React, { useState, useEffect, useCallback, useMemo } from "react"

import { format } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"
import { List, Typography } from "@material-ui/core"

import Clock from "../layout/ClockView-container"

import TimeZonePicker from "./TimeZonePicker"
import TimeZoneItem from "./TimeZoneItem"

import {
	aryIannaTimeZones,
	defaultZones as initialZones,
} from "./TimeZone-constants"
import { generateZones, parseHours } from "./TimeZone-utils"
import { ptBR } from "date-fns/locale"

function TimeZoneView({ defaultZones = [...initialZones] }) {
	const [date, setDate] = useState(Date.now())
	const [timeZones, setTimeZones] = useState(defaultZones)

	const zones = useMemo(() => {
		return aryIannaTimeZones.map((el) => generateZones(el))
	}, [])

	const addZone = useCallback(
		(zone) => {
			setTimeZones([...timeZones, zone])
		},
		[timeZones]
	)

	const removeZone = useCallback(
		(val) => {
			setTimeZones([...timeZones].filter((el) => el !== val))
		},
		[timeZones]
	)

	useEffect(() => {
		let timer = setInterval(() => {
			setDate(Date.now())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<>
			<Clock {...parseHours(new Date(date))} />
			<div
				style={{
					marginLeft: 20,
				}}
			>
				<Typography variant="h6">
					{format(new Date(date), "EEEE d MMMM yyyy", {
						locale: ptBR,
					})}
				</Typography>
			</div>
			<List
				style={{
					height: "65vh",
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
								deleteItem={removeZone}
							/>
						)
					})}
			</List>
			<TimeZonePicker
				zones={zones.filter((el) => !timeZones.find((i) => el.timezone === i))}
				addItem={addZone}
			/>
		</>
	)
}

export default TimeZoneView
