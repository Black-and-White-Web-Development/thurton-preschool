import Event from "./Event/Event";
import Hero from "../../partials/Hero/Hero";
import "./Fundraising.scss";

import coverImg from "/src/assets/images/fundraising.jpg";

const events = [
	{
		id: 0,
		name: "Ice Lolly Fridays",
		date: null,
		description:
			"Grab a yummy after pre-school treat for just 50p on selected Fridays (dates will be advertised in advance).",
		pageLink: null,
		pageHeading: null,
	},
	{
		id: 1,
		name: "Autojumble and Classic Car Show",
		date: "May 25th 2025",
		description:
			"The biggest fundraiser of the year! A great day out for car fanatics big and small - there's something for everyone. If you wish to book in a car to show or book an autojumble stall then please get in touch.",
		pageLink:
			"https://www.gofundme.com/f/thurton-autojumble-and-classic-car-show?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer",
		pageHeading: "Thurton Autojumble and Classic Car Show",
	},
	{
		id: 2,
		name: "Jumble Sale",
		date: "Saturday, 12th July 2025",
		description: "Jumble is appreciated and can be brought to the Village Hall from 9am.",
		pageLink: null,
		pageHeading: null,
	},
	{
		id: 3,
		name: "Jumble Sale",
		date: "Saturday, 18th October 2025",
		description: "Jumble is appreciated and can be brought to the Village Hall from 9am.",
		pageLink: null,
		pageHeading: null,
	},
];

const Fundraising = function () {
	return (
		<>
			<Hero heading="Fundraising" coverImg={coverImg} />
			<section className="fundraising fb-col-wrapper">
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
							heading={event.name}
							date={event.date}
							description={event.description}
							pageLink={event.pageLink}
							pageTitle={event.pageHeading}
						/>
					))}
				</div>
			</section>
			<section className="fb-col-wrapper">
				<h2>Easyfundraising</h2>
				<p>Please help support Thurton & Ashby St.Mary Preschool by shopping online.</p>
				<p>
					Use easyfundraising to shop with over 3,600 retailers including Amazon, Argos, John Lewis,
					ASOS, Booking.com, eBay, Boden, and M&S.
				</p>
				<p>
					Every time you shop, you&apos;ll raise a free donation for Thurton & Ashby St. Mary
					Pre-School every time, it&apos;s that easy!
				</p>
				<p>
					Find out more:{" "}
					<a href="https://www.easyfundraising.org.uk/causes/tastmpresch/">
						Fundraising | Easyfundraising
					</a>
				</p>
			</section>
		</>
	);
};

export default Fundraising;
