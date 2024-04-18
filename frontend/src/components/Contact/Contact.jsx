import React, { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		contact_name: "",
		contact_email: "",
		contact_message: "",
	});

	const [alert, setAlert] = useState({
		type: "",
		message: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:3000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				setFormData({
					contact_name: "",
					contact_email: "",
					contact_message: "",
				});
				setAlert({
					type: "success",
					message: "Your message was received.",
				});
			} else {
				setAlert({
					type: "danger",
					message:
						"The contact form failed to submit. Try again, or send me an email directly at: kyle@karscottcodes.com",
				});
			}
		} catch (error) {
			console.error("Error submitting contact form:", error);
			setAlert(
				"The contact form failed to submit. The contact form failed to submit. Try again or send me an email directly at: kyle@karscottcodes.com"
			);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="container-fluid">
			<div className="row m-3">
				<div className="col">
					<h2 className="mt-5">Contact</h2>
					<p>
						I am open to freelance, professional and networking
						opportunities.
					</p>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-5 col-md-5 col-sm-12">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label class="contactLabel" htmlFor="contact_name">Your Name</label>
								<input
									type="text"
									className="form-control"
									id="contact_name"
									name="contact_name"
									value={formData.contact_name}
									onChange={handleChange}
									placeholder="Firstname Lastname"
								/>
							</div>
							<div className="mb-3">
								<label class="contactLabel"  htmlFor="contact_email">
									Your Email
								</label>
								<input
									type="email"
									className="form-control"
									id="contact_email"
									name="contact_email"
									value={formData.contact_email}
									onChange={handleChange}
									placeholder="youremail@email.com"
								/>
							</div>
							<div className="mb-3">
								<label class="contactLabel" htmlFor="contact_message">
									Your Message
								</label>
								<textarea
									rows="5"
									className="form-control"
									id="contact_message"
									name="contact_message"
									value={formData.contact_message}
									onChange={handleChange}
									placeholder="Tell me a little bit about why you want to to connect."
								></textarea>
							</div>
							{alert.message && (
								<div
									className={`alert alert-${alert.type}`}
									role="alert"
								>
									{alert.message}
								</div>
							)}
							<div class="d-grid gap-2">
								<button
									type="submit"
									className="btn btn-custom"
									value="add-contact"
								>
									Contact
								</button>
							</div>
						</form>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-12">
						<ul className="socialList">
							<li className="pt-3">
								<a
									href="https://github.com/karscottcodes"
									target="_blank"
								>
									<i className="bi bi-github bi-socials"></i>
									github.com/karscottcodes
								</a>
							</li>
							<li className="pt-3">
								<a
									href="https://codepen.io/karscottcodes"
									target="_blank"
								>
									<i className="fa-brands fa-codepen fa-socials"></i>
									codepen.io/karscottcodes
								</a>
							</li>
							<li className="pt-3">
								<a
									href="https://www.linkedin.com/in/karscottcodes"
									target="_blank"
								>
									<i className="bi bi-linkedin bi-socials"></i>
									linkedin.com/in/karscottcodes
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
