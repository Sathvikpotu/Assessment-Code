import React, { Component } from "react";
import { Helmet } from "react-helmet";
import routes from "../routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>
				</Helmet>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography variant="title" color="inherit">
							TODO Application
						</Typography>
					</Toolbar>
				</AppBar>
				<main>{routes}</main>
			</div>
		);
	}
}

export default App;
