import PropTypes from "prop-types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from "react-router-dom";
import "./ContentBlock.scss";

const API_URL = `${import.meta.env.VITE_CMS_URL}`;

const ContentBlock = function ({ content }) {
	return (
		<article key={content.id} className="content-block">
			{content.image && (
				<img
					src={API_URL + content.image.url}
					alt={content.image.alternativeText}
					className="content-block__image"
				/>
			)}
			<div className="content-block__content">
				<h3 className="contentblock__heading">{content.heading}</h3>
				<BlocksRenderer
					content={content.body}
					blocks={{
						paragraph: ({ children }) => <p className="content-block__paragraph">{children}</p>,
						heading: ({ children }) => <p className="content-block__paragraph">{children} </p>,
						link: ({ children, url }) => (
							<Link to={url} target="_blank" className="content-block__link">
								{children} (opens in new tab)
							</Link>
						),
					}}
				/>
			</div>
		</article>
	);
};

ContentBlock.propTypes = {
	content: PropTypes.shape({
		image: PropTypes.object,
		heading: PropTypes.string,
		body: PropTypes.array,
	}),
};

export default ContentBlock;
