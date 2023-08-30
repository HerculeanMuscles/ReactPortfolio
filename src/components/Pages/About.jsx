import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
				<hr />

				<Row /*About Me Section*/>
					<Col sm>
						<h3>About Me</h3>
						<p>
							Passionate about the limitless potential of technology, I am a
							dedicated and enthusiastic software engineer ready to shape the
							future through innovative solutions. With a strong foundation in
							programming languages and a knack for problem-solving, I thrive in
							challenging environments that require creative thinking and
							attention to detail. Constantly seeking to expand my knowledge and
							stay up-to-date with the latest industry trends, I approach each
							project with unwavering enthusiasm and a commitment to delivering
							high-quality results. Whether it's developing robust software
							architectures or optimizing code for peak performance, I am driven
							by the excitement of transforming ideas into tangible, impactful
							products. With a proven track record of successful projects , I am
							eager to contribute my skills and collaborate with like-minded
							professionals to revolutionize the digital landscape.
						</p>
					</Col>
				</Row>
				<hr />

				<Row /* Education Section*/>
					<Col sm>
						<h3>Education</h3>
						<h5>SIST University</h5>
						<p>Major: Software Engineer</p>
					</Col>
				</Row>
				<hr />

				<Row /* Skills Section*/>
					<Col sm>
						<h3>Skills</h3>
					</Col>
				</Row>
				<hr />

				<Row /* Experience Section*/>
					<Col sm>
						<h3>Experience</h3>
					</Col>
				</Row>
				<hr />

				<Row /* Hobbies Section*/>
					<Col sm>
						<h3>Hobbies</h3>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default About;
