import styles from '../../styles/Form.module.css'
export default function Star(props: {
  data: number,
  onClick: any,
  starSelection: number
}) {
  let icon
  if(props.starSelection <= props.data) {
    icon = "/image/Star_Grey.png"
  }else {
    icon = "/image/Star_Purple.png"
  }
  return (
    <div className={styles.star} onClick={() => props.onClick(props.data + 1)}>
      <img alt={'rating star '+(props.data+1)} src={icon}/>
    </div>
  )
}
