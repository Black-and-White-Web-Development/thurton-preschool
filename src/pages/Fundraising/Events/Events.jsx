import { useEffect, useState } from "react";
import Event from "./Event/Event";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/events`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Events = function () {
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
			<h2>Upcoming events</h2>
			<p>
				The Preschool is a charity led organisation that holds fundraisers throughout the year to
				keep it running. We have an elected committee who together with the staff organise and run
				many different events. Please consider supporting us by volunteering or coming to our
				events. Thank you.{" "}
			</p>
			<p>
				We have several planned fundraising events for the rest of this year. They are as follows:{" "}
			</p>
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
