import { useEffect, useState } from "react";

export default function Badges() {
	const [badges, setBadges] = useState([]);

	useEffect(() => {
		const getBadges = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/badges"
				);
				const data = await response.json();
				setBadges(data);
			} catch (error) {
				console.error("Error fetching badges:", error);
			}
		};
		getBadges();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row m-3">
				<div className="col">
					<h2 className="mt-5">my approach</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="card-group">
						{badges.map((badge, index) => (
							<div key={index} className="col-sm-3 p-3">
								<div className="card h-100" style={{ border: "none" }}>
									<div className="text-center">
										<i
											className={`${badge.img_url} bi-badge`}
										></i>
									</div>
									<div className="card-body">
										<h5 className="card-title text-center ">
											{badge.title}
										</h5>
										<p className="card-text p-3">
											{badge.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
