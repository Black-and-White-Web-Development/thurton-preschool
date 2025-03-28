import "./OpeningTimes.scss";

const openingTimes = [
	{ id: 0, day: "Monday", opens: "09:00", closes: "13:00" },
	{ id: 1, day: "Tuesday", opens: "09:00", closes: "15:00" },
	{ id: 2, day: "Wednesday", opens: null, closes: null },
	{ id: 3, day: "Thursday", opens: "09:00", closes: "13:00" },
	{ id: 4, day: "Friday", opens: "09:00", closes: "15:00" },
];

const OpeningTimes = function () {
	return (
		<section className="opening-times fb-col-wrapper">
			<h2 className="opening-times__heading">Opening times</h2>
			<dl className="opening-times__list">
				{openingTimes.map(day => (
					<div key={day.id} className="opening-times__list-item">
						<dt className="opening-times__day">{day.day}</dt>
						<dd className="opening-times__times">
							{day.opens ? (
								<>
									<span className="opening-times__time">{day.opens}</span>
									<span className="opening-times__connector">to</span>
									<span className="opening-times__time">{day.closes}</span>
								</>
							) : (
								<span className="opening-times__time">Closed</span>
							)}
						</dd>
					</div>
				))}
			</dl>
			<p>
				A healthy snack is provided each day. Milk and a variety of fresh fruit is sourced from
				Green Pastures in Bergh Apton.
			</p>
			<p>*Own packed lunch is required each day.</p>
			<p>*Option for children to finish at 1pm or start at 12pm on longer days if desired. </p>
		</section>
	);
};

export default OpeningTimes;
