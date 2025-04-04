import { useEffect, useState } from "react";
import HeroHome from "./HeroHome/HeroHome";
import Testimonials from "./Testimonials/Testimonials";
import "./Home.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/home?populate=announcements`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Home = function () {
	const [homepage, setHomepage] = useState({});

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
				setHomepage(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<HeroHome />
			<section className="fb-col-wrapper">
				<aside className="announcements">
					{Array.isArray(homepage.announcements) &&
						homepage.announcements.map(message => (
							<p key={message.id} className="announcements__message small">
								{message.body}
							</p>
						))}
				</aside>
				<article className="home">
					<h2 className="home__heading">{homepage.heading}</h2>
					<div className="home__body">
						{Array.isArray(homepage.body) &&
							homepage.body.map((paragraph, i) => (
								<p className="home__paragraph" key={i}>
									{paragraph.children?.map((child, j) => {
										const { text, bold, italic } = child;

										let formatted = text;

										if (bold && italic) {
											formatted = (
												<strong key={j}>
													<em>{text}</em>
												</strong>
											);
										} else if (bold) {
											formatted = <strong key={j}>{text}</strong>;
										} else if (italic) {
											formatted = <em key={j}>{text}</em>;
										} else {
											return text;
										}

										return formatted;
									})}
								</p>
							))}
					</div>
				</article>
			</section>
			<Testimonials />
		</>
	);
};

export default Home;
