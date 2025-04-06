import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "./Event.scss";

const formatDate = dateString => {
	const date = new Date(dateString);
	const day = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(date); // Monday
	const dayNum = date.getDate(); // 6
	const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(date); // April

	return `${day}, ${dayNum} of ${month}`;
};

const Event = function ({ heading, description, date }) {
	return (
		<article className="event">
			<h3 className="event__heading">{heading}</h3>
			<p className="event__date">
				<strong>{date ? formatDate(date) : "See description for dates"}</strong>
			</p>
			<BlocksRenderer
				content={description}
				blocks={{
					paragraph: ({ children }) => <p className="event__description">{children}</p>,
					link: ({ children, url }) => (
						<Link to={url} target="_blank" className="event__link">
							{children} (opens in new tab)
						</Link>
					),
				}}
			/>
		</article>
	);
};

Event.propTypes = {
	heading: PropTypes.string.isRequired,
	description: PropTypes.array.isRequired,
	date: PropTypes.string,
};

export default Event;
