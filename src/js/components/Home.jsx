import React from "react";
import Card from './Card.jsx';  // Asegúrate de importar tu Card
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mb-4">
				<div className="row">
					<div className="col">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-3">
						<Card />

					</div>
					<div className="col-md-4 col-lg-3">
						<Card />

					</div>
					<div className="col-md-4 col-lg-3">
						<Card />

					</div>
					<div className="col-md-4 col-lg-3">
						<Card />

					</div>
				</div>
			</div>




			<Footer />
		</>
	);
};

export default Home;