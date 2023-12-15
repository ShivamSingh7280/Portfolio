import React from "react";
import styles from "./LandingPage.module.css";
import Header from "../Header/Header";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "reactstrap";
import { PERSONAL_INFO } from "../../config";

const LandingPage = () => {
	return (
		<div className={styles.container}>
			<Header />

			<div className={styles.mainContent}>
				<div className={styles.content}>
					<div className={styles.heading}>
						<h1>{PERSONAL_INFO.name}</h1>
						<p>{PERSONAL_INFO.message}</p>
					</div>

					<div className={styles.icons}>
						<span>
							<a href={PERSONAL_INFO.github_Link}>
								<FaGithub className={styles.icon} />
							</a>

							<a href={PERSONAL_INFO.linkedIn_Link}>
								<FaLinkedin className={styles.icon} />
							</a>

							<a href={PERSONAL_INFO.instgram_Link}>
								<IoLogoInstagram className={styles.icon} />
							</a>

							<a href={PERSONAL_INFO.facebook_Link}>
								<FaFacebookSquare className={styles.icon} />
							</a>

							<a href={PERSONAL_INFO.x_Link}>
								<FaSquareXTwitter className={styles.icon} />
							</a>
						</span>
					</div>

					<div className={styles.btnContainer}>
						<a href="#AboutMe">
							<Button color="info" outline className={styles.btn}>
								More about Me
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
