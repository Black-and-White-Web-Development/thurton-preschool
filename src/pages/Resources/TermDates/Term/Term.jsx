import PropTypes from "prop-types";
import "./Term.scss";

const formatDate = dateStr => {
	return new Intl.DateTimeFormat("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
	})
		.format(new Date(dateStr))
		.replace(/^(\w+)(\s)/, "$1,$2");
};

const Term = function ({ term }) {
	return (
		<article className="term">
			<h3 className="term__heading">{term.heading}</h3>
			<dl className="term__dates-list">
				{term.termDates?.map(dates => (
					<div key={dates.id} className="term__span">
						{dates.heading && <dt className="term__name">{dates.heading}</dt>}
						<dd className="term__dates">
							{formatDate(dates.startDate)} - {formatDate(dates.endDate)}
						</dd>
					</div>
				))}
			</dl>
		</article>
	);
};

Term.propTypes = {
	term: PropTypes.shape({
		name: PropTypes.string,
		year: PropTypes.number,
		firstHalfStart: PropTypes.string,
		firstHalfEnd: PropTypes.string,
		halfTermStart: PropTypes.string,
		halfTermEnd: PropTypes.string,
		secondHalfStart: PropTypes.string,
		secondHalfEnd: PropTypes.string,
	}),
};

export default Term;
