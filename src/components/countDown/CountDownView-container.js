import React, { useReducer, useEffect } from "react"
import reducer, { initialState } from "./CountDown-reducer"
import { TimePicker } from "@material-ui/pickers"
import {
	countDown,
	resetCountDown,
	startCountdown,
	stopCountDown,
} from "./CountDown-action"
import { setHours, setMinutes, setSeconds } from "date-fns"
function CountDownView(props) {
	const [{ start, current, initial }, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		if (start) {
			let count = setInterval(() => {
				countDown({ ...current }, dispatch)
			}, 1000)
			return () => clearInterval(count)
		}
	}, [start, current])

	return (
		<div style={{width: 100}}>
			<button
				onClick={() => {
					startCountdown({ min: 1 }, dispatch)
				}}
			>
				Test
			</button>
			<button
				onClick={() => {
					stopCountDown(dispatch)
				}}
			>
				{start ? "Stop" : "Start"}
			</button>
			<button
				onClick={() => {
					resetCountDown(dispatch)
				}}
			>
				Reset
			</button>
			<TimePicker
				ampm={true}
				key="select-hour"
				id="select-hour"
				format="HH:mm:ss"
				openTo="hours"
				views={["hours","minutes", "seconds"]}
				label="Next appointment"
				type="time"
				defaultValue="00:00:00"
				clearable
				onChange={(date) => {
					startCountdown(
						{
							hour: date.getHours(),
							min: date.getMinutes(),
							sec: date.getSeconds(),
						},
						dispatch
					)
				}}
				value={setHours(
					setMinutes(setSeconds(new Date(12,12,12), initial.sec), initial.min),
					initial.hour
				)}
			/>
			<h1>Initial</h1>
			<p>{initial.hour}</p>
			<p>{initial.min}</p>
			<p>{initial.sec}</p>
			<h1>Currentl</h1>
			<p>{current.hour}</p>
			<p>{current.min}</p>
			<p>{current.sec}</p>
		</div>
	)
}

export default CountDownView
