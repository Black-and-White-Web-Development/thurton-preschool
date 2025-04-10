import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = function () {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	function handleChange(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const data = new FormData(form);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(data).toString(),
		})
			.then(() => setSubmitted(true))
			.catch(error => {
				console.error("Form submission error:", error);
				alert("Oops! Something went wrong.");
			});
	}

	function handleReset() {
		setFormData({ name: "", email: "", message: "" });
		setSubmitted(false);
	}

	if (submitted) {
		return (
			<div className="form form--success">
				<span>Thank you, your message has been sent!</span>
				<button onClick={handleReset} className="form__button form__button--reset">
					Send another message
				</button>
			</div>
		);
	}

	return (
		<form
			name="contact"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			onSubmit={handleSubmit}
			className="form"
		>
			<input type="hidden" name="form-name" value="contact" />
			<div className="form__fields">
				<div className="field">
					<label htmlFor="name" className="field__label">
						Full name
					</label>
					<input
						onChange={handleChange}
						type="text"
						id="name"
						name="name"
						className="field__input"
					/>
				</div>
				<div className="field">
					<label htmlFor="email" className="field__label">
						Email
					</label>
					<input
						onChange={handleChange}
						type="email"
						id="email"
						name="email"
						className="field__input"
					/>
				</div>
				<div className="field">
					<label htmlFor="message" className="field__label">
						Message
					</label>
					<textarea
						onChange={handleChange}
						id="message"
						name="message"
						rows={4}
						className="field__input field__input--textarea"
					></textarea>
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
