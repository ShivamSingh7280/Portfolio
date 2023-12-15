import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Leadership from "../Leadership/Leadership";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Portfolio = () => {
	return (
		<div>
			<LandingPage />
			<AboutMe />
			<Experience />
			<Projects />
			<Leadership />
			<Skills />
			<Footer />
		</div>
	);
};

export default Portfolio;
