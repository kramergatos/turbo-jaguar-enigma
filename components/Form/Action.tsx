import Cancel from '../Button/Cancel'
import Submit from '../Button/Submit'
import styles from '../../styles/Form.module.css'
export default function Action(props: {
  data: {
    id: number,
    url?: string,
    label: string
  }[]
}) {
  return (
    <div className={styles.row}>
      <Cancel data={props.data[0]} />
      <Submit data={props.data[1]} />
    </div>
  )
}
