import Card from "react-bootstrap/Card";

function ServiceCard(props) {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.image} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.desc}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default ServiceCard;
