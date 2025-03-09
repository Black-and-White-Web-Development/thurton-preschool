import { useState } from "react";
import Publication from "../components/Publication/Publication";
import pubsData from "/src/data/publications.json";
import "./Publications.scss";

const Publications = function () {
	const [sortType, setSortType] = useState("year-desc");

	const extractYear = yearStr => {
		const matches = yearStr.match(/\d{4}/g);
		return matches ? parseInt(matches[matches.length - 1], 10) : 0;
	};

	const sortStrategies = {
		"year-asc": (a, b) => extractYear(a.year) - extractYear(b.year),
		"year-desc": (a, b) => extractYear(b.year) - extractYear(a.year),
		"title-asc": (a, b) => a.title.localeCompare(b.title),
		"title-desc": (a, b) => b.title.localeCompare(a.title),
	};

	const sortedPubs = [...pubsData].sort(sortStrategies[sortType] || (() => 0));

	const pubsElements = sortedPubs.map(pub => (
		<Publication
			key={pub.id}
			title={pub.title}
			year={pub.year}
			instruments={pub.instruments}
			description={pub.description}
			link={pub.link}
		/>
	));

	return (
		<section className="publications fb-col-wrapper">
			<h1 className="publications__heading">Publications</h1>
			<select
				className="publications__sort"
				value={sortType}
				onChange={e => setSortType(e.target.value)}
			>
				<option value="year-asc">Chronological</option>
				<option value="year-desc">Reverse chronological</option>
				<option value="title-asc">Alphabetical</option>
				<option value="title-desc">Reverse alphabetical</option>
			</select>

			<div className="publications__publications">{pubsElements}</div>
		</section>
	);
};

export default Publications;
