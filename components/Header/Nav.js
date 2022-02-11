import styles from '../../styles/Header.module.css'
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/comida/list">
        <i className="fa-solid fa-apple-whole"></i>
        Ingredients
      </a>
      <a href="/nasa-mars-rovers/gallery">
        <i className="fas fa-truck-monster"></i>
        NASA Mars Rovers Photos
      </a>
    </nav>
  )
}
