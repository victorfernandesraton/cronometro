import React, { useState, useCallback } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Input,
	InputLabel,
	FormControl,
	Select,
} from "@material-ui/core"

import { Add } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}))

export default function TimeZonePicker({ zones = [], addItem }) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [zone, setZone] = useState("")

	const handleChange = useCallback((event) => {
		setZone(event.target.value)
	}, [])

	const handleOpen = useCallback((value) => {
		setOpen(value)
	}, [open, setOpen])

	return (
		<>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button color="primary" onClick={() => handleOpen(true)}>
					<Add />
				</Button>
			</div>
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				open={open}
				onClose={() => handleOpen(false)}
			>
				<DialogTitle>Fill the form</DialogTitle>
				<DialogContent>
					<form className={classes.container}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
							<Select
								native
								value={zone}
								onChange={handleChange}
								input={<Input id="demo-dialog-native" />}
							>
								{zones.map((el, key) => {
									return (
										<option
											selected={el.timezone === zone}
											key={key}
											value={el.timezone}
										>
											{el.city}
										</option>
									)
								})}
							</Select>
						</FormControl>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleOpen(false)} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							addItem(zone)
							handleOpen(false)
						}}
						color="primary"
					>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
