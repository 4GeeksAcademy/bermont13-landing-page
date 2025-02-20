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
		<div>
		<Navbar/>	
		<Jumbotron/>
		<div className="card-container row">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<Footer/>
		</div>
	);
};

export default Home;