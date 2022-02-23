import Head from 'next/head'

export default function Layout({ children, title }) {

    return (
        <div> 
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
    )

}