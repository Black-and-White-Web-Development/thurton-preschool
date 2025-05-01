import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";

const API_URL = import.meta.env.VITE_CMS_URL;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;
const FETCH_URL = `${API_URL}/api/policies?populate=document`;

const Footer = function ({ siteInfo }) {
	const [policies, setPolicies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(FETCH_URL, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				setPolicies(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<footer className="footer fb-col-wrapper">
			{console.log(policies)}
			<div className="footer__copyright-wrapper">
				<h3 className="footer__copyright-heading">{siteInfo.siteTitle}</h3>
				<p className="footer__copyright-text">
					Copyright © {siteInfo.foundingYear} - {new Date().getFullYear()} {siteInfo.siteTitle}. All
					rights reserved. Registered Charity Number {siteInfo.charityNumber}.
				</p>
			</div>
			<div className="footer__content-wrapper">
				<div className="footer__links">
					<h3 className="footer__links-heading">Site map</h3>
					<NavLink to="/home" className="footer__link">
						Home
					</NavLink>
					<NavLink to="/about" className="footer__link">
						About
					</NavLink>
					<NavLink to="/resources" className="footer__link">
						Resources
					</NavLink>
					<NavLink to="/fundraising" className="footer__link">
						Fundraising
					</NavLink>
					<NavLink to="/contact" className="footer__link">
						Contact
					</NavLink>
				</div>
				<div className="footer__links">
					<h3 className="footer__links-heading">Legal</h3>
					<NavLink to="/terms-of-use" className="footer__link">
						Terms of Use
					</NavLink>
					<NavLink to="/privacy-policy" className="footer__link">
						Privacy Policy
					</NavLink>
					<NavLink to="/cookies" className="footer__link">
						Cookie Policy
					</NavLink>
					<NavLink to="/accessibility" className="footer__link">
						Accessibility
					</NavLink>
				</div>
				<div className="footer__links">
					<h3 className="footer__links-heading">Policies</h3>
					{policies &&
						policies.map(policy => {
							return (
								<NavLink
									key={policy.id}
									target="_blank"
									to={API_URL + policy.document.url}
									className="footer__link"
								>
									{policy.name}
								</NavLink>
							);
						})}
				</div>
				<div className="footer__links">
					<h3 className="footer__links-heading">Useful links</h3>
					<NavLink target="_blank" to="/https://thurton.norfolk.sch.uk" className="footer__link">
						Thurton Church of England VC Primary School
					</NavLink>
					<NavLink target="_blank" to="https://foundationyears.org.uk" className="footer__link">
						Early Years Foundation Stage
					</NavLink>
					<NavLink target="_blank" to="https://www.eyalliance.org.uk" className="footer__link">
						Early Years Alliance
					</NavLink>
					<NavLink
						target="_blank"
						to="https://www.gov.uk/early-years-foundation-stage"
						className="footer__link"
					>
						Department For Education | Early Years
					</NavLink>
					<NavLink
						target="_blank"
						to="https://www.nhs.uk/common-health-questions/childrens-health/ "
						className="footer__link"
					>
						NHS Childrens Health
					</NavLink>
					<NavLink
						target="_blank"
						to="https://www.gov.uk/government/organisations/ofsted"
						className="footer__link"
					>
						Ofsted
					</NavLink>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	siteInfo: PropTypes.shape({
		siteTitle: PropTypes.string,
		foundingYear: PropTypes.number,
		charityNumber: PropTypes.number,
	}),
};

export default Footer;
