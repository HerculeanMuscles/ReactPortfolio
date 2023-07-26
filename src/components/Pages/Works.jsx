import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MyProjects } from "../../Data/MyProjects";
import { Link } from "react-router-dom";
import ProjectCart from "./ProjectCart";
function Works() {
	return (
		<>
			<CardGroup>
				<Card className="col-12 text-center">
					<Card.Body>
						<Card.Title>Portfolio</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">My Works</Card.Subtitle>
						<Card.Text className="d-flex">
							{MyProjects.map((item, i) => (
								<>
									<div className="card p-5  bg-transparent  col-lg-3" key={i}>
										<ProjectCart
											image={item.image}
											title={item.title}
											link={item.link}
										/>
									</div>
								</>
							))}
						</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</>
	);
}
export default Works;
