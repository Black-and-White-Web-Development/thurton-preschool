import PropTypes from "prop-types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Ofsted = function ({ heading, body }) {
	return (
		<section className="ofsted-report fb-col-wrapper">
			<h2>{heading}</h2>
			{body && (
				<BlocksRenderer
					content={body}
					blocks={{
						paragraph: ({ children }) => <p className="ofsted__body">{children}</p>,
						link: ({ children }) => (
							<a target="_blank" href="https://www.norfolk.gov.uk/38151" className="ofsted__link">
								{children} (opens in new tab)
							</a>
						),
					}}
				/>
			)}
		</section>
	);
};

Ofsted.propTypes = {
	heading: PropTypes.string,
	body: PropTypes.array,
};

export default Ofsted;
