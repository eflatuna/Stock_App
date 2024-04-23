import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexCenter, modalStyle } from "../../styles/globalStyle";

export default function FirmModal({ open, handleClose, initialState }) {
	const [info, setInfo] = React.useState(initialState);
	const { postStockData, putStockData } = useStockCall();

	const handleChange = (e) => {
		console.log(e.target.id);
		console.log(e.target.name);

		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	console.log(info);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit", info);

		if (info._id) {
			//* id varsa edit işlemi
			putStockData("firms", info);
		} else {
			//* id yoksa create işlemi
			postStockData("firms", info);
		}
		handleClose();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={flexCenter}
					>
						<TextField
							label="Firm Name"
							name="name"
							id="name"
							type="text"
							variant="outlined"
							value={info?.name || ""}
							onChange={handleChange}
						/>
						<TextField
							label="Firm Address"
							name="address"
							id="address"
							type="text"
							variant="outlined"
							value={info?.address || ""}
							onChange={handleChange}
						/>
						<TextField
							label="Firm Phone"
							name="phone"
							id="phone"
							type="tel"
							variant="outlined"
							value={info?.phone || ""}
							onChange={handleChange}
						/>
						<TextField
							label="Firm Logo"
							name="image"
							id="image"
							type="url"
							variant="outlined"
							value={info?.image || ""}
							onChange={handleChange}
						/>
						<Button type="submit" variant="contained">
							{info._id ? "Update Firm" : "Submit Firm"}
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
