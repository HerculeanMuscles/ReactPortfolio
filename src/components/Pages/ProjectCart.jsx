import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

function ProjectCart(props) {
	return (
		<>
			<Card.Img src={props.image} alt="Card image" />
			{props.title}
			<hr />
			<Link to={props.link} target="_blank" rel="noopener noreferrer">
				Project Link
			</Link>
		</>
	);
}

export default ProjectCart;
