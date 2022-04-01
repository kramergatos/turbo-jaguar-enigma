import Layout from '../components/Global/Layout'
import styles from '../styles/Home.module.css'
function Home() {
  return (
    <Layout pageTitle="CMS">
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <h1>CMS</h1>
            <a className="button button_space" href="/comida/list">
              <i className="button_icon fa-solid fa-apple-whole"></i>
              <span className="button_label">Ingredients</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Home
