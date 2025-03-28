import Hero from "../../partials/Hero/Hero";
import Fees from "./Fees/Fees";
import Ofsted from "./Ofsted/Ofsted";
import TermDates from "./TermDates/TermDates";
import "./Resources.scss";

import coverImg from "/src/assets/images/resources.jpg";

const Resources = function () {
	return (
		<>
			<Hero heading="Resources" coverImg={coverImg} />
			<TermDates />
			<Fees />
			<Ofsted />
		</>
	);
};

export default Resources;
