import React, { useState } from "react";
import styles from "./Skills.module.css";
import {
	Col,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContent,
	TabPane,
} from "reactstrap";
import CustomLinearProgressBar from "../CustomLinearProgressBar/CustomLinearProgressBar";
import {
	softSkillsData,
	technicalSkillsData,
} from "../../config/helper-config";

const Skills = () => {
	const [activeTab, setActiveTab] = useState("1");

	const toggleTab = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	};

	return (
		<div className={styles.container} id="Skills">
			<div className={styles.heading}>Skills</div>

			<div className={styles.tabs}>
				<Nav justified pills>
					<NavItem>
						<NavLink
							href="#"
							active={activeTab === "1"}
							onClick={() => toggleTab("1")}
							className={`${styles.tab_heading} ${
								activeTab === "2" && styles.inactiveTab
							}`}>
							Technical Skills
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink
							href="#"
							active={activeTab === "2"}
							onClick={() => toggleTab("2")}
							className={`${styles.tab_heading} ${
								activeTab === "1" && styles.inactiveTab
							}`}>
							Soft Skills
						</NavLink>
					</NavItem>
				</Nav>

				<TabContent activeTab={activeTab} className={styles.tabContainer}>
					<TabPane tabId="1">
						<div className={styles.gridContainer}>
							<Row
								style={{
									margin: "-8px",
									marginLeft: "5px",
									marginRight: "5px",
								}}>
								{technicalSkillsData?.map((item, index) => (
									<Col
										key={index}
										xs="12"
										md="6"
										style={{
											paddingRight: "8px",
											paddingLeft: "8px",
											marginBottom: "16px",
										}}>
										<div style={{ width: "100%" }}>
											<CustomLinearProgressBar progressData={item} />
										</div>
									</Col>
								))}
							</Row>
						</div>
					</TabPane>

					<TabPane tabId="2">
						<div className={styles.gridContainer}>
							<Row
								style={{
									margin: "-8px",
									marginLeft: "5px",
									marginRight: "5px",
								}}>
								{softSkillsData?.map((item, index) => (
									<Col
										key={index}
										xs="12"
										md="6"
										style={{
											paddingRight: "8px",
											paddingLeft: "8px",
											marginBottom: "16px",
										}}>
										<div style={{ width: "100%" }}>
											<CustomLinearProgressBar progressData={item} />
										</div>
									</Col>
								))}
							</Row>
						</div>
					</TabPane>
				</TabContent>
			</div>
		</div>
	);
};

export default Skills;
