import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import burger from 'assets/images/burger.svg';

const Burger: FC = () => {
	return (
		<div className={styles.navbarWrapper}>
			<span className={styles.logo}>KVRDV</span>
			<img className={styles.burger} alt="burger" src={burger} />
		</div>
	);
};

export default Burger;