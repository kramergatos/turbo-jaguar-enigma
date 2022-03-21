import styles from '../../styles/Button.module.css'
export default function ButtonIconOnly(props: {
  data: {
    id: number,
    url: string,
    icon: string,
    label: string,
    target: string
  }
}) {
  return (
    <a aria-label={props.data.label} className={styles.button_icon_only} href={props.data.url} target={props.data.target}>
      <i className={props.data.icon}></i>
    </a>
  )
}
