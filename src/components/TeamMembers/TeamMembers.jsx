import TeamMember from "../TeamMember/TeamMember";
import "./teamMembers.scss";

import ellen from "/src/assets/images/staff/ellen-mussell.jpg";
import kirsty from "/src/assets/images/staff/kirsty-collins.jpg";
import sorrel from "/src/assets/images/staff/sorrel-kelly.jpg";
import francesca from "/src/assets/images/staff/francesca-stone.jpg";
import judy from "/src/assets/images/staff/judy-jackson.jpg";

const teamMembers = [
	{
		id: 0,
		firstName: "Ellen",
		lastName: "Mussell",
		role: "Play Leader",
		bio: "Ellen has been working with children since she first qualified as a primary school teacher back in 2009. She has a real passion for the early years and has worked with young children as a teacher, teaching assistant, and in private nursery settings. Ellen has loved her first year as playleader and can't wait to grow into the role even further.",
		portrait: ellen,
		qualifications: [
			{ id: 0, name: "Qualified Teacher Status", year: 2009 },
			{ id: 1, name: "BA Hons in Primary Education", year: 2009 },
			{ id: 2, name: "Paediatric First Aid", year: 2024 },
			{ id: 3, name: "Introduction to Safeguarding", year: 2021 },
			{ id: 4, name: "Safeguarding Lead Practitioner", year: 2022 },
			{ id: 5, name: "Setting SENCO", year: 2022 },
			{ id: 6, name: "Communication Champion Core Training", year: 2022 },
			{ id: 7, name: "Communication Champion Advanced Training", year: 2023 },
			{ id: 8, name: "Self-Regulation and Behaviour training", year: 2023 },
		],
	},
	{
		id: 1,
		firstName: "Kirsty",
		lastName: "Collins",
		role: "Assistant Play Leader",
		bio: "Kirsty has been involved with the Preschool since 2017 when her own children started. She was the committee's secretary and would cover staff when needed. Kirsty enrolled on the CACHE level 3 Early Years course in September 2021 and qualified as a level 3 practitioner in August 2022.",
		portrait: kirsty,
		qualifications: [
			{ id: 0, name: "Introduction to Safeguarding", year: 2021 },
			{ id: 1, name: "Paediatric First Aid", year: 2022 },
			{ id: 2, name: "Safeguarding Lead Practitioner", year: 2023 },
			{ id: 3, name: "CACHE Level 3 Early Years Educator", year: 2022 },
			{ id: 4, name: "Communication Champion Core Training", year: 2022 },
			{ id: 5, name: "Self-Regulation and Behaviour training", year: 2023 },
			{ id: 6, name: "SEND level 2", year: 2023 },
		],
	},
	{
		id: 2,
		firstName: "Sorrel",
		lastName: "Kelly",
		role: "Practitioner",
		bio: "Sorrel joined the team in 2021 after taking time away from the education world to be with her young family. She has a passion for young children's education as well as a love for nature and the outdoors which she brings to the setting. ",
		portrait: sorrel,
		qualifications: [
			{ id: 0, name: "Masters in Early Childhood Development", year: 2013 },
			{ id: 1, name: "Paediatric First Aid", year: 2021 },
			{ id: 2, name: "Introduction to Safeguarding", year: 2021 },
			{ id: 3, name: "Step On training", year: 2021 },
			{ id: 4, name: "Safeguarding Lead Practitioner", year: 2022 },
			{ id: 5, name: "Communication Champion Core Training", year: 2023 },
			{ id: 6, name: "Self-Regulation and Behaviour training", year: 2023 },
			{ id: 7, name: "Currently studying Forest School Level 3", year: null },
		],
	},
	{
		id: 3,
		firstName: "Francesca",
		lastName: "Stone",
		role: "Practitioner (Maternity Leave)",
		bio: "Fran has been working in childcare since 2005 when she started as a classroom assistant in a busy Primary School. She has worked in private daycare nurseries and has been a nursery nurse for the NHS. Fran has been connected to the preschool since 2014 when her own children started to attend the setting. ",
		portrait: francesca,
		qualifications: [
			{
				id: 0,
				name: "Foundation Degree in Early Years Practice Level 5",
				year: 2017,
			},
			{ id: 0, name: "Certificate in Early Years Practice Level 4", year: 2014 },
			{ id: 1, name: "NVQ Level 3 cache diploma in childcare and education", year: 2008 },
			{ id: 2, name: "NVQ Level 2 cache certificate in childcare and education", year: 2005 },
			{ id: 3, name: "Paediatric First Aid", year: 2021 },
			{ id: 4, name: "Introduction to Safeguarding", year: 2021 },
			{ id: 5, name: "Step On training", year: 2021 },
			{ id: 6, name: "Safeguarding Lead Practitioner", year: 2022 },
			{
				id: 7,
				name: "Self-Regulation and Behaviour training (including follow on training)",
				year: 2023,
			},
		],
	},
	{
		id: 4,
		firstName: "Judy",
		lastName: "Jackson",
		role: "Practitioner",
		bio: "Judy has been actively involved in children's education since she graduated from college. She was a full time teacher for 30+ years in both state and private schools in the USA and in the UK. Judy started working at the Preschool in the Autumn of 2019.",
		portrait: judy,
		qualifications: [
			{ id: 0, name: "Qualified Teacher Status", year: 2001 },
			{ id: 1, name: "BA Honours in Primary Education", year: null },
			{ id: 2, name: "Specialist Reading Certification", year: null },
			{ id: 3, name: "Oxfordshire Early Years Specialism Award", year: 2003 },
			{ id: 4, name: "Introduction to Safeguarding", year: 2021 },
			{ id: 5, name: "Paediatric First Aid", year: 2022 },
			{ id: 6, name: "Communication Champion Core Training", year: 2022 },
		],
	},
	{
		id: 5,
		firstName: "Lucy",
		lastName: "Pitt",
		role: "Practitioner",
		bio: "Lucy qualified as a primary school teacher in 2008 and is passionate about working with children.  She has a wealth of early years teaching experience and is keen to share it with the pre-school.",
		portrait: null,
		qualifications: [
			{ id: 0, name: "Qualified Teacher Status", year: 2008 },
			{ id: 1, name: "Level 1 in child protection", year: 2024 },
			{ id: 2, name: "Woodwork in the Early Years", year: null },
			{ id: 3, name: "Paediatric First Aid", year: 2024 },
		],
	},
	{
		id: 6,
		firstName: "Hazel",
		lastName: "Stratton",
		role: "Woodland Assistant",
		bio: "Hazel has a love for the outdoors and inspires awe and wonder through natural science in the woods. She has done lots of volunteering with children and is keen to get stuck in with our wonderful pre-schoolers.",
		portrait: null,
		qualifications: [
			{ id: 0, name: "Bsc Natural Science", year: null },
			{ id: 1, name: "Introduction to Safeguarding 2024", year: 2024 },
			{ id: 2, name: "Currently studying Level 2 Childcare and Education", year: null },
		],
	},
];

const TeamMembers = function () {
	return (
		<section className="team-members fb-col-wrapper">
			<h2 className="team-members__heading">Meet the team</h2>
			<p className="team-members__description medium">
				We employ six Practitioners who are highly qualified in early years childcare. They
				regularly update their training including safe guarding and paediatric first aid.
			</p>
			<ul className="team-members__list">
				{teamMembers.map(member => (
					<li key={member.id}>
						<TeamMember teamMember={member} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default TeamMembers;
