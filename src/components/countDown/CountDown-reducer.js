/* eslint-disable indent */
import { defaultTime, dispatcher } from "./CountDown-constants"
import { decrementTime } from "./CountDown-utils"

const { RESET, START, STOP, UPDATE_TIME, SET_TIME, ALERT } = dispatcher

export const initialState = {
	start: false,
	initial: {
		...defaultTime,
	},
	current: {
		...defaultTime,
	},
	showClock: false,
	showAlert: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case START:
			return { ...state, start: true, showClock: true }
		case RESET:
			return {
				...state,
				...initialState,			
			}
		case STOP:
			return { ...state, start: !state.start }
		case SET_TIME: {
			return { ...state, initial: { ...payload }, current: { ...payload }, showClock: true }
		}
		case UPDATE_TIME: {
			return { ...state, current: { ...decrementTime(state.current) } }
		}
		case ALERT: {
			return {...state, showAlert: !state.showAlert}
		}
		default:
			return state
	}
}
