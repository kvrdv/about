import React, { FC, useState } from 'react';
import styles from './Navbar.module.scss';
import burger from 'assets/images/burger.svg';
import { IoClose } from 'react-icons/io5';
import { MENU_OPTIONS as menu } from 'utils/constants';
import { IconContext } from 'react-icons';

const Navbar: FC = () => {
	const [isOpenBurger, setIsOpenBurger] = useState(false);

	return (
		<>
			{!isOpenBurger ? (
				<div className={styles.navbarWrapper}>
					<span className={styles.logo}>KVRDV</span>
					<img
						onClick={() => setIsOpenBurger(true)}
						className={styles.burgerButton}
						alt="burger"
						src={burger}
					/>
				</div>
			) : (
				<div className={styles.burgerMenuWrapper}>
					{/* <div className={styles.burgerCose} onClick={() => setIsOpenBurger(false)}> */}
					<IconContext.Provider value={{ color: '#000000', size: '36px' }}>
						<div className={styles.burgerCose} onClick={() => setIsOpenBurger(false)}>
							<IoClose />
						</div>
					</IconContext.Provider>
					{/* </div> */}

					<ol className={styles.burgerMenuList}>
						{menu.map((element, index) => (
							<li className={styles.burgerMenuItem} key={element.name}>
								<span className={styles.burgerMenuNumber}>{`0${index}.`}</span>
								<span>{element.name}</span>
								<span className={styles.burgerMenuDot}>{`.`}</span>
							</li>
						))}
					</ol>
				</div>
			)}
		</>
	);
};

export default Navbar;
