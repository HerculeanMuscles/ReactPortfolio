import { CardGroup } from "react-bootstrap";
import { MyServices } from "../../Data/MyServices";
import ServiceCard from "./ServiceCard";

function Services() {
	return (
		<>
			<div className="text-center">
				<h3>My Services</h3>
			</div>

			<CardGroup>
				{MyServices.map((item, i) => (
					<>
						<div className="p-5  bg-transparent  col-lg-3" key={i}>
							<ServiceCard
								image={item.image}
								title={item.title}
								desc={item.desc}
							/>
						</div>
					</>
				))}
			</CardGroup>
		</>
	);
}
export default Services;
