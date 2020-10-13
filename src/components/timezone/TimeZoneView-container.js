import React, { useState, useEffect, useCallback, useMemo } from "react"

import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz"

import Clock from "../layout/ClockView-container"

import TimeZoneItem from "./TimeZoneItem"

import {
	aryIannaTimeZones,
	defaultZones as initialZones,
} from "./TimeZone-constants"
import { generateZones, parseHours } from "./TimeZone-utils"

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
	
	useEffect(() => {
		let timer = setInterval(() => {
			setDate(Date.now())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<>
			<Clock
				{...parseHours(new Date(date))}
			/>
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
		</>
	)
}

export default TimeZoneView
