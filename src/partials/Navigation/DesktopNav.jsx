import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import { Link, NavLink } from "react-router-dom";
import "./DesktopNav.scss";

import logo from "/src/assets/logo/thurton-preschool-logo-light.svg";
import facebook from "/src/assets/icons/facebook.svg";

const DesktopNav = function ({ routes }) {
	return (
		<header className="fb-col-wrapper nav__wrapper">
			<nav className="nav nav--desktop" role="navigation" aria-label="Main Navigation">
				<ul className="nav__links">
					{routes.map(({ path, label }) => (
						<li key={path}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav__link nav__link--active" : "nav__link"
								}
								to={path}
								aria-label={`Navigate to ${label}`}
							>
								{label}
							</NavLink>
						</li>
					))}
				</ul>
				<Link className="nav__home-link" to="/">
					<img className="nav__logo" src={logo} alt="" />
				</Link>
				<ul className="nav__social-links">
					<li className="nav__social-link">
						<ToggleTheme />
					</li>
					<li className="nav__social-link">
						<Link to="https://www.facebook.com/thurtonashbypreschool/" target="_blank">
							<img src={facebook} alt="" width="32" height="32" className="nav__social-icon" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

DesktopNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string,
		})
	).isRequired,
};

export default DesktopNav;
