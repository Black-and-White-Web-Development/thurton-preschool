import "./Committee.scss";

const committeeMembers = [
	{ id: 0, role: "Chair", name: "Janet Reynolds" },
	{ id: 1, role: "Treasurer", name: "Sandra Rennie" },
	{ id: 2, role: "Secretary", name: "Amy Whittam" },
	{ id: 3, role: "Finance Officer", name: "Julie Lincoln" },
	{ id: 4, role: "Other members", name: "Michelle Stone" },
];

const Committee = function () {
	return (
		<section className="committee fb-col-wrapper">
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
						<dd className="committee__name">{member.name}</dd>
					</div>
				))}
			</dl>
		</section>
	);
};

export default Committee;
