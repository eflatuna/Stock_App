import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHover, btnStyle } from "../../styles/globalStyle";
// import SalesCard from "../Cards/SalesCard";

function getRowId(row) {
	console.log(row);
	return row._id;
}

export default function SalesTable() {
	const { deleteStockData } = useStockCall();
	const { sales } = useSelector((state) => state.stock);

	const columns = [
		{
			field: "createdAt",
			headerName: "Date",
			width: 170,
			headerAlign: "center",
			align: "center",
			valueGetter: (value) => {
				return new Date(value).toLocaleString("de-DE");
			},
		},

		{
			field: "brandId",
			headerName: "Brand",
			headerAlign: "center",
			align: "center",
			minwidth: 150,
			editable: true,
			flex: 2,
			valueGetter: (value) => value?.name ?? "-No Brand-",
			// console.log(value);
		},
		{
			field: "productId",
			headerName: "Product",
			headerAlign: "center",
			align: "center",
			minwidth: 150,
			flex: 2,

			valueGetter: (value) => value?.name ?? "-No Brand-",
			// console.log(value);
		},

		{
			field: "quantity",
			headerName: "Quantity",
			type: "number",
			minWidth: 110,
			headerAlign: "center",
			align: "center",
			flex: 0.8,
		},

		{
			field: "price",
			headerName: "Price",
			type: "number",
			minWidth: 150,
			headerAlign: "center",
			align: "center",
			flex: 2,
		},
		{
			field: "amount",
			headerName: "Amount",
			type: "number",
			minWidth: 150,
			headerAlign: "center",
			align: "center",
			flex: 2,
		},

		{
			field: "actions",
			headerName: "Actions",
			headerAlign: "center",
			align: "center",
			description: "This column has a value getter and is not sortable.",
			sortable: true,
			minWidth: 40,
			flex: 1,

			renderCell: (params) => (
				// console.log(params)

				<Box sx={{ display: "flex", gap: 1 }}>
					<DeleteOutlineIcon
						onClick={() => deleteStockData("sales", params.id)}
						sx={btnStyle}
					/>
					<EditIcon
						sx={btnHover}
						onClick={() => {
							// handleOpen();
							setInitialState({
								_id,
								name,
								phone,
								image,
								address,
							});
						}}
					/>
				</Box>
			),
		},
	];

	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				autoHeight
				// rows={rows}
				rows={sales}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				getRowId={getRowId}
				pageSizeOptions={[5, 10, 25]}
				// checkboxSelection
				disableRowSelectionOnClick
				slots={{ toolbar: GridToolbar }}
			/>
		</Box>
	);
}
