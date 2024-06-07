import React, { FC } from 'react';
import styles from './App.module.scss';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';

const App: FC = () => {
	return (
		<div className={styles.appWrapper}>
			<Navbar />
			<Header />
		</div>
	);
};

export default App;
