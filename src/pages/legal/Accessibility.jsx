import "./Legal.scss";

const Accessibility = function () {
	return (
		<section className="legal fb-col-wrapper">
			<h1 className="legal__heading">Accessibility statement</h1>
			<h2 className="legal__subheading">Our commitment to accessibility</h2>
			<p className="legal__paragraph">
				We are committed to making our website accessible to as many users as possible, including
				those with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1
				AA standard, as described in the Equality Act 2010, to ensure that our website is easy to
				navigate and interact with for everyone.
			</p>
			<h2 className="legal__subheading">Accessibility features</h2>
			<p className="legal__paragraph">To enhance usability, we aim to:</p>
			<ul className="legal__list">
				<li className="legal__list-item">Provide clear and consistent navigation.</li>
				<li className="legal__list-item">Use readable fonts and sufficient color contrast.</li>
				<li className="legal__list-item">Ensure our website is compatible with screen readers.</li>
				<li className="legal__list-item">
					Offer keyboard navigation for all interactive elements.
				</li>
				<li className="legal__list-item">Use descriptive alt text for images where applicable.</li>
			</ul>
			<h2 className="legal__subheading">Reporting accessibility issues</h2>
			<p className="legal__paragraph">
				We continuously review our website to improve accessibility. If you experience any
				difficulty accessing or interacting with content, please contact the site owner so the issue
				can be addressed.
			</p>
			<p className="legal__paragraph">
				We aim to respond to accessibility feedback within five business days and take necessary
				actions to improve accessibility where possible.
			</p>
			<h2 className="legal__subheading">Enforcement procedure</h2>
			<p className="legal__paragraph">
				If you are not satisfied with our response, you can contact the Equality Advisory and
				Support Service (EASS) for further assistance:{" "}
				<a href="https://www.equalityadvisoryservice.com/" target="_blank" className="legal__link">
					Equality Advisory and Support Service (opens in new tab)
				</a>
				.
			</p>
			<p className="legal__paragraph">
				We are dedicated to improving accessibility and ensuring an inclusive experience for all
				users.
			</p>
		</section>
	);
};

export default Accessibility;
