import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "./ContactInfo.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/website-info`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const formatPhoneNumber = number => `${number.slice(0, 5)} ${number.slice(5)}`;

const ContactInfo = function () {
	const [content, setContent] = useState({});

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
		<div className="contact-info">
			<h3 className="contact-info__heading">Contact information</h3>
			<dl className="contact-info__list">
				<div className="contact-info__list-item">
					<dt className="contact-info__term">Email</dt>
					<dd className="contact-info__details">{content.contactEmail}</dd>
				</div>
				<div className="contact-info__list-item">
					<dt className="contact-info__term">Telephone</dt>
					<dd className="contact-info__details">{formatPhoneNumber(content.contactNumber)}</dd>
				</div>
				<div className="contact-info__list-item">
					<dt className="contact-info__term">Address</dt>
					<dd className="contact-info__details">
						{content.address && (
							<BlocksRenderer
								content={content.address}
								blocks={{
									paragraph: ({ children }) => <p className="contact-info__address">{children}</p>,
								}}
							/>
						)}
					</dd>
				</div>
			</dl>
		</div>
	);
};

export default ContactInfo;
