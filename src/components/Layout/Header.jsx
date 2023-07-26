import { Container, Nav, Navbar } from "react-bootstrap";
import Font from "react-font";
import { Link } from "react-router-dom";
function Header() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">
						{/* <img src={MyLogo} alt="My Logo" className="img-fluid col-1" /> */}

						<Font family="Ubuntu">
							{" FAHRI".split("").map((letter, index) => {
								return (
									<i key={index} className="text-fun-pink fs-2 fw-bolder">
										{letter}
									</i>
								);
							})}
						</Font>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link to={"/About"} className="nav-link">
								About
							</Link>
							<Link to={"/Works"} className="nav-link">
								Works
							</Link>
							<Nav.Link href="#pricing">Services</Nav.Link>
							<Nav.Link href="#pricing">Contact</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
