import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Footer() {
	const position = [33.991980191627185, -6.874611381541911];
	return (
		<>
			<footer class="py-3 my-4">
				<div className={"container"}>
					<div className={"row"}>
						<div className={"col-lg-6"}>
							{" "}
							<ul class="nav justify-content-center border-bottom pb-3 mb-3">
								<li class="nav-item">
									<a href="#" class="nav-link px-2 text-muted">
										Home
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link px-2 text-muted">
										Features
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link px-2 text-muted">
										Pricing
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link px-2 text-muted">
										FAQs
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link px-2 text-muted">
										About
									</a>
								</li>
							</ul>
						</div>
						<div className={"col-lg-6"}>
							<MapContainer
								center={position}
								zoom={13}
								scrollWheelZoom={false}
								style={{ height: " 250px" }}
							>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker position={position}>
									<Popup>
										A pretty CSS3 popup. <br /> Easily customizable.
									</Popup>
								</Marker>
							</MapContainer>
						</div>
					</div>
				</div>

				<p class="text-center text-muted">&copy; 2022 Company, Inc</p>
			</footer>
		</>
	);
}

export default Footer;
