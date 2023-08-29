import React, { Component } from "react";
import ParticleAnimation from "react-particle-animation";
import wave from "./wave.png";
import particle from "./particle.png";

class Background extends Component {
	render() {
		return (
			<div>
				<a href="https://github.com/transitive-bullshit/react-particle-animation">
					<img
						src={particle}
						alt="Fork me on GitHub"
						style={{
							position: "absolute",
							zIndex: 100,
							top: 0,
							right: 0,
						}}
					/>
				</a>

				<ParticleAnimation
					numParticles={10}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
		);
	}
}

export default Background;
