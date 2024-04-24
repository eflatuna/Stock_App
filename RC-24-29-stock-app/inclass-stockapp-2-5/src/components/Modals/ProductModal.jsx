import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose }) {
	const [info, setInfo] = React.useState({
		categoryId: "",
		brandId: "",
		name: "",
	});
	const { postStockData } = useStockCall();
	const { categories, brands } = useSelector((state) => state.stock);

	const handleChange = (e) => {
		console.log(e.target.id);
		console.log(e.target.name);

		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	console.log(info);
	const handleSubmit = (e) => {
		e.preventDefault();
		postStockData("products", info);
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
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Category
							</InputLabel>
							<Select
								labelId="demo-simple-category-label"
								id="categoryId"
								label="Category"
								name="categoryId"
								value={info.categoryId}
								onChange={handleChange}
							>
								{categories.map((category) => (
									<MenuItem value={category._id}>
										{category.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-brand-label">
								Brand
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="brandId"
								label="Brand"
								name="brandId"
								value={info.brandId}
								onChange={handleChange}
							>
								{brands.map((brand) => (
									<MenuItem value={brand._id}>
										{brand.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
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
