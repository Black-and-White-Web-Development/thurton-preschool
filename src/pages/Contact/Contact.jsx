import ContactForm from "./ContactForm/ContactForm";
import Hero from "../../partials/Hero/Hero";
import "./Contact.scss";

import coverImg from "/src/assets/images/contact.jpg";

const Contact = function () {
	return (
		<>
			<Hero heading="Contact" coverImg={coverImg} />
			<section className="contact fb-col-wrapper">
				<ContactForm />
			</section>
			<section className="opening-times fb-col-wrapper">
				<h2>Opening times</h2>
				<dl>
					<div>
						<dt>Monday</dt>
						<dd>9:00 - 13:00</dd>
					</div>
					<div>
						<dt>Tuesday</dt>
						<dd>9:00 - 15:00</dd>
					</div>
					<div>
						<dt>Wednesday</dt>
						<dd>Closed</dd>
					</div>
					<div>
						<dt>Thursday</dt>
						<dd>9:00 - 13:00</dd>
					</div>
					<div>
						<dt>Friday</dt>
						<dd>9:00 - 15:00</dd>
					</div>
				</dl>
				<p>*Own packed lunch is required each day.</p>
				<p>*Option for children to finish at 1pm or start at 12pm on longer days if desired. </p>
				<p>
					A healthy snack is provided each day. Milk and a variety of fresh fruit is sourced from
					Green Pastures in Berghapton.
				</p>
			</section>
		</>
	);
};

export default Contact;
