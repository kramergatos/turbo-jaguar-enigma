import ButtonIconOnly from './IconOnly'
import styles from '../../styles/Social.module.css'
import {dataSocialLinks} from '../../data/nav'
export default function Social() {
  return (
    <nav className={styles.nav_social}>
      {dataSocialLinks.map(item => (
        <ButtonIconOnly data={item} key={item.id} />
      ))}
    </nav>
  )
}
