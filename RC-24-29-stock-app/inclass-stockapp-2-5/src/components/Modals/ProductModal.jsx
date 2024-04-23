import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexCenter, modalStyle } from "../../styles/globalStyle";

export default function ProductModal({ open, handleClose, initialState }) {
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
			putStockData("products", info);
		} else {
			//* id yoksa create işlemi
			postStockData("products", info);
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
							label="Category Name"
							name="name"
							id="name"
							type="text"
							variant="outlined"
							// value={info?.categoryId.name || ""}
							onChange={handleChange}
						/>
						<TextField
							label="Brand Name"
							name="name"
							id="name"
							type="text"
							variant="outlined"
							// value={info?.brandId.name || ""}
							onChange={handleChange}
						/>
						<TextField
							label="Product Name"
							name="name"
							id="name"
							type="text"
							variant="outlined"
							// value={info?. || ""}
							onChange={handleChange}
						/>

						<Button type="submit" variant="contained">
							Submit Product
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
