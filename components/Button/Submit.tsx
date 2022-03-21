import styles from '../../styles/Button.module.css'
export default function ButtonSubmit(props: {
  data: {
    id: number,
    url?: string,
    label: string,
    tabIndex?: number
  }
}) {
  return (
    <button className={styles.button_submit} tabIndex={props.data.tabIndex} type="submit">
      <span className={styles.icon}><i className="fa fa-save"/></span>
      <span className={styles.title}>{props.data.label}</span>
    </button>
  )
}
