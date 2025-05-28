import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import TeamMember from "./TeamMember/TeamMember";
import "./TeamMembers.scss";

const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/staff-members?populate[portrait]=true&populate[qualifications][populate]=qualification`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const TeamMembers = function ({ heading, body }) {
	const [content, setContent] = useState([]);

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

				const sortedData = data.data.sort((a, b) => {
					const getPriority = member => {
						const role = member.role?.toLowerCase() || "";
						const hasPortrait = !!member.portrait?.data;

						if (role === "play leader") return 0;
						if (role === "assistant play leader") return 1;
						if (role === "practitioner") return 2;
						if (hasPortrait) return 3;
						return 3;
					};

					return getPriority(a) - getPriority(b);
				});

				setContent(sortedData);
			} catch (error) {
				console.error("Error fetching staff members:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section id="staff" className="team-members fb-col-wrapper">
			<h2 className="team-members__heading">{heading}</h2>
			{body && (
				<BlocksRenderer
					content={body}
					blocks={{
						paragraph: ({ children }) => (
							<p className="team-members__description medium">{children}</p>
						),
					}}
				/>
			)}
			<ul className="team-members__list">
				{content.map(member => (
					<li key={member.id}>
						<TeamMember teamMember={member} />
					</li>
				))}
			</ul>
		</section>
	);
};

TeamMember.propTypes = {
	heading: PropTypes.string,
	body: PropTypes.array,
};

export default TeamMembers;
