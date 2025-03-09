import "./ContactForm.scss";

const ContactForm = function () {
	return (
		<form className="form" action="" method="POST">
			<div className="form__fields">
				<div className="field">
					<label htmlFor="full-name" className="field__label">
						Full name
					</label>
					<input type="text" id="full-name" name="fullName" className="field__input" />
				</div>
				<div className="field">
					<label htmlFor="email" className="field__label">
						Email
					</label>
					<input type="email" id="email" name="email" className="field__input" />
				</div>
				<div className="field">
					<label htmlFor="message" className="field__label">
						Message
					</label>
					<textarea id="message" name="message" rows={4} className="field__input"></textarea>
				</div>
			</div>
			<div className="form__actions">
				<button type="submit" className="form__button form__button--submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
