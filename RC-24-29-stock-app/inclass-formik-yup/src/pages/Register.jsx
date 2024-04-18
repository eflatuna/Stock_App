import LockIcon from "@mui/icons-material/Lock";
import { Box, Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import image from "../assets/regi.avif";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import * as Yup from "yup";
import useAuthCall from "../hooks/useAuthCall";

const SignupSchema = Yup.object().shape({
	username: Yup.string().min(3).max(15).required("Required!"),
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.min(8)
		.max(50)
		.matches(/\d+/, "Muss mindestens ine Ziffer enthalten!")
		.matches(/[A-Z]/, "Muss mindestens einen Großbuchstaben enthalten!")
		.matches(/[@$?%*]+/, "Muss mindestens ein Sonderzeichen (@$?%*) ")
		.required(),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Confirm Password is required"),
});

const Register = () => {
	const { register } = useAuthCall();
	return (
		<Container maxWidth="lg">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				rowSpacing={{ sm: 3 }}
				sx={{
					height: "100vh",
					p: 2,
				}}
			>
				<AuthHeader />

				<Grid item xs={12} sm={10} md={6}>
					<Avatar
						sx={{
							backgroundColor: "secondary.light",
							m: "auto",
							width: 40,
							height: 40,
						}}
					>
						<LockIcon size="30" />
					</Avatar>
					<Typography
						variant="h4"
						align="center"
						mb={2}
						color="secondary.light"
					>
						Register
					</Typography>

					<Formik
						initialValues={{
							username: "",
							password: "",
							confirmPassword: "",
							email: "",
							firstName: "",
							lastName: "",
						}}
						validationSchema={SignupSchema}
						onSubmit={(values) => {
							// same shape as initial values
							actions.resetForm();
							actions.setSubmitting(false);
							console.log(values);
							register(values);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<Form>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 2,
									}}
								>
									<TextField
										id="username"
										name="username"
										label="Username"
										value={values.username}
										onChange={handleChange}
										onBlur={handleBlur}
										inputProps={{ "auto-complete": "off" }}
										error={
											touched.username &&
											Boolean(errors.username)
										}
										helperText={
											touched.username && errors.username
										}
									/>
									<TextField
										id="firstName"
										name="firstName"
										label="FirstName"
										value={values.firstName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.firstName &&
											Boolean(errors.firstName)
										}
										helperText={
											touched.firstName &&
											errors.firstName
										}
									/>
									<TextField
										id="lastName"
										name="lastName"
										label="LastName"
										value={values.lastName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.lastName &&
											Boolean(errors.lastName)
										}
										helperText={
											touched.lastName && errors.lastName
										}
									/>

									<TextField
										id="email"
										name="email"
										label="Email"
										type="email"
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.email &&
											Boolean(errors.email)
										}
										helperText={
											touched.email && errors.email
										}
									/>
									<TextField
										id="password"
										name="password"
										type="password"
										label="Password"
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.password &&
											Boolean(errors.password)
										}
										helperText={
											touched.password && errors.password
										}
									/>
									<TextField
										id="confirmPassword"
										name="confirmPassword"
										type="password"
										label="Confirm Password"
										value={values.confirmPassword}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.confirmPassword &&
											errors.confirmPassword
										}
										helperText={
											touched.confirmPassword &&
											errors.confirmPassword
										}
									/>

									<Button
										variant="contained"
										type="submit"
										disabled={isSubmitting}
									>
										Sign Up
									</Button>
								</Box>
							</Form>
						)}
					</Formik>

					<Box
						sx={{
							textAlign: "center",
							mt: 2,
							color: "secondary.main",
						}}
					>
						<Link to="/">Already have an account? Sign in</Link>
					</Box>
				</Grid>

				<AuthImage image={image} />
			</Grid>
		</Container>
	);
};

export default Register;
