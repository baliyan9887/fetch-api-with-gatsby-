import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Here!! We fetch a Api key form CoinMarketCap</p>
    <p>Let's build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" style={{background:'#FFCC00', textDecoration:'none', color:'#fff', padding: '10px', marginBottom:'40px', textTransform:'uppercase',fontSize:'17px', letterSpacing:'2px'}}>Check Api result</Link>
  </Layout>
)

export default IndexPage
