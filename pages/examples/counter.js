import Layout from '../../components/Layout'
import Count from '../../components/Examples/Counter'
function Counter() {
  return (
    <Layout>
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <h1>Counter</h1>
            <Count />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Counter