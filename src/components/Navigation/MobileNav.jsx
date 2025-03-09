import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./MobileNav.scss";
import "./DesktopNav.scss";

const MobileNav = function ({ routes }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleHamburger = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return (
		<header className="fb-col-wrapper nav__wrapper">
			<nav
				id="nav--mobile"
				className="nav nav--mobile"
				role="MobileNav"
				aria-label="Main navigation"
			>
				<header className="nav__header">
					<Link className="nav__home-link" to="/">
						Terence Allbright
					</Link>
					<button
						className="menu-button nav__button"
						aria-label="Open navigation menu"
						onClick={handleHamburger}
					>
						<span className="menu-button__label">Menu</span>
						<svg
							className={`menu-button__icon nav__icon ${isMenuOpen && "open"}`}
							width="24px"
							height="24px"
							viewBox="0 0 96 96"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
						>
							{isMenuOpen ? (
								<path d="M48.103,42.343L73.558,16.887L79.215,22.544L53.76,48L79.215,73.455L73.558,79.112L48.103,53.656L22.647,79.112L16.991,73.455L42.446,48L16.991,22.544L22.647,16.887L48.103,42.343Z" />
							) : (
								<g transform="matrix(3.22644,0,0,0.831826,-14.2557,-2.88077)">
									<path d="M31.725,22.697L31.725,32.314L6.93,32.314L6.93,22.697L31.725,22.697ZM31.725,56.358L31.725,65.976L6.93,65.976L6.93,56.358L31.725,56.358ZM31.725,90.02L31.725,99.637L6.93,99.637L6.93,90.02L31.725,90.02Z" />
								</g>
							)}
						</svg>
					</button>
				</header>
				<ul className={`nav__links ${isMenuOpen ? "open" : ""}`}>
					{routes.map(({ path, label }) => (
						<li key={path} onClick={() => setIsMenuOpen(false)}>
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

MobileNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default MobileNav;
