import { NavLink } from "react-router-dom";
import "./Footer.scss";

import YouTubeIcon from "/src/assets/icons/youtube.svg";
import LinkedInIcon from "/src/assets/icons/linkedin.svg";
import ComposersEditionIcon from "/src/assets/icons/composers-edition.svg";

const Footer = function () {
	return (
		<footer className="footer fb-col-wrapper">
			<div className="footer__copyright-wrapper">
				<h3 className="footer__copyright-heading">Terence Allbright Composer</h3>
				<p className="footer__copyright-text">
					Copyright © {new Date().getFullYear()} Terence Allbright. All rights reserved.
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
					<NavLink to="/publications" className="footer__link">
						Publications
					</NavLink>
					<NavLink to="/media" className="footer__link">
						Media
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
					<h3 className="footer__links-heading">Social</h3>
					<a
						href="https://composersedition.com/terenceallbright/"
						target="_blank"
						className="footer__link footer__link--social"
					>
						<img
							src={ComposersEditionIcon}
							alt=""
							width="32"
							height="32"
							className="footer__link-icon"
						/>
						Composer&apos;s Edition
					</a>
					<a
						href="https://www.youtube.com/@terenceallbright1900"
						target="_blank"
						className="footer__link footer__link--social"
					>
						<img src={YouTubeIcon} alt="" width="32" height="32" className="footer__link-icon" />
						YouTube
					</a>
					<a
						href="https://www.linkedin.com/in/terence-allbright-0a797272/"
						target="_blank"
						className="footer__link footer__link--social"
					>
						<img src={LinkedInIcon} alt="" width="32" height="32" className="footer__link-icon" />
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
