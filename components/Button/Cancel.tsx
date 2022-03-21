import styles from '../../styles/Button.module.css'
export default function ButtonCancel(props: {
  data: {
    id: number,
    url?: string,
    label: string,
    tabIndex?: number
  }
}) {
  let url
  if(props.data.url) {
    url = props.data.url
  }else {
    url = '/ '
  }
  return (
    <a aria-label={props.data.label} className={styles.button_cancel} href={url}>
      <span className={styles.icon}><i className="fa fa-times"/></span>
      <span className={styles.title}>{props.data.label}</span>
    </a>
  )
}
