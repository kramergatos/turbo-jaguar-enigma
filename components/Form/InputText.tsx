import React from 'react'
import styles from '../../styles/Form.module.css'
export default function TextInput(props: {
  data: {
    id: number,
    autoCorrect: string,
    label: string,
    name: string,
    required: boolean,
    spellCheck: boolean,
    tabIndex: number,
  },
  onChange: any //React.ChangeEvent<HTMLInputElement>,
  val: string
}) {
  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={props.data.name}>
        {props.data.required === true && '* '}
        {props.data.label}
      </label>
      <input
        aria-required={props.data.required}
        autoCorrect={props.data.autoCorrect}
        className={styles.input_text}
        id={props.data.name}
        name={props.data.name}
        onChange={props.onChange}
        spellCheck={props.data.spellCheck}
        tabIndex={props.data.tabIndex}
        type="text"
        value={props.val}
      />
    </div>
  )
}
