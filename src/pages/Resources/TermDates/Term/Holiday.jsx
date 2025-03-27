import PropTypes from "prop-types";
import "./term.scss";

const Holiday = function ({ holiday }) {
	return (
		<article className="holiday">
			<h3 className="holiday__heading">
				{holiday.name} {holiday.year}
			</h3>
			<ul className="holiday__dates-list">
				<li className="holiday__span">
					{holiday.start} - {holiday.end}
				</li>
			</ul>
		</article>
	);
};

Holiday.propTypes = {
	holiday: PropTypes.shape({
		name: PropTypes.string,
		year: PropTypes.number,
		start: PropTypes.string,
		end: PropTypes.string,
	}),
};

export default Holiday;
