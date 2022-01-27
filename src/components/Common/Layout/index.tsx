import React from 'react'
import Head from 'next/head'

export type LayoutProps = {
  title?: string
  children: React.ReactNode
}

const Layout = ({ children, title = 'Drivly Approve Form' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Great State Burger Site" />
      </Head>

      <main>{children}</main>

      <footer></footer>
    </>
  )
}

export default Layout
