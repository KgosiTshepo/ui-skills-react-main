/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import getSkills from "../hooks/getSkills";

// 1. Install bootstrap, material UI or bulma.

// 2. Create a container div with a card, that will list all your Skills

// 3. Integrate into the server to fetch a json list

// 4. Toggle list on and off and adjust a css class

const Skills = () => {
	const [getSkillsApi, skills] = getSkills();

	useEffect(() => {
		getSkillsApi();
		console.log("Component mounted on the DOM 🚀, alright lets push buttons 👋🏻");
	}, []);
	return (
		<div className="card-container">
			<div className="card" style={{ width: "18rem" }}>
				<div className="card-header">Skills</div>
				<ul className="list-group list-group-flush">
					{skills.map((item) => (
						<li className="list-group-item" key={item.id}>
							{item.skill}
							<p>Rating : {item.rating}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Skills;
