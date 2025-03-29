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
				<div className="contact__wrapper">
					<div className="contact__details">
						<p>To book a visit, please contact us using the details below:</p>
						<p>Thurton & Ashby St Mary Preschool</p>
						<p>Ashby Road, Thurton, Norwich</p>
						<p>NR14 6AX</p>
						<p>Email: info@thurtonpreschool.co.uk</p>
						<p>Telephone: 07594 649184</p>
					</div>
					<ContactForm />
				</div>
			</section>
			<OpeningTimes />
		</>
	);
};

export default Contact;
