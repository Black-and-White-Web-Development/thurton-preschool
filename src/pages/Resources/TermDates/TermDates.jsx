import Holiday from "./Term/Holiday";
import Term from "./Term/Term";
import "./TermDates.scss";

const autumnTerm = {
	name: "Autumn term",
	year: 2024,
	firstHalfStart: "Wednesday, 4 September",
	firstHalfEnd: "Thursday, 24 October",
	halfTermStart: "Friday, 25 October",
	halfTermEnd: "Friday, 1 November",
	secondHalfStart: "Monday, 4 November",
	secondHalfEnd: "Friday, 20 December",
};

const christmasHoliday = {
	name: "Christmas holiday",
	year: 2024,
	start: "Monday, 23 December",
	end: "Monday, 6 January",
};

const springTerm = {
	name: "Spring term",
	year: 2025,
	firstHalfStart: "Tuesday, 7 January",
	firstHalfEnd: "Friday, 14 February",
	halfTermStart: "Monday, 17 February",
	halfTermEnd: "Friday 21 February",
	secondHalfStart: "Monday, 24 February",
	secondHalfEnd: "Friday, 4 April",
};

const easterHoliday = {
	id: 3,
	name: "Easter holiday",
	year: 2025,
	start: "Monday, 7 April",
	end: "Tuesday 22 April",
};

const summerTerm = {
	name: "Summer term",
	year: 2025,
	firstHalfStart: "Wednesday, 23 April",
	firstHalfEnd: "Friday, 23 May (Monday, 5 May is a Bank Holiday)",
	halfTermStart: "Monday, 26 May",
	halfTermEnd: "Friday, 30 May",
	secondHalfStart: "Monday, 2 June",
	secondHalfEnd: "Tuesday, 22 July",
};

const TermDates = function () {
	return (
		<section className="term-dates fb-col-wrapper">
			<h2 className="term-dates__heading">Term Dates 2024-2025</h2>
			<div className="term-dates__content">
				<div className="term-dates__dates-wrapper">
					<Term term={autumnTerm} />
					<Holiday holiday={christmasHoliday} />
					<Term term={springTerm} />
					<Holiday holiday={easterHoliday} />
					<Term term={summerTerm} />
				</div>
				<aside className="term-dates__sidebar">
					<p className="term-dates__description medium">
						Preschool is open term time only and we follow school term dates and holidays designated
						by Norfolk County Countil.
					</p>
					<p className="term-dates__description medium">
						To be redirected to their website please follow the link below.
					</p>
					<a
						target="_blank"
						href="https://www.norfolk.gov.uk/38151"
						className="term-dates__link medium"
					>
						School term dates and school holidays - Norfolk County Council (opens in new tab)
					</a>
				</aside>
			</div>
		</section>
	);
};

export default TermDates;
