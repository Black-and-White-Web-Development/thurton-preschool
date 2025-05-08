import { useEffect, useState } from "react";
import Hero from "../../partials/Hero/Hero";
import Fees from "./Fees/Fees";
import Ofsted from "./Ofsted/Ofsted";
import TermDates from "./TermDates/TermDates";
import "./Resources.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/resources?populate[heroImage]=true`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Resources = function () {
	const [content, setContent] = useState({
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
			<Hero heading="Resources" coverImg={content.heroImage.url} />
			<TermDates heading={content.termDatesHeading} body={content.termDatesBody} />
			<Fees heading={content.feesHeading} body={content.feesBody} />
			<Ofsted heading={content.ofstedHeading} body={content.ofstedBody} />
		</>
	);
};

export default Resources;
