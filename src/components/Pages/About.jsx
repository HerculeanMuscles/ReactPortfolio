import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fahri from "./img/Fahri.JPG";
import Card from "react-bootstrap/Card";
import "./style/About.css";

function About() {
	return (
		<>
			<Container>
				<Row>
					<Col className="text-center" sm={8}>
						<br />
						<br />
						<br />
						<h4>Fahri Siswoto Kadelan Denan</h4>
						<p>Phone No. : 123-456-6789</p>
						<p>Email : fahry657@gmail.com</p>
					</Col>
					<Col sm={4}>
						<Card style={{ width: "10rem" }}>
							<Card.Img variant="center" src={Fahri} />
						</Card>
					</Col>
				</Row>

				<Row>
					<Col sm>
						<h3>About Me</h3>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<h3>Education</h3>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<h3>Skills</h3>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<h3>Experience</h3>
					</Col>
				</Row>
				<Row>
					<Col sm>
						<h3>Hobbies</h3>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default About;
