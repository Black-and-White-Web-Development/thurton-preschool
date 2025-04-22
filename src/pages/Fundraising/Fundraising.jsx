import { useEffect, useState } from "react";
import ContentBlock from "../../partials/ContentBlock/ContentBlock";
import Events from "./Events/Events";
import Hero from "../../partials/Hero/Hero";
import "./Fundraising.scss";

import coverImg from "/src/assets/images/fundraising.jpg";

// const API_URL = `${import.meta.env.VITE_CMS_URL}/api/fundraising`;
const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/fundraising?populate[contentBlocks][populate]=image`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Fundraising = function () {
	const [fundraising, setFundraising] = useState({});

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
				setFundraising(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Hero heading="Fundraising" coverImg={coverImg} />
			<Events heading={fundraising.eventsHeading} body={fundraising.eventsBody} />
			{fundraising.contentBlocks && (
				<section className="fundraising__content-blocks fb-col-wrapper">
					{fundraising.contentBlocks.map(block => (
						<ContentBlock key={block.id} content={block} />
					))}
				</section>
			)}
		</>
	);
};

export default Fundraising;
