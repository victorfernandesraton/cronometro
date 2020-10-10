import {dispatcher} from "./CountDown-constants"
import {decrementTime} from "./CountDown-utils"

const {RESET,START,STOP, UPDATE_TIME, SET_TIME} = dispatcher

export const startCountdown = ({hour= 0,min =0,sec= 0},dispatch) => {
	dispatch({
		type: RESET
	})
	dispatch({
		type: START
	})
	dispatch({
		type:SET_TIME,
		payload: {hour, min, sec}
	})
}
export const countDown = ({hour =0,min=0,sec=0},dispatch) => {
	dispatch({
		type:UPDATE_TIME,
		payload: decrementTime({hour, min, sec})
	})
}
export const resetCountDown = (dispatch) => {
	dispatch({
		type: RESET
	})
	dispatch({
		type: STOP
	})
}
export const stopCountDown = (dispatch) => {
	dispatch({
		type: STOP
	})
}