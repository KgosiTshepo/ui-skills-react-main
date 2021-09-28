import axios from "axios";
import { useState } from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [skills, setSkills] = useState([]);
	const getSkillsApi = async () => {
		try {
			const response = await axios.get("http://localhost:4000/skills", {
				/* We could read the BaseUrl from env variable file
				 * We could also use the instance of axios setup in api/dotmodus*/
				headers: {
					accept: "application/json",
				},
			});
			console.log(response.data);
			setSkills(response.data);
		} catch (error) {
			console.log("API request failed");
		}
	};
	return [getSkillsApi, skills];
};
