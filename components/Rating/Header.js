import styles from '../styles/Global.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/GiantRobot_Logo.png"/>
    </header>
  )
}
