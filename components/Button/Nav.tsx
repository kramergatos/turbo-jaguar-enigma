import React, { useState } from 'react'
import NavItem from './NavItem'
import styles from '../../styles/Button.module.css'
export default function Nav(props: {
  data: {
    id: number,
    url: string,
    icon: string,
    label: string,
    subtitle?: string,
    target: string,
    title: string
  }[]
}) {
  const [showMe, setShowMe] = useState(false)
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <div className={styles.nav_fixed} onClick={toggle}>
      <i className="fa-solid fa-bars" style={{display: showMe?"none":"block"}}></i>
      <i className="fa-solid fa-xmark" style={{display: showMe?"block":"none"}}></i>
      <nav aria-label="Navigation" className={styles.nav} style={{display: showMe?"block":"none"}}>
        {props.data.map(item => (
          <NavItem data={item} key={item.id} />
        ))}
      </nav>
    </div>
  )
}
