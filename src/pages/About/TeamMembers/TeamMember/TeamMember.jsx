import PropTypes from "prop-types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "./TeamMember.scss";

import logo from "/src/assets/logo/thurton-preschool-logo.jpg";

const API_URL = import.meta.env.VITE_CMS_URL;

const TeamMember = function ({ teamMember }) {
	return (
		<article className="team-member" aria-labelledby={`team-member-${teamMember.id}`}>
			<header className="team-member__header">
				<figure aria-hidden="true" className="team-member__portrait-wrapper">
					{teamMember.portrait ? (
						<img
							className="team-member__portrait-image"
							src={teamMember.portrait.url}
							alt={teamMember.portrait.alternativeText || `Portrait of ${teamMember.name}`}
						/>
					) : (
						<img
							className="team-member__portrait-image team-member__portrait-image--placeholder"
							src={logo}
							alt={`Thurton Preschool logo`}
						/>
					)}
				</figure>
				<h3 className="team-member__heading" id={`team-member-${teamMember.id}`}>
					{teamMember.firstName} {teamMember.lastName}
				</h3>
				<p className="team-member__role">
					<strong>{teamMember.role}</strong>
				</p>
			</header>
			<div className="team-member__body">
				<h4 className="team-member__subheading">About {teamMember.firstName}</h4>
				<BlocksRenderer
					content={teamMember.bio}
					blocks={{
						paragraph: ({ children }) => <p className="team-member__bio">{children}</p>,
					}}
				/>
			</div>
			<div className="team-member__qualifications">
				<h4 className="team-member__subheading">{teamMember.firstName}&apos;s qualifications</h4>
				<dl className="team-member__qualifications-list">
					{teamMember.qualifications.map(qualification => {
						if (!qualification) return null;

						return (
							<div key={qualification.id} className="team-member__qualification">
								<dt className="team-member__qualification-name">
									{qualification.inProgress ? "Currently studying " : ""}
									{qualification.qualification?.name}
								</dt>
								<dd className="team-member__qualification-year">{qualification.completionYear}</dd>
							</div>
						);
					})}
				</dl>
			</div>
		</article>
	);
};

TeamMember.propTypes = {
	teamMember: PropTypes.shape({
		id: PropTypes.number,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		portrait: PropTypes.object,
		role: PropTypes.string,
		bio: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string,
				children: PropTypes.array,
			})
		),
		qualifications: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				year: PropTypes.number,
			})
		),
	}).isRequired,
};

export default TeamMember;
