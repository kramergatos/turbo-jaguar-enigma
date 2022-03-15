import styles from '../../styles/Table.module.css'
export default function Ingredient(props) {
  return (
    <tr className={styles.tr}>
      <td className={styles.td_icon}>
        <a href="#">
          <img alt={props.data.title.en} className={styles.image} src={'/image/' + props.data.image} />
        </a>
      </td>
      <td className={styles.td_number}>
        {props.data.quantity}
      </td>
      <td className={styles.td_200px}>
        <a href="#">
          {props.data.title.en}
        </a>
      </td>
      <td className={styles.td_200px}>
        {props.data.title.es}
      </td>
    </tr>
  )
}
