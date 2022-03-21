import styles from '../../styles/Button.module.css'
export default function Expand(props: {
  show: boolean,
  onClick: any
}) {
  return (
    <div className={styles.button_expand} onClick={props.onClick} style={{display: props.show?"none":"block"}}>
      <span className={styles.icon}><i className="fa-solid fa-maximize"></i></span>
      <span aria-label="See All Job History" className={styles.title}>See All</span>
    </div>
  )
}
