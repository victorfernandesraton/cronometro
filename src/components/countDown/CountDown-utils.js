import { defaultTime } from "./CountDown-constants"
import {
	setHours,
	setMinutes,
	setSeconds,
	formatDistance,
	differenceInSeconds,
} from "date-fns"
export const valideDecrement = (val) => (val > 0 ? val - 1 : val)

export const isZeroCountDown = ({ hour = 0, min = 0, sec = 0 }) =>
	hour === 0 && min === 0 && sec === 0
export const decrementTime = ({ hour = 0, min = 0, sec = 0 }) => {
	if (isZeroCountDown({ hour, min, sec })) {
		return { hour: 0, min: 0, sec: 0 }
	}
	return {
		sec: sec === 0 ? 59 : valideDecrement(sec),
		min: min === 0 && sec === 0 ? 59 : sec === 0 ? valideDecrement(min) : min,
		hour: min === 0 && sec === 0 ? valideDecrement(hour) : hour,
	}
}

export const setDateWithTime = (current) =>
	setHours(
		setMinutes(setSeconds(Date.now(), current.sec), current.min),
		current.hour
	)

export const distanceBetweenTimes = ({ current, initial }) => {
	const now = setDateWithTime(current)
	const base = setDateWithTime({ ...defaultTime })
	const start = setDateWithTime(initial)
	const percent =
		(differenceInSeconds(start, now) /
			(initial.sec + initial.min * 60 + initial.hour * 3600)) *
		100

	return { percent, text: formatDistance(now, base, { includeSeconds: true }) }
}
