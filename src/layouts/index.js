import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{
    display: `inline-block`,
    marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data }) => {
  return (
  <div style={{ margin: `0 auto` }}>
    <header style={{
      top : 0,
      marginBottom: `1.5rem`,
      backgroundColor: `#f7faff`,
      padding: `1vw`,
      position: `fixed`,
      width:`100%`,
      height:`50px`
    }}>
      <Link to="/" style={{
        textShadow: `none`,
        backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <nav style={{ float: `right` }}>
      <ul style={{ listStyle: `none`}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      </nav>
    </header>
    <div style={{ maxWidth: 650, margin: `0 auto`, padding: `2rem 1rem` }}>
      {children()}
    </div>
  </div>
  )
}

export const query = graphql`
  query MyQuery {
   site {
      siteMetadata {
        title
      }
    }
  }
`
