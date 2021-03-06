import styled from "styled-components"
import { Box, Button, makeStyles } from "@material-ui/core"

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
	justify-self: flex-end;
	flex-shrink: 0;
`
export const ButtonStartAndStop = styled(Button)``

export const ClockContainer = styled(Box)`
	display: flex;
	padding: 2em;
	height: 70vh;
	flex: 1 0 auto;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	justify-self: center;
	justify-items: center;
`

export const alertStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}))
