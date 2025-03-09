import "./Legal.scss";

const CookiePolicy = function () {
	return (
		<section className="legal fb-col-wrapper">
			<h1 className="legal__heading">Cookie Policy</h1>
			<h2 className="legal__subheading">What are cookies?</h2>
			<p className="legal__paragraph">
				Cookies are small text files stored on your device to help a website function properly. They
				enable core features such as security, accessibility, and session management. Cookies may
				track, save and store information about the user&apos;s interactions and usage of the
				website. This allows the website, through its server, to provide the users with a tailored
				experience within the website.
			</p>
			<h2 className="legal__subheading">Our use of cookies</h2>
			<p className="legal__paragraph">
				<strong>
					This website only uses essential cookies, which are strictly necessary for the website to
					operate. These cookies do not track, store, or collect personal data for marketing or
					analytics purposes.
				</strong>
			</p>
			<p className="legal__paragraph">Essential cookies this websites uses may include:</p>
			<ul className="legal__list">
				<li className="legal__list-item">
					<b>Security cookies</b> - to protect against unauthorized access.
				</li>
				<li className="legal__list-item">
					<b>Authentication cookies</b> - to remember login sessions (if applicable).
				</li>
				<li className="legal__list-item">
					<b>Functionality cookies</b> - to enable key website features (e.g., user preferences).
				</li>
			</ul>
			<p className="legal__paragraph">
				Since these cookies are necessary for the website to function, they cannot be disabled.
			</p>
			<h2 className="legal__subheading">Tracking and Third-Party Cookies</h2>
			<p className="legal__paragraph">
				This website does <strong>not</strong> use:
			</p>
			<ul className="legal__list">
				<li className="legal__list-item">Google Analytics or any tracking software.</li>
				<li className="legal__list-item">Advertising, marketing, or targeted cookies.</li>
				<li className="legal__list-item">
					Third-party cookies from advertisers or referral programs.
				</li>
			</ul>
			<h2 className="legal__subheading">Managing Cookies</h2>
			<p className="legal__paragraph">
				To control or delete cookies on your device, you can adjust your browser settings. Please
				note that blocking essential cookies may impact this and other website&apos;s functionality.
			</p>
		</section>
	);
};

export default CookiePolicy;
