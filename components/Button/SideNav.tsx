import SideNavItem from './SideNavItem'
import styles from '../../styles/SideNav.module.css'
export default function SideNav(props: {
  data: {
    id: number,
    title: string,
    url: string
  }[]
}) {
  return (
    <div className={styles.side_nav_container}>
      <nav className={styles.side_nav}>
        {props.data.map(item => (
          <SideNavItem key={item.id} data={item} />
        ))}
      </nav>
    </div>
  )
}
