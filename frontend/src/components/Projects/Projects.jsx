import { useState, useEffect } from "react";

export default function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const getProjects = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/projects"
				);
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};
		getProjects();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row m-3">
				<div className="col">
					<h2 className="mt-5">Projects</h2>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-9 col-md-12 col-sm-12">
						<div
							id="carouselExampleCaptions"
							className="carousel slide"
							data-bs-ride="carousel"
						>
							<div className="carousel-indicators">
								{projects.map((project, index) => (
									<button
										key={index}
										type="button"
										data-bs-target="#carouselExampleCaptions"
										data-bs-slide-to={index}
										className={index === 0 ? "active" : ""}
										aria-current={
											index === 0 ? "true" : "false"
										}
										aria-label={`Slide ${index + 1}`}
									></button>
								))}
							</div>
							<div className="carousel-inner">
								{projects.map((project, index) => (
									<div
										key={index}
										className={`carousel-item ${
											index === 0 ? "active" : ""
										}`}
									>
										<img
											src={project.img_url}
											className="d-block w-100"
											alt={`Slide ${index + 1}`}
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>{project.long_name}</h5>
											<p>{project.description}</p>
											<p>
												<a href={project.url} class="btn btn-primary" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Project Link</a>
												</p><p>
												<a href={project.url} class="btn btn-info text-white" target="_blank"><i class="fa-brands fa-square-github"></i> Github Repo</a>
											</p>
										</div>
									</div>
								))}
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">
									Previous
								</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
