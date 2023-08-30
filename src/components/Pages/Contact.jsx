import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Contact() {
	return (
		<>
			<div className="p-5">
				<Form>
					<Row>
						<Col>
							<Form.Control placeholder="Your Name" />
						</Col>
						<Col>
							<Form.Group
								className="mb-4"
								controlId="exampleForm.ControlInput1"
							>
								<Form.Control type="email" placeholder="Your Email" />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Send a Message!</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
					</Row>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
}
export default Contact;
