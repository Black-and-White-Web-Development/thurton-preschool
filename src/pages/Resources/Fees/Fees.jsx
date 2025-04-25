import PropTypes from "prop-types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Fees = function ({ heading, body }) {
	return (
		<section id="fees" className="fees fb-col-wrapper">
			<h2>{heading}</h2>
			{body && (
				<BlocksRenderer
					content={body}
					blocks={{
						paragraph: ({ children }) => <p className="fees__body">{children}</p>,
						link: ({ children }) => (
							<a target="_blank" href="https://www.norfolk.gov.uk/38151" className="fees__link">
								{children} (opens in new tab)
							</a>
						),
					}}
				/>
			)}
		</section>
	);
};

Fees.propTypes = {
	heading: PropTypes.string,
	body: PropTypes.array,
};

export default Fees;
