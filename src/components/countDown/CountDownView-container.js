import React, {useReducer, useEffect, useState} from "react"
import reducer, {initialState} from "./CountDown-reducer"
import {countDown, resetCountDown,startCountdown, stopCountDown} from "./CountDown-action"
function CountDownView(props) {

	const [{start, current, initial}, dispatch] = useReducer(reducer, initialState)
	
	useEffect(() => {
		if (start) {	
			let count = setInterval(() => {
				countDown({...current}, dispatch)
			}, 1000)
			return () => clearInterval(count)
		}
	}, [start, current])

	return (
		<div>
			<button onClick={() => {
				startCountdown({min: 1}, dispatch)
			}}>Test</button>
			<button onClick={() => {
				stopCountDown(dispatch)
			}}>Stop</button>
			<button onClick={() => {
				resetCountDown(dispatch)
			}}>Reset</button>
			<p>{current.hour}</p>
			<p>{current.min}</p>
			<p>{current.sec}</p>
		</div>
	)
}

export default CountDownView
