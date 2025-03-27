import Hero from "../../partials/Hero/Hero";
import TermDates from "./TermDates/TermDates";
import "./Resources.scss";

import coverImg from "/src/assets/images/resources.jpg";

const Resources = function () {
	return (
		<>
			<Hero heading="Resources" coverImg={coverImg} />
			<TermDates />
			<section className="fees fb-col-wrapper">
				<h2>Fees and Grant Funding</h2>
				<p>
					Thurton and Ashby St. Mary Preschool offers the Universal Entitlement of up to 15 hours
					Government Grant Funding a week from the beginning of the term after your child&apos;s
					third birthday.
				</p>
				<p>
					We can also accept the extended 30 hour funding and new working parent two year old
					funding from those families that are eligible. You will need to register on the government
					website to receive your eligibility code.
				</p>
				<p>
					We also now take Kiddivouchers, Edenred and Reward Gateway childcare vouchers. We are also
					part of the government&apos;s Tax-Free Childcare scheme. Visit{" "}
					<a href="https://www.gov.uk/get-tax-free-childcare">
						Get Tax-Free Childcare: step by step
					</a>{" "}
					for more information.
				</p>
				<p>
					For fee payers we charge a competitive rate of £4.80 per hour, which includes a healthy
					snack.
				</p>
				<p>
					If you have any questions regarding funding or fees please ask one of our team who will be
					happy to assist you with this process.
				</p>
			</section>
			<section className="ofsted-report fb-col-wrapper">
				<h2>Ofsted report</h2>
				<p>We are graded &quot;GOOD&quot; by Ofsted.</p>
				<p>Our last Ofsted Inspection was 24/11/2023.</p>
				<p>
					If you would like to read our OFSTED report please click{" "}
					<a href="https://files.ofsted.gov.uk/v1/file/50236804">here</a>.
				</p>
			</section>
		</>
	);
};

export default Resources;
