import { useEffect, useState } from "react";
import TeamMember from "./TeamMember/TeamMember";
import "./TeamMembers.scss";

const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/staff-members?populate[portrait]=true&populate[qualifications][populate]=qualification`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const TeamMembers = function () {
	const [teamMembers, setTeamMembers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				setTeamMembers(data.data);
			} catch (error) {
				console.error("Error fetching staff members:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="team-members fb-col-wrapper">
			<h2 className="team-members__heading">Meet the team</h2>
			<p className="team-members__description medium">
				We employ six Practitioners who are highly qualified in early years childcare. They
				regularly update their training including safe guarding and paediatric first aid.
			</p>
			<ul className="team-members__list">
				{teamMembers
					.sort((a, b) => a.id - b.id)
					.map(member => (
						<li key={member.id}>
							<TeamMember teamMember={member} />
						</li>
					))}
			</ul>
		</section>
	);
};

export default TeamMembers;
