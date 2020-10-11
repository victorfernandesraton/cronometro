/* eslint-disable indent */
import { defaultTime, dispatcher } from "./CountDown-constants"
import { decrementTime } from "./CountDown-utils"

const { RESET, START, STOP, UPDATE_TIME, SET_TIME } = dispatcher

export const initialState = {
	start: false,
	initial: {
		...defaultTime,
	},
	current: {
		...defaultTime,
	},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case START:
			return { ...state, start: true }
		case RESET:
			return {
				...state,
				start: false,
				current: { ...defaultTime },
				initial: { ...defaultTime },
			}
		case STOP:
			return { ...state, start: !state.start }
		case SET_TIME: {
			return { ...state, initial: { ...payload }, current: { ...payload } }
		}
		case UPDATE_TIME: {
			return { ...state, current: { ...decrementTime(state.current) } }
		}
		default:
			return state
	}
}
