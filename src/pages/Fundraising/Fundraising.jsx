import Events from "./Events/Events";
import Hero from "../../partials/Hero/Hero";
import "./Fundraising.scss";

import coverImg from "/src/assets/images/fundraising.jpg";

const Fundraising = function () {
	return (
		<>
			<Hero heading="Fundraising" coverImg={coverImg} />
			<Events />
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
