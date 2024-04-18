import { useState, useEffect } from "react";

export default function Nav() {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		const getLinks = async () => {
			let response = await fetch("http://localhost:3000/api/menuLinks");
			let data = await response.json();
			setLinks(data);
		};
		getLinks();
	}, []);

	return (
		<nav
			className="navbar navbar-expand-sm nav-custom"
			aria-label="main-navigation"
		>
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src="https://www.karscottcodes.com/img/logo.png" alt="..." height="30" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#main-navbars"
					aria-controls="main-navbars"
					aria-expanded="false"
					aria-label="Toggle Navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="main-navbars">
					<ul className="navbar-nav ms-auto mb-2 mb-sm-0">
						{links.map((link, index) => (
							<li className="nav-item" key={index}>
								<a className="nav-link" href={link.path}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
