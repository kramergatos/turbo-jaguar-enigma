import Layout from '../../components/Global/Layout'
import Game from '../../components/TicTacToe/Game'
function TicTacToe() {
  return (
    <Layout pageTitle="Tic Tac Toe">
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <h1>Tic Tac Toe</h1>
            <Game />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default TicTacToe
