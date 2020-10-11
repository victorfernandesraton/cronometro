import { TimePicker } from "@material-ui/pickers"
import React from "react"

function CountDownPicker({ onChange, value }) {
	return (
		<TimePicker
			ampm={false}
			key="select-hour"
			id="select-hour"
			format="HH:mm:ss"
			openTo="minutes"
			views={["hours", "minutes", "seconds"]}
			label="Next appointment"
			type="time"
			clearable
			onChange={onChange}
			value={value}
		/>
	)
}

export default CountDownPicker
