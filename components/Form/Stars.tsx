import React, { useState } from 'react'
import Star from './Star'
import styles from '../../styles/Form.module.css'
export default function Stars(props: {
  data: {
    id: number,
    label: string,
    name: string,
    numStars: number,
    required: boolean,
    tabIndex: number
  },
  onClick: any
  val: number
}) {
  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={props.data.name} tabIndex={props.data.tabIndex}>
        {props.data.required === true && '* '}
        {props.data.label}
      </label>
      <div className={styles.stars}>
        {[...Array(props.data.numStars)].map((event, index) => <Star data={index} starSelection={props.val} key={index} onClick={props.onClick} />)}
      </div>
      <input type="hidden" value={props.val}/>
    </div>
  )
}
