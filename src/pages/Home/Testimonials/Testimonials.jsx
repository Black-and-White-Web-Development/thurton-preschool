import { useEffect, useState, useRef } from "react";
import Testimonial from "./Testimonial/Testimonial";
import "./Testimonials.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/testimonials`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [isHovered, setIsHovered] = useState(false);
	const wrapperRef = useRef(null);

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
				setTestimonials(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const wrapper = wrapperRef.current;

		if (!wrapper) {
			return;
		}

		const scrollSpeed = 1;
		const intervalTime = 30;

		let scrollInterval;

		const scroll = () => {
			const firstItem = wrapper.firstElementChild;

			if (!firstItem) return;

			const itemWidth = firstItem.offsetWidth + parseInt(getComputedStyle(wrapper).gap);

			if (wrapper.scrollLeft >= itemWidth) {
				wrapper.appendChild(firstItem);
				wrapper.scrollLeft -= itemWidth;
			} else {
				wrapper.scrollLeft += scrollSpeed;
			}
		};

		if (!isHovered) {
			scrollInterval = setInterval(scroll, intervalTime);
		} else {
			clearInterval(scrollInterval);
		}

		return () => clearInterval(scrollInterval);
	}, [isHovered]);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<section id="testimonials" className="testimonials fb-col-wrapper">
			<h2 className="testimonials__heading">What our families say about us</h2>
			<div
				ref={wrapperRef}
				className="testimonials__wrapper fb-col-wrapper__fb"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{testimonials.map(testimonial => (
					<Testimonial key={testimonial.id} body={testimonial.body} index={testimonial.id} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
