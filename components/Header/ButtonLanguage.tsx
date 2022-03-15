import React, { useState } from 'react'
import styles from '../../styles/Header.module.css'
export default function ButtonLanguage(props) {
	/*const [languageEN, setLanguage] = useState(false)
	function toggle(){
		setLanguage(!languageEN)
	}*/
	return (
		<div className={styles.button_language_wrap}>
			<div className={styles.button_language}>
				<div className={styles.button_language_flag}>🇺🇸</div>
        <div className={styles.button_language_label}>EN</div>
			</div>
		</div>
	)
}
