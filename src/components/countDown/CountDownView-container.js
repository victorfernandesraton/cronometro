import React, { useReducer, useEffect, useCallback } from "react"

import { Button, LinearProgress } from "@material-ui/core"
import { PlayArrow, Pause, Stop } from "@material-ui/icons"

import ClockView from "../layout/ClockView-container"
import {
	Container,
	ButtonBar,
	ClockContainer,
	TextContainer,
} from "./CountDown-style"
import reducer, { initialState } from "./CountDown-reducer"

import {
	countDown,
	handleAlert,
	resetCountDown,
	startCountdown,
	stopCountDown,
} from "./CountDown-action"
import {
	isZeroCountDown,
	setDateWithTime,
	distanceBetweenTimes,
} from "./CountDown-utils"
import CountDownPicker from "./CountDownPicker"
import CountdownAlert from "./CountDownAlert"

function CountDownView() {
	const [{ start, showClock, current, initial, showAlert }, dispatch] = useReducer(
		reducer,
		initialState
	)

	const changePlay = useCallback(() => {
		stopCountDown(dispatch)
	}, [dispatch])

	const reset = useCallback(() => {
		resetCountDown(dispatch)
	}, [dispatch])

	const changeAlert = useCallback(() => {
		handleAlert(dispatch)
	}, [dispatch])

	useEffect(() => {
		if (start) {
			if (!isZeroCountDown({ ...current })) {
				let count = setInterval(() => {
					countDown({ ...current }, dispatch)
				}, 1000)
				return () => clearInterval(count)
			} else {
				if (!showAlert) {
					changePlay()
					changeAlert()
				}
			}
		}
	}, [start, current, showAlert])

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
					value={setDateWithTime({ ...initial })}
				/>
			)}
			{showAlert && (
				<CountdownAlert
					open={showAlert}
					handleClose={changeAlert}
					time={{ ...initial }}
				/>
			)}
			{showClock && (
				<ClockContainer>
					<ClockView {...current} />
					<LinearProgress
						variant="determinate"
						value={100 - distanceBetweenTimes({ current, initial }).percent}
					/>
					<TextContainer>
						<h2>{distanceBetweenTimes({ current, initial }).text}</h2>
					</TextContainer>
				</ClockContainer>
			)}
			<ButtonBar>
				<Button
					disabled={isZeroCountDown({ ...initial })}
					color="primary"
					onClick={changePlay}
				>
					{start ? <Pause /> : <PlayArrow />}
				</Button>
				<Button onClick={reset}>
					<Stop />
				</Button>
			</ButtonBar>
		</Container>
	)
}

export default CountDownView
