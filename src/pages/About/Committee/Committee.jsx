import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "./Committee.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/committees`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Committee = function ({ heading, body }) {
	const [committeeMembers, setCommitteeMembers] = useState([]);

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
				setCommitteeMembers(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section id="committee" className="committee fb-col-wrapper">
			<h2 className="committee-heading">{heading}</h2>
			{body && (
				<BlocksRenderer
					content={body}
					blocks={{
						paragraph: ({ children }) => <p className="committee__description">{children}</p>,
					}}
				/>
			)}
			<dl className="committee__members-list">
				{committeeMembers.map(member => (
					<div key={member.id} className="committee__member">
						<dt className="committee__role small">{member.role}</dt>
						<dd className="committee__name">
							{member.firstName} {member.lastName}
						</dd>
					</div>
				))}
			</dl>
		</section>
	);
};

Committee.propTypes = {
	heading: PropTypes.string,
	body: PropTypes.array,
};

export default Committee;
