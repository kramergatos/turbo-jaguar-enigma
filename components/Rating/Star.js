import styles from '../../styles/Form.module.css'
export default function Star(props) {
  let icon
  if(props.starSelection <= props.data) {
    icon = "/image/Star_Grey.png"
  }else {
    icon = "/image/Star_Purple.png"
  }
  return (
    <div className={styles.star} onClick={() => props.onClick(props.data + 1)}>
      <img src={icon}/>
    </div>
  )
}
