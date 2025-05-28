import { useState } from "react";
import PropTypes from "prop-types";
import "./Term.scss";

import chevron from "/src/assets/icons/chevron.svg";

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
	const [isCollapsed, setIsCollapsed] = useState(() => {
		const dates = term.termDates ?? [];
		if (dates.length === 0) return false;

		const latestEndDate = dates.reduce((latest, current) => {
			const currentEnd = new Date(current.endDate);
			return currentEnd > latest ? currentEnd : latest;
		}, new Date(dates[0].endDate));

		return latestEndDate < new Date();
	});

	const handleClick = () => setIsCollapsed(prev => !prev);

	return (
		<article className="term">
			<header className="term__header">
				<h3 className={`term__heading ${isCollapsed ? "term__heading--collapsed" : ""}`}>
					{term.heading}
				</h3>
				<button
					className={`term__control ${isCollapsed ? "term__control--collapsed" : ""}`}
					onClick={handleClick}
				>
					{isCollapsed ? "Show" : "Hide"}
					<img
						className={`term__control-icon ${isCollapsed ? "term__control-icon--collapsed" : ""}`}
						src={chevron}
						alt=""
					/>
				</button>
			</header>
			{!isCollapsed && (
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
			)}
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
