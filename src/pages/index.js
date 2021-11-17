import React from "react"
import { Link } from "gatsby"
import Layout from "../component/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <h1>Hello Gatsby!</h1>
        <h1 style={{ color: "grey", textTransform: "capitalize" }}>
          home page
        </h1>
        <h1>Hello WORLD!</h1>
        <a href="https://www.gatsbyjs.com/docs/how-to/">Gatsby Docs</a>
      </div>
    </Layout>
  )
}
