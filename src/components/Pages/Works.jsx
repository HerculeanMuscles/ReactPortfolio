import { CardGroup } from "react-bootstrap";
import { MyProjects } from "../../Data/MyProjects";
import ProjectCart from "./ProjectCart";
function Works() {
	return (
		<>
			<div className="text-center">
				<h3>My Portfolio</h3>
			</div>
			<CardGroup>
				{MyProjects.map((item, i) => (
					<>
						<div className="p-5  bg-transparent  col-lg-3" key={i}>
							<ProjectCart
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
export default Works;
