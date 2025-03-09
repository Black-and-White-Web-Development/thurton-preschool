import PropTypes from "prop-types";
import "./Legal.scss";

const TermsOfUse = function ({ siteName }) {
	return (
		<section className="legal fb-col-wrapper">
			<h1 className="legal__heading">Terms of Use</h1>
			<p className="legal__paragraph">
				By using and browsing this website, you are agreeing to comply with and be bound by the
				following terms and conditions of use, which together with our privacy policy govern our
				relationship with you concerning this website. If you disagree with any part of these terms
				and conditions, please do not use our website.
			</p>
			<h2 className="legal__subheading">Parties</h2>
			<p className="legal__paragraph">
				The term &quot;{siteName}&quot; or &quot;us&quot; or &quot;we&quot; refers to the owner of
				this website. The term &quot;you&quot; refers to the user or viewer of this website. The use
				of this website is subject to the following terms of use:
			</p>
			<h2 className="legal__subheading">Site content</h2>
			<p className="legal__paragraph">
				The content of the pages of this website is for your general information and use only. It is
				subject to change without notice.
			</p>
			<p className="legal__paragraph">
				Your use of any information or materials on this website is entirely at your own risk, for
				which we shall not be liable. It shall be your own responsibility to ensure that any
				products, services or information available through this website meet your specific
				requirements.
			</p>
			<p className="legal__paragraph">
				Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
				timeliness, performance, completeness or suitability of the information and materials found
				or offered on this website for any particular purpose. You acknowledge that such information
				and materials may contain inaccuracies or errors and we expressly exclude liability for any
				such inaccuracies or errors to the fullest extent permitted by law.
			</p>
			<h2 className="legal__subheading">External resources</h2>
			<p className="legal__paragraph">
				This website may also include links to other websites. These links are provided for your
				convenience to provide further information. They do not signify that we endorse the
				website(s). We have no responsibility for the content of the linked website(s).
			</p>
			<h2 className="legal__subheading">Licensing</h2>
			<p className="legal__paragraph">
				This website contains material which is owned by or licensed to us. This material includes,
				but is not limited to, the design, layout, look, appearance and graphics. Reproduction is
				prohibited other than in accordance with the copyright notice, which forms part of these
				terms and conditions.
			</p>
			<p className="legal__paragraph">
				All trade marks reproduced in this website which are not the property of, or licensed to,
				the operator are acknowledged on the website.
			</p>
			<h2 className="legal__subheading">Fair use</h2>
			<p className="legal__paragraph">
				Unauthorised use of this website may give rise to a claim for damages and/or be a criminal
				offence.
			</p>
			<p className="legal__paragraph">
				Your use of this website and any dispute arising out of such use of the website is subject
				to the laws of England, Northern Ireland, Scotland and Wales.
			</p>
		</section>
	);
};

TermsOfUse.propTypes = {
	siteName: PropTypes.string.isRequired,
};

export default TermsOfUse;
