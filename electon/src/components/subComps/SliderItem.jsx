import "../styles/sliderItem.css";
const sliders = [];

export default function SliderItem() {
	return (
		<div className="sliderItem d-flex flex-column flex-md-row">
			<div className="left order-1 order-md-0 d-flex justify-content-center flex-md-fill text-center text-md-start">
				<div>
					<div className="brand ms-md-5">Canon</div>
					<div className="type ms-md-5">camera</div>
					<div className="d-flex flex-wrap mt-3 ms-md-5 justify-content-center justify-content-md-start">
						<button className="btn btn-warning text-white">
							Shop Now
						</button>
						<button className="btn btn-outline-primary ms-3">
							View more
						</button>
					</div>
					<div className="circle mt-3 text-center">
						&#x2B24; &#x25EF; &#x25EF;
					</div>
				</div>
			</div>
			<div className="right order-0 order-md-1 flex-md-fill  pt-5">
				<img
					className="sliderImage"
					src="./img/canon_d3300.png"
					alt="slider1"
					width="390px"
				/>
			</div>
		</div>
	);
}
