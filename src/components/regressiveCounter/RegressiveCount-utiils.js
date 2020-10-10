export const valideDecrement = (val) => val > 0 ? val -1 : val = 0
export const decrementTime =({hour, min, sec, mil}) => {
	return {
		hour: valideDecrement(hour),
		min: valideDecrement(min),
		sec: valideDecrement(sec),
		mil: valideDecrement(mil)
	}
}
