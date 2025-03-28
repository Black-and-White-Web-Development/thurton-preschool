import ContactForm from "./ContactForm/ContactForm";
import Hero from "../../partials/Hero/Hero";
import OpeningTimes from "./OpeningTimes/OpeningTimes";
import "./Contact.scss";

import coverImg from "/src/assets/images/contact.jpg";

const Contact = function () {
	return (
		<>
			<Hero heading="Contact" coverImg={coverImg} />
			<section className="contact fb-col-wrapper">
				<ContactForm />
			</section>
			<OpeningTimes />
		</>
	);
};

export default Contact;
