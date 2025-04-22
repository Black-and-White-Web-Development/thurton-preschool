import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Event from "./Event/Event";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/events`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Events = function ({ heading, body }) {
	const [events, setEvents] = useState([]);

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
				setEvents(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section id="events" className="fundraising fb-col-wrapper">
			<h2>{heading}</h2>
			{body && (
				<BlocksRenderer
					content={body}
					blocks={{
						paragraph: ({ children }) => <p className="committee__description">{children}</p>,
					}}
				/>
			)}
			<div className="events__wrapper">
				{events.map(event => (
					<Event
						key={event.id}
						heading={event.heading}
						date={event.date}
						description={event.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Events;
