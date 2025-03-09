import PropTypes from "prop-types";
import "./Legal.scss";

const PrivacyPolicy = function ({ siteName }) {
	return (
		<section className="legal fb-col-wrapper">
			<h1 className="legal__heading">Privacy Policy</h1>
			<p className="legal__paragraph">
				This privacy policy is for this website and is served by {siteName} and governs the privacy
				of its users who choose to use it.
			</p>
			<p className="legal__paragraph">
				The policy sets out the different areas where user privacy is concerned and outlines the
				obligations and requirements of the users, the website and the website owners. Furthermore,
				the way this website processes, stores and protects user data and information will also be
				detailed within this policy.
			</p>
			<p className="legal__paragraph">
				This website and its owners take a proactive approach to user privacy and ensure the
				necessary steps are taken to protect the privacy of its users throughout their visiting
				experience. This website complies with all UK national laws and requirements for user
				privacy.
			</p>
			<h2 className="legal__subheading">Contact and communication</h2>
			<p className="legal__paragraph">
				Users contacting this website and/or its owners do so at their own discretion and provide
				any such personal details requested at their own risk. Your personal information is kept
				private and stored securely until a time it is no longer required or has no use, as detailed
				in the Data Protection Act 1998. Every effort has been made to ensure a safe and secure
				form-to-email submission process, but it is advised that users using such form-to-email
				processes do so at their own risk.
			</p>
			<p className="legal__paragraph">
				This website and its owners use any information submitted to provide you with further
				information about the products/services they offer or to assist you in answering any
				questions or queries you may have submitted.
			</p>
			<h2 className="legal__subheading">External links</h2>
			<p className="legal__paragraph">
				Although this website only looks to include quality, safe and relevant external links, users
				are advised to adopt a policy of caution before clicking any external web links mentioned
				throughout this website.
			</p>
			<p className="legal__paragraph">
				The owners of this website cannot guarantee or verify the contents of any externally linked
				website despite their best efforts. Users should therefore note they click on external links
				at their own risk. This website and its owners cannot be held liable for any damages or
				implications caused by visiting any external links mentioned.
			</p>
			<h2 className="legal__subheading">Social media platforms</h2>
			<p className="legal__paragraph">
				Communication, engagement and actions taken through external social media platforms that
				this website and its owners participate in are custom to the terms and conditions as well as
				the privacy policies held with each social media platform respectively.
			</p>
			<p className="legal__paragraph">
				Users are advised to use social media platforms wisely and communicate/engage with them with
				due care and caution regarding their privacy and personal details. This website nor its
				owners will ever ask for personal or sensitive information through social media platforms
				and encourage users wishing to discuss sensitive details to contact them through primary
				communication channels such as by telephone or email.
			</p>
			<p className="legal__paragraph">
				This website may use social sharing buttons which help share web content directly from web
				pages to the social media platform in question. Users are advised before using such social
				sharing buttons that they do so at their own discretion and note that the social media
				platform may track and save your request to share a web page respectively through your
				social media platform account.
			</p>
		</section>
	);
};

PrivacyPolicy.propTypes = {
	siteName: PropTypes.string.isRequired,
};

export default PrivacyPolicy;
