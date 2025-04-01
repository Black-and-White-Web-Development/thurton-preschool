import PropTypes from "prop-types";
import "./Event.scss";

const Event = function ({ heading, date, description, pageLink, pageTitle }) {
	return (
		<article className="event">
			<h3 className="event__heading">{heading}</h3>
			<p className="event__date">
				<strong>{date ? date : "See description for dates"}</strong>
			</p>
			<p className="event__copy">{description}</p>
			<a className="event__link" href={pageLink}>
				{pageTitle}
			</a>
		</article>
	);
};

Event.propTypes = {
	heading: PropTypes.string,
	date: PropTypes.string,
	description: PropTypes.string,
	pageLink: PropTypes.string,
	pageTitle: PropTypes.string,
};

export default Event;
