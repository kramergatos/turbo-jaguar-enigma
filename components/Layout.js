import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Kramer Gatos</title>
        <meta name="description" content="Kramer Gatos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
