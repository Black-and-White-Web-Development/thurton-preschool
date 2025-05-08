import { useEffect, useState } from "react";
import ContentBlock from "../../partials/ContentBlock/ContentBlock";
import Events from "./Events/Events";
import Hero from "../../partials/Hero/Hero";
import "./Fundraising.scss";

const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/fundraising?populate[contentBlocks][populate]=image&populate[heroImage]=true`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Fundraising = function () {
	const [content, setContent] = useState({
		heroImage: { url: "" },
	});

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
				setContent(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Hero heading="Fundraising" coverImg={content.heroImage.url} />
			<Events heading={content.eventsHeading} body={content.eventsBody} />
			{content.contentBlocks && (
				<section className="fundraising__content-blocks fb-col-wrapper">
					{content.contentBlocks.map(block => (
						<ContentBlock key={block.id} content={block} />
					))}
				</section>
			)}
		</>
	);
};

export default Fundraising;
