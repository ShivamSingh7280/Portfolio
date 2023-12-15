import React from "react";
import styles from "./Leadership.module.css";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

const Leadership = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>Leadership</div>

			<div className={styles.content}>
				<div className={styles.text}>
					Ad cupidatat dolore sint elit cupidatat Lorem enim enim velit
					excepteur cupidatat voluptate quis laborum. Reprehenderit laborum
					cupidatat eu elit sint aliqua nisi proident cillum eiusmod
					exercitation aliqua. Nulla minim duis minim exercitation duis. Laborum
					deserunt adipisicing deserunt anim sint commodo. Nisi officia laboris
					culpa amet veniam sit sint. Velit officia cupidatat tempor veniam do
					est nostrud velit.Magna sint nulla culpa exercitation tempor do aliqua
					excepteur dolore quis in. Qui pariatur id officia mollit mollit
					consectetur Lorem laboris ad tempor officia magna non in. Quis
					proident non fugiat pariatur commodo do anim aliquip. Voluptate mollit
					enim excepteur amet laborum aliqua culpa cupidatat esse cillum
					nostrud. Et duis magna elit est velit sint nostrud non exercitation
					incididunt dolore quis labore. Id tempor Lorem sit aliqua ipsum ut
					duis. Id ex magna incididunt id.
				</div>

				<div className={styles.carouselContainer}>
					<CustomCarousel />
				</div>
			</div>
		</div>
	);
};

export default Leadership;
