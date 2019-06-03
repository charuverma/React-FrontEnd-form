import React from "react";
import {
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Row,
	Container
} from "reactstrap";
import "../style/productform.css";

class login extends React.Component {
	constructor() {
		super();
		this.state = {
			field: {},
			errors: {}
		};
		this.handlechange = this.handlechange.bind(this);
		this.submit = this.submit.bind(this);
	}
	handlechange(e) {
		let field = this.state.field;
		field[e.target.name] = e.target.value;
		this.setState({
			field
		});
	}
	submit(e) {
		e.preventDefault();
		const { field } = this.state,
			errors = {};

		var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
		);
		if (!field.emailid) {
			errors.emailid = "This is a required field.";
		} else if (!pattern.test(field["emailid"])) {
			errors.emailid = "Invalid email.";
		}

		if (!field.password) {
			errors.password = "This is a required field.";
		}

		if (Object.keys(errors).length) {
			this.setState({ errors });
		} else {
			console.log("Login API");
		}
	}

	render() {
		return (
			<Container>
				<Form className="Form" onSubmit={this.submit}>
					<p className="main">
						{" "}
						className="container"
						<b>Registration Form</b>
					</p>

					<Row>
						<Col md={8}>
							<FormGroup>
								<Label className="Input">Emailid</Label>
								<Input
									type="email"
									className="Input"
									name="emailid"
									value={this.state.field.emailid || ""}
									onChange={this.handlechange}
								/>
								<div className="errorMsg">
									{this.state.errors.emailid}
								</div>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md={8}>
							<FormGroup>
								<Label className="Input1">Password</Label>
								<Input
									type="password"
									className="Input1"
									name="password"
									value={this.state.field.password || ""}
									onChange={this.handlechange}
								/>
								<div className="errorMsg">
									{this.state.errors.password}
								</div>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col md={8}>
							<Button
								color="primary"
								size="lg"
								block
								className="Button"
								type="submit"
							>
								LOGIN
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>
		);
	}
}

export default login;
