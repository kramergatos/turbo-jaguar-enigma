import React, { useState } from 'react'
import Star from './Star'
import styles from '../../styles/Form.module.css'
export default function Stars(props) {
  const numStars = 10
  return (
    <div className={styles.stars}>
      {[...Array(numStars)].map((e, i) => <Star data={i} starSelection={props.starSelection} key={i} onClick={props.click} />)}
    </div>
  )
}
