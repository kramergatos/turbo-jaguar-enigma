import React from 'react'
import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
export default function Layout(props: {
  pageTitle: string,
  children: any
}) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Kramergatos" />
        <meta name="keywords" content="Kramergatos" />
        <meta name="author" content="Joe Kramer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <title>{props.pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  )
}
