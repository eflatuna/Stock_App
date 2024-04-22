import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexCenter, modalStyle } from "../../styles/globalStyle";

//!globalstyle tanimlayip box tan onu cagirdik.
// const style = {
// 	position: "absolute",
// 	top: "50%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)",
// 	width: 400,
// 	bgcolor: "background.paper",
// 	border: "2px solid #000",
// 	boxShadow: 24,
// 	p: 4,
// };

export default function BrandModal({ open, handleClose, initialState }) {
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
			putStockData("brands", info);
		} else {
			postStockData("brands", info);
		}
		handleClose();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
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
							label="Firm Logo"
							name="image"
							id="image"
							type="url"
							variant="outlined"
							value={info?.image || ""}
							onChange={handleChange}
						/>
						<Button type="submit" variant="contained">
							{info._id ? "Update Brand" : "Submit Brand"}
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
