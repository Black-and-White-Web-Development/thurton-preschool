import { useEffect, useState } from "react";
import "./Committee.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/committees`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Committee = function () {
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
			<h2 className="committee-heading">Our Committee</h2>
			<p className="committee__description">
				Our pre-school is run by a committee that is made up of parents and ex-staff members of the
				pre-school. The committee and staff meet regularly throughout the year to help with its
				smooth running and to organise fundraising events!
			</p>
			<p className="committee__description">
				If you are interested in joining or finding out more about the committee then please contact
				an existing committee member or our playleader, Ellen.
			</p>
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

export default Committee;
