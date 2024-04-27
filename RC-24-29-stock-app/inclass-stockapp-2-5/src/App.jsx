import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import AppRouter from "./router/AppRouter";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#1565C0",
			},
			secondary: {
				main: "#1565C0",
				second: "#2196F3",
			},
		},
		typography: {
			fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
	});
	return (
		<>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<AppRouter />
					</PersistGate>
				</Provider>
				<ToastContainer />
			</ThemeProvider>
		</>
	);
}

export default App;
