import Layout from '../../components/Global/Layout'
import Form from '../../components/Form/FormIngredient'
import styles from '../../styles/Form.module.css'
function Create() {
  return (
    <Layout pageTitle="Create Ingredient">
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Create
