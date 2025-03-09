import { Fragment } from "react";
import PropTypes from "prop-types";
import "./DescriptionList.scss";

const DescriptionList = function ({ items, description }) {
	const itemElements = items.map((item, i) => (
		<Fragment key={i}>
			{Object.keys(item).map(key => (
				<div key={key + item} className="description-list__item">
					<dt className="description-list__term small">{key}</dt>
					<dd className="description-list__details small">{item[key]}</dd>
				</div>
			))}
		</Fragment>
	));

	return (
		<div className="description-list">
			{description && <p className="description-list__description">{description}</p>}
			<dl className="description-list__items-container">{itemElements}</dl>
		</div>
	);
};

DescriptionList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string,
			term: PropTypes.string,
		})
	).isRequired,
	description: PropTypes.string,
};

export default DescriptionList;
