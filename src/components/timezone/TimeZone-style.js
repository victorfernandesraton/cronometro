import { Typography } from "@material-ui/core"
import React, { useCallback } from "react"
import styled from "styled-components"

export const Information = styled.div`
	margin: 0.3em;
`
export const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`


export const ClockView = ({ hour, min, sec }) => {
	const showValue = useCallback((val) => (val < 10 ? `0${val}` : val), [])
	return (
		<Typography variant="h5">{`${showValue(hour)}:${showValue(min)}:${showValue(sec)}`}</Typography>
	)
}