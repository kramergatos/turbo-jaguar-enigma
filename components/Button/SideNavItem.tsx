import styles from '../../styles/SideNav.module.css'
export default function SideNavItem(props: {
  data: {
    url: string,
    title: string
  }
}) {
  return (
    <a href={props.data.url}>
      <span className={styles.label}>{props.data.title}</span>
    </a>
  )
}
