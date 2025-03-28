import { useEffect, useState, useRef } from "react";
import Testimonial from "./Testimonial/Testimonial";
import "./Testimonials.scss";

const testimonials = [
	{
		id: 0,
		body: "The BEST preschool with the friendliest staff! Always going above and beyond to ensure the children are always happy and having lots of fun. 😊",
	},
	{
		id: 1,
		body: "The staff at Thurton Preschool worked so incredibly hard over a period of months to help my son settle in. They formed bonds and created an environment that he now cannot wait to go to everyday. The team truly know and care for each child. I wouldn't hesitate to recommend Thurton.",
	},
	{
		id: 2,
		body: "Thurton and Ashby St Mary Preschool is such a wonderful, nuturing environment and has given our child the best start to their school career. The preschool is a really caring family and happy place to be. The children have a fantastic outdoor space in which to play and learn. The woodland school is magical and our child loves to play and explore there.",
	},
	{
		id: 3,
		body: "We would be lost without Ellen and the team at Thurton Preschool. They are so caring and dedicated to each child as an individual, they make it very easy to leave our daughter there, knowing she is in good hands.",
	},
	{
		id: 4,
		body: "A nurturing and caring preschool. We are very pleased to have found it! The fundraising they do is fantastic. It helps keep fees down and strengthens the community.",
	},
	{
		id: 5,
		body: "My favourite thing is seeing my friends and I like glue and sticking and painting things. I have banana and raisins. My teachers play babies with me in the Fox Den. I love all the lots of babies and songs. H, age 2.",
	},
	{
		id: 6,
		body: "My son and I absolutely love Thurton and Ashby Preschool. For someone who is very particular about who cares for my child, I can honestly say I feel beyond happy dropping him off, as the team go above and beyond to make sure he is happy and content. They focus on his individual interests and allow him to explore them further within the setting. He loves preschool!",
	},
	{
		id: 7,
		body: "We are so pleased we moved our son to Thurton Preschool. He settled in very quickly and he loves it there. He is always very happy to go, and often talks about preschool at home. We have been very impressed with the range of activities they provide and staff communication has been great. Lovely people and real sense of community!",
	},
	{
		id: 8,
		body: "We have found Thurton Preschool to be a nuturing place where our child can be his own person and enjoy learning. We are thankful for all the efforts the team go to to create fun and interesting learning experiences for our child within the preschool building, in the outdoor area and in the woodland during Woodland Wanderers. Our child says he enjoys playing with friends, the toys and in the woodland.",
	},
	{
		id: 9,
		body: "My son absolutely loves going to preschool and has thrived since he started. Being outdoors all year round has had so many benefits where is has loved learning through the seasons. The Woodland Wanderers sessions are so unique. I couldn't have asked for a better start for him.",
	},
];

const Testimonials = () => {
	const wrapperRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

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
		<section className="testimonials fb-col-wrapper">
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
