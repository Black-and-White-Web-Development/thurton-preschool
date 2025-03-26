import HeroHome from "/src/components/HeroHome/HeroHome";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = function () {
	return (
		<>
			<HeroHome />
			<section className="fb-col-wrapper">
				<p>
					We have spaces available for September 2025. Get in touch NOW to find out more:
					info@thurtonpreschool.co.uk
				</p>
				<p>
					We will also be offering woodland sessions on a Tuesday for all children and a Friday for
					children who are three or over.
				</p>
				<p>Eligible 2-year-old funding accepted as well as 3/4-year-olds.</p>
				<p></p>
				<h2>Welcome to Thurton & Ashby St Mary Preschool</h2>
				<p>
					Thurton and Ashby St Mary Pre-school is a charity led setting based out of Thurton Village
					Hall. We welcome children from the age of 2 up until they start school. We are
					predominantly based outside in our generous garden. Children can access all areas of the
					EYFS in a fun, creative and stimulating way. We find allowing children so much time
					outdoors enables them to develop risk management and independence while constantly
					learning to understand the world around us.
				</p>
				<p>
					We also off a woodland session once a week where children get to show off a completely
					different side to themselves, running through the trees and using their imagination,
					investigative and creative sides in completely different ways. All children who join us at
					Thurton and Ashby St Mary Pre-school are happy and excited to spend their days with us
					where they get opportunities to explore, enjoy and thrive!
				</p>
			</section>
			<Testimonials />
		</>
	);
};

export default Home;
