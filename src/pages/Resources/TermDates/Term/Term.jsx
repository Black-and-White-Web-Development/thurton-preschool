import PropTypes from "prop-types";
import "./Term.scss";

const Term = function ({ term }) {
	return (
		<article className="term">
			<h3 className="term__heading">
				{term.name} {term.year}
			</h3>
			<dl className="term__dates-list">
				<div className="term__span">
					<dt className="term__name">{term.name} 1</dt>
					<dd className="term__dates">
						{term.firstHalfStart} - {term.firstHalfEnd}
					</dd>
				</div>
				<div className="term__span">
					<dt className="term__name">Half term</dt>
					<dd className="term__dates">
						{term.halfTermStart} - {term.halfTermEnd}
					</dd>
				</div>
				<div className="term__span">
					<dt className="term__name">{term.name} 2</dt>
					<dd className="term__dates">
						{term.secondHalfStart} - {term.secondHalfEnd}
					</dd>
				</div>
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
