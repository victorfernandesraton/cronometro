export const valideDecrement = (val) => val > 0 ? val -1 : val

export const isZeroCountDown = ({hour = 0, min =0, sec = 0}) => hour === 0 && min === 0 && sec === 0
export const decrementTime =({hour = 0, min =0, sec = 0}) => {
	if (isZeroCountDown({hour, min, sec})) {
		return {hour: 0, min: 0, sec: 0}
	}
	return {
		sec: sec === 0 ? 59 : valideDecrement(sec),
		min: min === 0 && sec === 0 ? 59 : sec === 0 ? valideDecrement(min): min,
		hour: min === 0 && sec === 0 ? valideDecrement(hour): hour,
	}
}
