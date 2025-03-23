import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = function () {
	return (
		<footer className="footer fb-col-wrapper">
			<div className="footer__copyright-wrapper">
				<h3 className="footer__copyright-heading">Thurton & Ashby St Mary Preschool</h3>
				<p className="footer__copyright-text">
					Copyright © 1994 - {new Date().getFullYear()} Thurton & Ashby St Mary Preschool. All
					rights reserved. Registered Charity Number 1036204.
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
					<NavLink
						target="_blank"
						to="/src/assets/docs/safeguarding-policy.pdf"
						className="footer__link"
					>
						Safeguarding
					</NavLink>
					<NavLink
						target="_blank"
						to="/src/assets/docs/online-safety-policy.pdf"
						className="footer__link"
					>
						Online Safety
					</NavLink>
					<NavLink
						target="_blank"
						to="/src/assets/docs/first-aid-policy.pdf"
						className="footer__link"
					>
						First Aid
					</NavLink>
					<NavLink
						target="_blank"
						to="/src/assets/docs/promoting-positive-behaviour-policy.pdf"
						className="footer__link"
					>
						Promoting Positive Behaviour
					</NavLink>
					<NavLink
						target="_blank"
						to="/src/assets/docs/staffing-policy.pdf"
						className="footer__link"
					>
						Staffing
					</NavLink>
					<NavLink
						target="_blank"
						to="/src/assets/docs/admissions-and-charging-policy.pdf"
						className="footer__link"
					>
						Admissions and Charging
					</NavLink>
					<NavLink
						target="_blank"
						to="/src/assets/docs/making-a-complaint-policy.pdf"
						className="footer__link"
					>
						Making a Complaint
					</NavLink>
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

export default Footer;
