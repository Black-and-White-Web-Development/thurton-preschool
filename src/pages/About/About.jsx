import Hero from "../../partials/Hero/Hero";
import TeamMembers from "./TeamMembers/TeamMembers";
import Committee from "./Committee/Committee";
import "./About.scss";

import coverImg from "/src/assets/images/about-us.jpg";

const About = function () {
	return (
		<>
			<Hero heading="About Us" coverImg={coverImg} />
			<section className="about fb-col-wrapper">
				<h2>Welcome to Thurton Ashby & St Mary Preschool!!!</h2>
				<p>
					We provide a safe and nurturing environment in which children from 2 to 4 years of age
					learn and develop through purposeful play. The children are at the centre of what we do
					and we consistently reflect on the quality of our provision. We work with parents/carers
					and other professionals ensuring all children reach their full potential, including
					children with special educational needs and disabilities, and help them prepare for their
					transition to school.
				</p>
				<p>
					We offer the Early Years Foundation Stage (EYFS) curriculum allowing children to choose
					from a range of play based activities and experiences, some of which are adult led and
					some child initiated. These activities could be indoor or outdoor, which help them to gain
					new skills, learn to work and co-operate with each other, understand risk and how to stay
					safe, and explore the natural world. We encourage children to be outside as much as
					possible and have an outdoor playroom and sheltered mud kitchen in a well resourced
					garden. We also have access to a woodland area on the Village Hall&apos;s land to further
					support the children&apos;s wonder of the natural world.
				</p>
				<p>
					We also have access to a woodland area on the Village Hall&apos;s land to further support
					the children&apos;s wonder of the natural world. We use this area to offer fun activities
					based on exploring, discovering, using our imagination and watching the seasons change.
				</p>
			</section>
			<TeamMembers />
			<Committee />
		</>
	);
};

export default About;
