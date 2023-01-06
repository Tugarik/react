import "../styles/sale.css";

export default function Sale() {
	return (
		<div className="container-lg back text-center align-items-center justify-content-center d-flex justify-content-md-end pe-md-5">
			<div>
				<button className="newBtn btn btn-warning">New laptop</button>
				<p className="saleText1">Sale up to 50% off</p>
				<p className="saleText2">12 inch hd display</p>
				<button className="shopBtn btn btn-warning">Shop now</button>
			</div>
		</div>
	);
}
