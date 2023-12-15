import React from "react";
import styles from "./AboutMe.module.css";
import { Button } from "reactstrap";
import Image from "../../assets/myImage.jpg";
import { PERSONAL_INFO } from "../../config";

const AboutMe = () => {
	return (
		<div className={styles.container} id="AboutMe">
			<div className={styles.imgContainer}>
				<img src={Image} alt="myImage" />
			</div>

			<div className={styles.content}>
				<h1>About Me</h1>
				<p>{PERSONAL_INFO.aboutMe}</p>
				<a href={PERSONAL_INFO.resume_Link}>
					<Button color="info" outline className={styles.btn}>
						Resume
					</Button>
				</a>
			</div>
		</div>
	);
};

export default AboutMe;
