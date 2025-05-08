import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Term from "./Term/Term";
import "./TermDates.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/terms?populate=termDates`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const TermDates = function ({ heading, body }) {
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
			<h2 className="term-dates__heading">{heading}</h2>
			<div className="term-dates__content">
				<div className="term-dates__dates-wrapper">
					{terms.map(term => (
						<Term key={term.id} term={term} />
					))}
				</div>
				<aside className="term-dates__sidebar">
					{body && (
						<BlocksRenderer
							content={body}
							blocks={{
								paragraph: ({ children }) => (
									<p className="term-dates__description medium">{children}</p>
								),
								link: ({ children }) => (
									<a
										target="_blank"
										href="https://www.norfolk.gov.uk/38151"
										className="term-dates__link medium"
									>
										{children} (opens in new tab)
									</a>
								),
							}}
						/>
					)}
				</aside>
			</div>
		</section>
	);
};

TermDates.propTypes = {
	heading: PropTypes.string,
	body: PropTypes.array,
};

export default TermDates;
