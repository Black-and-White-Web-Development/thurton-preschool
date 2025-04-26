import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import HeroHome from "./HeroHome/HeroHome";
import Testimonials from "./Testimonials/Testimonials";
import "./Home.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/home?populate=announcements`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Home = function () {
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
		<>
			<HeroHome />
			<section className="fb-col-wrapper">
				<aside className="announcements">
					{Array.isArray(content.announcements) &&
						content.announcements.map(message => (
							<p key={message.id} className="announcements__message small">
								{message.body}
							</p>
						))}
				</aside>
				<article className="home">
					<h2 className="home__heading">{content.heading}</h2>
					<div className="home__body">
						{content.body && (
							<BlocksRenderer
								content={content.body}
								blocks={{
									paragraph: ({ children }) => <p className="home__paragraph">{children}</p>,
									link: ({ children, url }) => (
										<Link to={url} target="_blank" className="event__link">
											{children} (opens in new tab)
										</Link>
									),
								}}
							/>
						)}
					</div>
				</article>
			</section>
			<Testimonials heading={content.testimonialsHeading} />
		</>
	);
};

export default Home;
