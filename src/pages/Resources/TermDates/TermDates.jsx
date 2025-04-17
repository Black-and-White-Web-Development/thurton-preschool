import { useEffect, useState } from "react";
import Holiday from "./Term/Holiday";
import Term from "./Term/Term";
import "./TermDates.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/terms?populate=termDates`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const TermDates = function () {
	const [terms, setTerms] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				setTerms(data.data);
			} catch (error) {
				console.error("Error fetching staff members:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section id="term-dates" className="term-dates fb-col-wrapper">
			<h2 className="term-dates__heading">Term Dates 2024-2025</h2>
			{console.log(terms)}
			<div className="term-dates__content">
				<div className="term-dates__dates-wrapper">
					{terms.map(term => (
						<Term key={term.id} term={term} />
					))}
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
