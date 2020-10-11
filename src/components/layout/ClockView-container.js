import React, { useCallback } from "react"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	justify-content: center;
	justify-self: center;
`

const ClockView = ({ hour, min, sec }) => {
	const showValue = useCallback((val) => (val < 10 ? `0${val}` : val), [])
	return (
		<Container>
			<h1>{`${showValue(hour)}:${showValue(min)}:${showValue(sec)}`}</h1>
		</Container>
	)
}

export default ClockView
