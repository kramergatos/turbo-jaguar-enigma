import Layout from '../../components/Layout'
import styles from '../../styles/Form.module.css'
function Create() {
  return (
    <Layout pageTitle="Create Ingredient">
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <form aria-label="Add an Ingredient" className={styles.form}>
              <div className={styles.row}>
                <h1>Add New Ingredient</h1>
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="title_en">English Title</label>
                <input
                  autoCapitalize="off"
                  autoCorrect="off"
                  className={styles.input_text}
                  id="title_en"
                  name="title_en"
                  spellCheck="true"
                  tabIndex={1}
                  type="text"
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="title_es">Spanish Title</label>
                <input
                  autoCapitalize="off"
                  autoCorrect="off"
                  className={styles.input_text}
                  id="title_es"
                  name="title_es"
                  spellCheck="true"
                  tabIndex={2}
                  type="text"
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="quantity">Quantity</label>
                <input
                  autoCapitalize="off"
                  autoCorrect="off"
                  className={styles.input_text}
                  id="quantity"
                  name="quantity"
                  spellCheck="false"
                  tabIndex={3}
                  type="text"
                />
              </div>
              <div className={styles.row}>
                <button className={styles.button_cancel} type="button">
                  <i className="fa fa-times"/>
                  <span className={styles.button_label}>Cancel</span>
                </button>
                <button className={styles.button_save} tabIndex={4} type="submit">
                  <i className="fa fa-save"/>
                  <span className={styles.button_label}>Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Create
