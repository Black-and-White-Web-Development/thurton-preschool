import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import Hero from "../../partials/Hero/Hero";
import OpeningTimes from "./OpeningTimes/OpeningTimes";
import "./Contact.scss";

const API_URL = `${
	import.meta.env.VITE_CMS_URL
}/api/contact?populate=[openingHours]=true&populate[heroImage]=true`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Contact = function () {
	const [content, setContent] = useState({
		heading: "",
		body: [],
		contentBlocks: [],
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
			<Hero heading="Contact" coverImg={content.heroImage.url} />
			<section className="contact fb-col-wrapper">
				<h2 className="contact__heading">{content.contactHeading}</h2>
				<div className="contact__wrapper">
					<div className="contact__form-wrapper">
						{content.contactBody && (
							<BlocksRenderer
								content={content.contactBody}
								blocks={{
									paragraph: ({ children }) => <p className="contact__body">{children}</p>,
									link: ({ children, url }) => (
										<Link to={url} target="_blank" className="contact__link">
											{children} (opens in new tab)
										</Link>
									),
								}}
							/>
						)}
						<ContactForm />
					</div>
					<div className="contact__content-wrapper">
						<ContactInfo />
						<OpeningTimes
							heading={content.openingHoursHeading}
							openingHours={content.openingHours}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
