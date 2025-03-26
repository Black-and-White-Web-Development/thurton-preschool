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
		</>
	);
};

export default Contact;
