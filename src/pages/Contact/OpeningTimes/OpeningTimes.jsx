import PropTypes from "prop-types";
import "./OpeningTimes.scss";

const formatTime = time => time.slice(0, -3);

const OpeningTimes = function ({ heading, openingHours }) {
	return (
		<div className="opening-times">
			<h3 className="opening-times__heading">{heading}</h3>
			<dl className="opening-times__list">
				{openingHours &&
					openingHours.map(day => (
						<div key={day.id} className="opening-times__list-item">
							<dt className="opening-times__day">{day.weekday}</dt>
							<dd className="opening-times__times">
								{day.openingTime ? (
									<>
										<span className="opening-times__time">{formatTime(day.openingTime)}</span>
										<span className="opening-times__connector">to</span>
										<span className="opening-times__time">{formatTime(day.closingTime)}</span>
									</>
								) : (
									<span className="opening-times__time">Closed</span>
								)}
							</dd>
						</div>
					))}
			</dl>
		</div>
	);
};

OpeningTimes.propTypes = {
	heading: PropTypes.string,
	openingHours: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			weekday: PropTypes.string,
			openingTime: PropTypes.string,
			closingTime: PropTypes.string,
		})
	),
};

export default OpeningTimes;
