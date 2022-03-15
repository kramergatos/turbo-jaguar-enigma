import styles from '../../styles/Gallery.module.css'
export default function Photo(props) {
  return (
    <div className={styles.wrap_photo}>
      <img className={styles.photo} src={props.data.img_src} />
    </div>
  )
}
