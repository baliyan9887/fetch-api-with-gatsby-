import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Crypto from "../components/api"

const SecondPage = () => (
  <Layout>
    <SEO title="Fetchedd API" />
    <h1>Here!! We fetched some Crypto Currency like Bitcoin, Ethereum, Ripple, Eos and Litecoine below-</h1>
    <Crypto />
    <Link to="/" style={{background:'#663399', textDecoration:'none', color:'#fff', padding: '10px', marginBottom:'40px', textTransform:'uppercase',fontSize:'17px', letterSpacing:'2px'}}>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
