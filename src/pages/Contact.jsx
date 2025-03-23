import ContactForm from "/src/components/ContactForm/ContactForm.jsx";
import Hero from "../components/Hero/Hero";

import coverImg from "/src/assets/images/contact.jpg";

const Contact = function () {
	return (
		<>
			<Hero heading="Contact" coverImg={coverImg} />
			<section className="fb-col-wrapper">
				<h1>Contact</h1>
				<ContactForm />
			</section>
		</>
	);
};

export default Contact;
