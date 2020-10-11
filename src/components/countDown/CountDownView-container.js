import React, { useReducer, useEffect, useCallback } from "react"

import { Button } from "@material-ui/core"
import { Container, ButtonBar } from "./CountDow-style"

import reducer, { initialState } from "./CountDown-reducer"

import {
	countDown,
	resetCountDown,
	startCountdown,
	stopCountDown,
} from "./CountDown-action"
import { isZeroCountDown, seDefaultpickerValue } from "./CountDown-utils"
import CountDownPicker from "./CountDownPicker"

function CountDownView() {
	const [{ start, current, initial }, dispatch] = useReducer(reducer, initialState)

	const changePlay = useCallback(() => {
		stopCountDown(dispatch)
	}, [dispatch])

	const reset = useCallback(() => {
		resetCountDown(dispatch)
	}, [dispatch])

	useEffect(() => {
		if (start) {
			let count = setInterval(() => {
				countDown({ ...current }, dispatch)
			}, 1000)
			return () => clearInterval(count)
		}
	}, [start, current])

	return (
		<Container>
			{!start && isZeroCountDown({ ...initial }) && (
				<CountDownPicker
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
					value={seDefaultpickerValue({ ...initial })}
				/>
			)}
			{!isZeroCountDown({ ...current }) && (
				<h1>{`${current.hour}:${current.min}:${current.sec}`}</h1>
			)}
			<ButtonBar>
				<Button
					disabled={isZeroCountDown({ ...initial })}
					color="primary"
					onClick={changePlay}
				>
					{start ? "Stop" : "Start"}
				</Button>
				<Button onClick={reset}>Reset</Button>
			</ButtonBar>
		</Container>
	)
}

export default CountDownView
