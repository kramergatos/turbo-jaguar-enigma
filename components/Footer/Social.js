import styles from '../../styles/Footer.module.css'
export default function Social(props) {
  return (
    <nav className={styles.nav_social}>
      <a href="https://www.instagram.com/kramergatos/" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/joe.kramergatos/" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.linkedin.com/in/kramergatos/" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://angel.co/u/kramergatos" target="_blank">
        <i className="fab fa-angellist"></i>
      </a>
      <a href="https://github.com/kramergatos" target="_blank">
        <i className="fab fa-github"></i>
      </a>
    </nav>
  )
}
