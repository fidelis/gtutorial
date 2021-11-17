import React from "react"
import { Link } from "gatsby"
import Layout from "../component/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>home page</h1>
        <h1>Hello world</h1>
        <a href="https://www.gatsbyjs.com/docs/how-to/">Gatsby Docs</a>
        <p className={text}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </Layout>
  )
}
