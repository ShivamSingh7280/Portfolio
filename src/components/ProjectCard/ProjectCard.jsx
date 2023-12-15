import React, { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";
import { Button } from "reactstrap";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "../../helpers/helper-methods";

const ProjectCard = ({ projectData }) => {
	const [projectLanguages, setProjectLanguages] = useState({});

	const _projectLanguageFormatter = (languagesData) => {
		if (!Object.keys(languagesData)?.length) return "N/A";

		const totalLangShare = Object.keys(languagesData)?.reduce(
			(total, item) => total + languagesData[item],
			0
		);

		const result = {};

		Object.keys(languagesData)?.forEach((langKey) => {
			result[langKey] = (
				(languagesData[langKey] * 100) /
				totalLangShare
			)?.toFixed(1);
		});

		return (
			<>
				{Object.keys(result)?.map((key, index) => (
					<span key={index}>{` ${key} : ${result[key]}% `}</span>
				))}
			</>
		);
	};

	const _fetchProjectLanguages = async () => {
		try {
			const response = await fetch(`${projectData?.languages_url}`);
			const data = await response.json();

			setProjectLanguages(data);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		_fetchProjectLanguages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.projectName}>{projectData?.name}</div>

			<div className={styles.btnContainer}>
				<a href={`${projectData?.svn_url}/archive/master.zip`}>
					<Button color="primary" outline className={styles.btn}>
						<FaGithub />
						Clone Project
					</Button>
				</a>

				<a href={`${projectData?.svn_url}`} rel="noreferrer" target="_blank">
					<Button color="primary" outline className={styles.btn}>
						<FaGithub />
						Repo
					</Button>
				</a>
			</div>

			<div className={styles.horizontalLine}></div>

			<div className={styles.language}>
				<strong>Languages :</strong>

				{Object.keys(projectLanguages)?.length ? (
					_projectLanguageFormatter(projectLanguages)
				) : (
					<span>Project yet to be deployed</span>
				)}
			</div>

			<div className={styles.footer}>
				<a href={`${projectData?.svn_url}/stargazers`}>
					<span className={styles.stars}>
						<FaGithub />
						Stars
					</span>
				</a>

				<span className={styles.date}>
					<span className={styles.date_heading}>Updated on :</span>{" "}
					{formatDate(projectData?.pushed_at)}
				</span>
			</div>
		</div>
	);
};

export default ProjectCard;
