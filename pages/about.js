import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
function About() {
  return (
    <Layout>
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <h1>About This Website</h1>
            <p>
              This website is a collection of demos using NodeJS, NextJS, ReactJS built by <a className="inline_link" href="https://kramergatos.com" target="_blank">Joe Kramer</a>, a Front End Software Engineer.
            </p>
            <a className="button" href="https://github.com/kramergatos/turbo-jaguar-enigma" target="_blank">
              <i className="button_icon fab fa-github"></i>
              <span className="button_label">GitHub Repo</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default About
