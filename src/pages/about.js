import React from "react"
import Layout from "../component/Layout"
import { page, text } from "../examples/about.module.css"

export default function about() {
  return (
    <Layout>
      <div className={page}>
        <h1>About</h1>
        <h2>About Page</h2>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </Layout>
  )
}
