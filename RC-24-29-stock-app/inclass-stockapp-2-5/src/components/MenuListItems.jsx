import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
	{
		title: "Dashboard",
		url: "/stock",
		icon: icon("ic_analytics"),
	},
	{
		title: "Purschases",
		url: "/stock/purchases",
		icon: icon("purchase"),
	},
	{
		title: "Sales",
		icon: icon("sales"),
		url: "/stock/sales/",
	},
	{
		title: "Firms",
		icon: icon("firms"),
		url: "/stock/firms/",
	},
	{
		title: "Brands",
		icon: icon("brand"),
		url: "/stock/brands/",
	},
	{
		title: "Products",
		icon: icon("ic_cart"),
		url: "/stock/products/",
	},
];
const iconStyle = {
	color: "secondary.main",
	borderRadius: "1rem",
	"&:hover": {
		backgroundColor: "secondary.main",
		color: "white",
	},
};
const selectedStyle = {
	backgroundColor: "secondary.second",
	borderRadius: "1rem",
	"&:hover": {
		backgroundColor: "secondary.main",
		color: "secondary.second",
	},
	color: "white",
};

const MenuListItems = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	console.log(location);
	return (
		<div>
			<Toolbar />
			<List>
				{links?.map((item, index) => (
					<ListItem key={item.title} disablePadding>
						<ListItemButton
							onClick={() => navigate(item.url)}
							sx={
								pathname == item.url ? selectedStyle : iconStyle
							}
						>
							{/* <ListItemIcon>
								<Box
									sx={{
										backgroundImage: `url(${item.icon})`,
										width: 48,
										height: 48,
										bgcolor: "red",
									}}
								/>
							</ListItemIcon> */}
							<Box
								sx={{
									width: 24,
									height: 24,
									mask: `url(${item.icon}) no-repeat center/contain`,
									bgcolor: "currentcolor",
								}}
							/>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default MenuListItems;
