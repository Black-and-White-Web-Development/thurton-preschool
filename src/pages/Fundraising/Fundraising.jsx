import Hero from "../../partials/Hero/Hero";
import "./Fundraising.scss";

import coverImg from "/src/assets/images/fundraising.jpg";

const Fundraising = function () {
	return (
		<>
			<Hero heading="Fundraising" coverImg={coverImg} />
			<section className="fundraising fb-col-wrapper"></section>
		</>
	);
};

export default Fundraising;
