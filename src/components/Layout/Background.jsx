import React, { Component } from "react";
import ParticleAnimation from "react-particle-animation";

class Background extends Component {
	render() {
		return (
			<>
				<ParticleAnimation
					numParticles={10}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
				/>
			</>
		);
	}
}

export default Background;
