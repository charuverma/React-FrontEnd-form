import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerform from "./component/registerform";
import registerlist from "./component/registerlist";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Footer from "./component/footer";
import productform from "./component/productform";
import productlist from "./component/productlist";
import login from "./component/login";
import "../src/style/App.css";

class MainContainer extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Sidebar />

				<Switch>
					<Route path="/login" component={login} />
					<Route path="/registerform" component={registerform} />
					<Route
						path="/registerlist/edit/:id"
						component={registerform}
					/>
					<Route path="/registerlist" component={registerlist} />
					<Route path="/productform" component={productform} />
					<Route
						path="/productlist/edit/:id"
						component={productform}
					/>
					<Route path="/productlist" component={productlist} />
				</Switch>

				<div>
					<Footer />
				</div>
			</div>
		);
	}
}
class App extends React.Component {
	render() {
		return (
			<Router>
				<MainContainer />
			</Router>
		);
	}
}
export default App;
