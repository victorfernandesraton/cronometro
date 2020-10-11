import React from "react"
import { Fade, Modal, Backdrop } from "@material-ui/core"

import { alertStyles } from "./CountDown-style"
import ClockView from "../layout/ClockView-container"

function CountdownAlert({ handleClose, open, time }) {
	const styles = alertStyles()
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			className={styles.modal}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div className={styles.paper}>
					<h2 id="transition-modal-title">Tempo esgotado</h2>
					<ClockView {...time} />
				</div>
			</Fade>
		</Modal>
	)
}

export default CountdownAlert
