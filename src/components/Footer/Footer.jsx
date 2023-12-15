import React from "react";
import styles from "./Footer.module.css";
import { PERSONAL_INFO } from "../../config";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>Get In Touch</div>

			<p>
				Exercitation nostrud occaecat magna labore consequat laboris in dolor
				est excepteur laboris eiusmod qui voluptate. Irure ad voluptate id
				cupidatat adipisicing officia qui veniam culpa amet minim cillum
				excepteur nostrud. Est dolore cillum elit ullamco. Ipsum pariatur
				officia proident est in ad incididunt enim duis esse nostrud excepteur
				amet qui.
				<a href={`mailto:${PERSONAL_INFO.gmail_Id}`}>
					shivamsingh7280@gmail.com
				</a>
			</p>

			<h4>© Portfolio 2023</h4>
		</div>
	);
};

export default Footer;
