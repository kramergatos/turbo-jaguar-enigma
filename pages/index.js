import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
function Home() {
  return (
    <Layout>
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <h1>Project Demos</h1>
            <a className="button button_space" href="/comida/list">
              <i className="button_icon fa-solid fa-apple-whole"></i>
              <span className="button_label">Ingredients</span>
            </a>
            <a className="button button_space" href="/nasa-mars-rovers/gallery">
              <i className="button_icon fas fa-truck-monster"></i>
              <span className="button_label">NASA Mars Rovers Photos</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Home
