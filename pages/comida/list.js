import Layout from '../../components/Layout'
import Ingredients from '../../components/Comida/Ingredients'
import styles from '../../styles/Home.module.css'
function List({data}) {
  return (
    <Layout>
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <Ingredients data={data} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/ingredients`)
  const data = await res.json()
  console.log(data)
  return { props: {data} }
}
export default List
