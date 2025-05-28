import { Link } from "react-router-dom";
import Hero from "../../partials/Hero/Hero";
import "./PageNotFound.scss";

const PageNotFound = function () {
	return (
		<>
			<Hero />
			<section className="page-not-found fb-col-wrapper">
				<h2 className="page-not-found__heading">404 | Page not found</h2>
				<p className="page-not-found__text medium">The page you are looking for can't be found.</p>
				<Link to="/" className="page-not-found__link">
					Back to home
				</Link>
			</section>
		</>
	);
};

export default PageNotFound;
