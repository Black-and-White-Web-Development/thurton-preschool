import PropTypes from "prop-types";
import "./Headline.scss";

const Headline = function ({ heading, children }) {
	return (
		<article className="headline">
			<h2 className="headline__heading">{heading}</h2>
			<div className="headline__content">{children}</div>
		</article>
	);
};

Headline.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};

export default Headline;
