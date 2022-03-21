import styles from '../../styles/Button.module.css'
export default function ButtonDefault(props: {
  data: {
    id: number,
    url: string,
    icon: string,
    label: string,
    subtitle: string,
    target: string,
    title: string
  }
}) {
  return (
    <a className={styles.button} href={props.data.url} target={props.data.target}>
      <span className={styles.icon}><i className={props.data.icon}></i></span>
      <span aria-label={props.data.label} className={styles.title}>{props.data.title}</span>
      {
        props.data.subtitle && <span className={styles.subtitle}>{props.data.subtitle}</span>
      }
    </a>
  )
}
