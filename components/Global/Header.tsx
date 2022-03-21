import Nav from '../Button/Nav'
import styles from '../../styles/Header.module.css'
import {dataNav} from '../../data/nav'
export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.content}>
        <a aria-label="Home" className={styles.logo} href="/">
          Turbo<br />
          Jaguar<br />
          Enigma
        </a>
        <Nav data={dataNav} />
      </div>
    </header>
  )
}
