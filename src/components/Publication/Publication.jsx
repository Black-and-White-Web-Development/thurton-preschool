import PropTypes from "prop-types";
import "./Publication.scss";

const Publication = function ({ title, year, instruments, description, link }) {
	const instrumentElements = instruments.map((instrument, i) => (
		<li key={i} className="publication__instrument small">
			{instrument}
		</li>
	));

	return (
		<article className="publication">
			<header className="publication__header">
				<h3 className="publication__title">{title}</h3>
				<p className="publication__year small">{year}</p>
				<ul className="publication__instruments">{instrumentElements}</ul>
			</header>
			<p className="publication__description">{description}</p>
			<a href={link} target="_blank" className="publication__link">
				View on score on Composers Edition ➞{" "}
				<span className="new-tab-message">(opens in new tab)</span>
			</a>
		</article>
	);
};

Publication.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	instruments: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Publication;
