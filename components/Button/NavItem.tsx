import styles from '../../styles/Button.module.css'
export default function NavItem(props: {
  data: {
    id: number,
    url: string,
    icon: string,
    label: string,
    subtitle?: string,
    target: string,
    title: string
  }
}) {
  return (
    <a aria-label={props.data.label} href={props.data.url}>
      <span className={styles.icon}><i className={props.data.icon}></i></span>
      <span className={styles.title}>{props.data.title}</span>
    </a>
  )
}
