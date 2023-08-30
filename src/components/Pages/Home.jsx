import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Typed from "react-typed";

function Home() {
	return (
		<>
			<Container className="text-center p-5 min-vh-100r">
				<Row>
					<h3>Hello,My name is Fahri and Welcome to my website</h3>
				</Row>
				<Row>
					<h1>
						<Typed
							strings={["Full-Stack Developer", "Software Engineer"]}
							typeSpeed={40}
							backSpeed={30}
						/>
					</h1>
				</Row>
				<Row>
					<p>I am a Full-Stack Developer and a Software engineer</p>
				</Row>
			</Container>
			{/* <Background /> */}
		</>
	);
}
export default Home;
