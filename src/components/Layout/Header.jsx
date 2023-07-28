import { Container, Nav, Navbar } from "react-bootstrap";
import Font from "react-font";
import { Link } from "react-router-dom";
import { AiFillBank } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";

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
								<AiFillBank />
								About
							</Link>
							<Link to={"/Works"} className="nav-link">
								<BsPersonWorkspace />
								Works
							</Link>
							<Link to={"/Services"} className="nav-link">
								<GrServices />
								Services
							</Link>
							<Link to={"/Contact"} className="nav-link">
								<BiSolidContact />
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
