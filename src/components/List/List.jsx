import PropTypes from "prop-types";
import "./List.scss";

const List = function ({ items, description, isOrdered = false }) {
	const itemElements = items.map((item, i) => (
		<li key={i} className="list__item">
			{item}
		</li>
	));

	return (
		<div className="list">
			<p className="list__description">{description}</p>
			{isOrdered ? (
				<ol className="list__items-container ordered">{itemElements}</ol>
			) : (
				<ul className="list__items-container unordered">{itemElements}</ul>
			)}
		</div>
	);
};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string,
	isOrdered: PropTypes.bool,
};

export default List;
