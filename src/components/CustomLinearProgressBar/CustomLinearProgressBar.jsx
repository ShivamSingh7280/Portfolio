import React from "react";
import styles from "./CustomLinearProgressBar.module.css";
import { Progress } from "reactstrap";

const CustomLinearProgressBar = ({ progressData }) => {
	const { type, value } = progressData;
	return (
		<div className={styles.container}>
			<span>
				<span className={styles.type}>{type}</span>
				<Progress value={value} />
			</span>
		</div>
	);
};

export default CustomLinearProgressBar;
