import React, { FC } from 'react';
import graphic from 'assets/images/graphic.webp';
import styles from './Header.module.scss';
import { TAGLINE_TEXT as tagline } from 'utils/constants';

const Header: FC = () => {
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.graphicWrapper}>
				<img className={styles.graphic} alt="graphic" src={graphic} />
			</div>
			<div className={styles.taglineWrapper}>
				{tagline.map((word: string) => {
					return (
						<span key={word} className={styles.taglineWord}>
							{word}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
