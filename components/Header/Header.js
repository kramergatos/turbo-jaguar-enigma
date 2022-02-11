import styles from '../../styles/Header.module.css'
import ButtonLanguage from './ButtonLanguage'
import ButtonNav from './ButtonNav'
export default function Header() {
  return (
    <header className={styles.header} id="header">
      <a className={styles.logo} href="/">
        Turbo<br />
        Jaguar<br />
        Enigma
      </a>
      <ButtonNav />
      <ButtonLanguage />
    </header>
  )
}
