import PropTypes from "prop-types";
import "./Quote.scss";

const Quote = function ({ quote, author }) {
	return (
		<blockquote className="quote">
			<p className="quote__quotation">{quote}</p>
			<p className="quote__author">{author}</p>
		</blockquote>
	);
};

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};

export default Quote;
