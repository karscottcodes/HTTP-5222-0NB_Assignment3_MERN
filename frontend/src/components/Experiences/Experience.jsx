import { useState, useEffect } from "react";

export default function Experiences() {
	const [experiences, setExperiences] = useState([]);
	const [educations, setEducations] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [expResponse, eduResponse] = await Promise.all([
					fetch("http://localhost:3000/api/experiences"),
					fetch("http://localhost:3000/api/educations"),
				]);

				const [expData, eduData] = await Promise.all([
					expResponse.json(),
					eduResponse.json(),
				]);

				setExperiences(expData);
				setEducations(eduData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row m-3">
				<div className="col">
					<h2 className="mt-5">Experiences</h2>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-9 col-md-9 col-sm-12">
						<div className="accordion" id="accordionExperience">
							{experiences.map((experience, index) => (
								<div
									className="accordion-item"
									key={experience.id}
								>
									<h2
										className="accordion-header"
										id={`heading-${index}`}
									>
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse-${index}`}
											aria-expanded="true"
											aria-controls={`collapse-${index}`}
										>
											{experience.role}
										</button>
									</h2>
									<div
										id={`collapse-${index}`}
										className="accordion-collapse collapse"
										aria-labelledby={`heading-${index}`}
									>
										<div className="accordion-body">
											<p className="timeframeSubtitle">
												{experience.company} <br />
												{experience.timeframe} |{" "}
												{experience.location}
											</p>
											{experience.description.map(
												(item, i) => (
													<p key={i}>{item}</p>
												)
											)}
											<p>
												Contributions included:
												<ul>
													{experience.contribution.map(
														(item, i) => (
															<li key={i}>
																{item}
															</li>
														)
													)}
												</ul>
											</p>
											<p>
												{experience.url && (
													<span>
														Limited contributions
														can be found{" "}
														<a
															href={
																experience.url
															}
														>
															here
														</a>
														.
													</span>
												)}
											</p>
										</div>
									</div>
								</div>
							))}
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseEducation"
										aria-expanded="true"
										aria-controls="collapseEducation"
									>
										Education
									</button>
								</h2>
								<div
									id="collapseEducation"
									className="accordion-collapse collapse"
									aria-labelledby="headingEducation"
								>
									<div className="accordion-body">
										{educations.map((education, index) => (
											<div key={index}>
												<h5 class="educationHeader">{education.school}, {education.year}</h5>
												<p class="educationSubtitle">{education.program}</p>
												<p>{education.description}</p>

												<p>
													{education.contributions && (
														<span>
															Additional Contributions{" "}
															<ul>
																{education.contributions.map(
																	(
																		item,
																		i
																	) => (
																		<li
																			key={
																				i
																			}
																		>
																			{
																				item
																			}
																		</li>
																	)
																)}
															</ul>
														</span>
													)}
												</p>
												<hr />
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
