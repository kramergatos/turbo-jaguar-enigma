import Social from '../Button/SocialNav'
import styles from '../../styles/Footer.module.css'
export default function Nav(props) {
  return (
    <div className={styles.nav_wrap}>
      <nav className={styles.nav}>
        <span className={styles.nav_header}>Information</span>
        <a href="/about">
          <i className="fa-solid fa-circle-info"></i>
          About This Website
        </a>
        <a href="https://kramergatos.com" target="_blank">
          <i className="fa-solid fa-cat"></i>
          Kramer Gatos
        </a>
        <a href="/legal/privacy">
          <i className="fas fa-lock"></i>
          Privacy
        </a>
      </nav>
      <nav className={styles.nav}>
        <span className={styles.nav_header}>Project Demos</span>
        <a href="/comida/list">
          <i className="fa-solid fa-apple-whole"></i>
          Ingredients
        </a>
        <a href="/nasa-mars-rovers/gallery">
          <i className="fas fa-truck-monster"></i>
          NASA Mars Rovers Photos
        </a>
      </nav>
      <Social />
    </div>
  )
}
