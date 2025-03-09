import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./DesktopNav.scss";

const DesktopNav = function ({ routes }) {
	return (
		<header className="fb-col-wrapper nav__wrapper">
			<nav className="nav nav--desktop" role="navigation" aria-label="Main Navigation">
				<Link className="nav__home-link" to="/">
					Terence Allbright
				</Link>
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
			</nav>
		</header>
	);
};

DesktopNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default DesktopNav;
