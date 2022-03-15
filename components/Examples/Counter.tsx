import React, {useState} from "react"
import styles from '../../styles/Counter.module.css'
export default function Counter() {
  const [value, setValue] = useState(0)
  return (
    <div className={styles.counter}>
      <div className={styles.label}>Current Count</div>
      <div className={styles.count}>{value}</div>
      <div className="button button_space" onClick={() => setValue((value + 1))}>
        <i className="button_icon fa-solid fa-plus"></i>
        <span className="button_label">Add</span>
      </div>
      <div className="button button_space" onClick={() => setValue((value >= 1 ? (value - 1) : value))}>
        <i className="button_icon fa-solid fa-minus"></i>
        <span className="button_label">Subtract</span>
      </div>
      <div className="button button_space" onClick={() => setValue(0)}>
        <i className="button_icon fa-solid fa-xmark"></i>
        <span className="button_label">Reset</span>
      </div>
    </div>
  )
}
