import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navigation = function ({ routes }) {
	const mobileNavBreakpoint = 600; // px
	const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileNavBreakpoint);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < mobileNavBreakpoint);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isMobile ? <MobileNav routes={routes} /> : <DesktopNav routes={routes} />;
};

Navigation.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Navigation;
