import styled from "styled-components"
import { Box, Button } from "@material-ui/core"

export const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	justify-self: center;
`
export const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	justify-self: center;
`
export const ButtonBar = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-self: center;
`
export const ButtonStartAndStop = styled(Button)``

export const ClockContainer = styled(Box)`
	display: flex;
	padding: 2em;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	justify-self: center;
	justify-items: center;
`