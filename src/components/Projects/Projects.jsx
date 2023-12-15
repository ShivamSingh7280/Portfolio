import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { GITHUB_USERNAME, BASE_URL } from "../../config/index.js";
import { Col, Row } from "reactstrap";

const Projects = () => {
	const [projectsDataList, setProjectsDataList] = useState([]);

	const _fetchUserGitHubData = async () => {
		try {
			const response = await fetch(
				`${BASE_URL}/users/${GITHUB_USERNAME}/repos`
			);

			const data = await response.json();
			setProjectsDataList(data);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		_fetchUserGitHubData();
	}, []);

	return (
		<div className={styles.container} id="Projects">
			<div className={styles.heading}>Recent Projects</div>

			<div className={styles.gridContainer}>
				<Row style={{ margin: "-8px", marginLeft: "5px", marginRight: "5px" }}>
					{projectsDataList?.map((project) => (
						<Col
							key={project?.id}
							xs="12"
							md="6"
							style={{
								paddingRight: "8px",
								paddingLeft: "8px",
								marginBottom: "16px",
							}}>
							<div style={{ width: "100%" }}>
								<ProjectCard projectData={project} />
							</div>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Projects;
