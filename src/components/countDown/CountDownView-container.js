import React, { useReducer, useEffect, useCallback } from "react"

import { Button, LinearProgress } from "@material-ui/core"
import { PlayArrow, Pause, Stop, FiberManualRecord } from "@material-ui/icons"

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
		// eslint-disable-next-line
	}, [start, current, showAlert])

	return (
		<Container>
			{!start && isZeroCountDown({ ...initial }) && (
				<ClockContainer>
					<CountDownPicker
						onChange={(date) => {
							if (date) {
								startCountdown(
									{
										hour: date ? date.getHours() : 0,
										min: date ? date.getMinutes() : 0,
										sec: date ? date.getSeconds() : 0,
									},
									dispatch
								)
							}
						}}
						value={setDateWithTime({ ...initial })}
					/>
				</ClockContainer>
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
					{!isZeroCountDown({ ...current }) && (
						<TextContainer>
							<h3>{distanceBetweenTimes({ current, initial }).text}</h3>
						</TextContainer>
					)}
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
				<Button onClick={reset} color="secondary">
					{start ? <Stop /> : <FiberManualRecord />}
				</Button>
			</ButtonBar>
		</Container>
	)
}

export default CountDownView
