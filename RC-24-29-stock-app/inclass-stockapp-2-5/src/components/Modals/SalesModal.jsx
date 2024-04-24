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

export default function SalesModal({ open, handleClose }) {
	const [info, setInfo] = React.useState({
		categoryId: "",
		brandId: "",
		name: "",
	});
	const { postStockData } = useStockCall();
	const { brands, products } = useSelector((state) => state.stock);

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
							<InputLabel id="demo-simple-brand-label">
								Brand
							</InputLabel>
							<Select
								labelId="demo-simple-brand-label"
								id="brandId"
								label="Brand"
								name="brandId"
								value={info.brandId}
								onChange={handleChange}
							>
								{brands.map((brand) => (
									<MenuItem key={brand._id} value={brand._id}>
										{brand.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-product-label">
								Product
							</InputLabel>
							<Select
								labelId="demo-simple-product-label"
								id="brandId"
								label="Brand"
								name="brandId"
								value={info.brandId}
								onChange={handleChange}
							>
								{products.map((product) => (
									<MenuItem
										key={product._id}
										value={product._id}
									>
										{product.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id="outlined-number"
								label="Quantity *"
								type="number"
								// InputLabelProps={{
								// 	shrink: true,
								// }}
								variant="outlined"
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id="outlined-number"
								label="Price *"
								type="number"
								// InputLabelProps={{
								// 	shrink: true,
								// }}
								variant="outlined"
							/>
						</FormControl>

						<Button type="submit" variant="contained">
							ADD NEW SALE
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
