import Layout from '../../components/Global/Layout'
import Form from '../../components/Form/FormRecipeRating'
function Create() {
  return (
    <Layout pageTitle="Rating">
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
