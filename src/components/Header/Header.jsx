import React, { useState } from "react";

import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { navLinks } from "../../config/helper-config";
import styles from "./Header.module.css";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const _toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Navbar light expand="md" className={`fixed-top ${styles.container}`}>
			<NavbarBrand href="/">Portfolio</NavbarBrand>
			<NavbarToggler onClick={_toggleNavbar} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					{navLinks.map((navLink, index) => {
						return (
							<NavItem key={index}>
								<NavLink href={navLink.id} className={styles.navLink}>
									{navLink.value}
								</NavLink>
							</NavItem>
						);
					})}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
