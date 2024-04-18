export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<span className="mb-3 mb-md-0 text-muted">
						&copy; KARScott Codes | 2023-{year}
					</span>
				</div>
			</footer>
		</div>
	);
}
