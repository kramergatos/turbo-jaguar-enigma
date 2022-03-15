import styles from '../../styles/Game.module.css'
export default function Square(props) {
  /*function squareClick(i) {
    console.log(`square click ${i}`)
  }*/
  //onClick={squareClick(props.data.id)}
  return (
    <div className={styles.square}>
      {props.data.state}
    </div>
  )
}
