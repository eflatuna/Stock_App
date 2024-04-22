import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function FirmModal({ open, handleClose }) {
	// const [open, setOpen] = React.useState(false);
	// const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);
	const [info, setInfo] = React.useState({
		name: "",
		phone: "",
		address: "",
		image: "",
	});
	const handleChange = (e) => {
		console.log(e.target.id);
		console.log(e.target.name);
		setInfo({ ...info, [e.target.name]: e.target.value });
		// console.log(info); //!setter asenkron calisir o neden le güncel ciktiyi yakalayamayiz.Bu yüzden burada degil parantez den sonra cagirabiliriz.Bu sekilde yapi saglilkli calismaz.
	};
	console.log(info);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit", info);
	};
	return (
		<div>
			{/* <Button onClick={handleOpen}>Open modal</Button> */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<TextField
							label="Firm Name"
							name="name"
							id="name"
							type="text"
							variant="outlined"
							value={info.name}
							onChange={handleChange}

							// onChange={(e) =>
							// 	setInfo({ ...info, name: e.target.value })
							// }
						/>
						<TextField
							label="Firm Adresss"
							name="address"
							id="address"
							type="text"
							variant="outlined"
							value={info.address}
							onChange={handleChange}
							// onChange={(e) =>
							// 	setInfo({ ...info, address: e.target.value })
							// }
						/>
						<TextField
							label="Firm Phone"
							name="phone"
							id="phone"
							type="text"
							variant="outlined"
							value={info.phone}
							onChange={handleChange}
							// onChange={(e) =>
							// 	setInfo({ ...info, phone: e.target.value })
							// }
						/>
						<TextField
							label="Firm Logo"
							name="image"
							id="image"
							type="text"
							variant="outlined"
							value={info.image}
							onChange={handleChange}
							// onChange={(e) =>
							// 	setInfo({ ...info, image: e.target.value })
							// }
						/>
						<Button type="submit" variant="contained">
							Submit Firm
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
