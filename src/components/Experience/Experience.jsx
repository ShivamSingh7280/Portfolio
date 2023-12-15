import React from "react";
import styles from "./Experience.module.css";
import { companies } from "../../config/helper-config";

const Experience = () => {
	return (
		<div className={styles.container}>
			<h1>Experiences</h1>

			<div className={styles.content}>
				{companies.map((company, index) => {
					return (
						<div key={index} className={styles.companyContent}>
							<div className={styles.imgContainer}>
								<img src={company.logo} alt="companyLogo" />
							</div>
							<p>
								<strong>{company.name}</strong>
							</p>
							<p>{company.designation}</p>
							<p>{company.timeRange}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
