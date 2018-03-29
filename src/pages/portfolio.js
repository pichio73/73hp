import React from "react";
import Link from "gatsby-link";
import Slider from 'react-slick';

export default class Portfolio extends React.Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <h2>Portfolio</h2>
        <div style={{display: `flex`, flexWrap: `wrap` }}>
            {data.allWordpressPost.edges.map(({ node }) => (
            <div style={{display: `inline-block`,  width: `33%` }}>
                <h3 style={{fontSize: `calc(100.0% + 1vw)`, textAlign: `center`}}>{node.title}</h3>
                <a href={node.featured_media.source_url} >
                    <img src={node.featured_media.source_url} width="" Height="" border="0" />
                </a>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
            ))}
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query portQuery {
    allWordpressPost{
      edges{
        node{
          title
          date
          slug
          guid
          categories{name}
          categories {
            name
          }
          featured_media{
            source_url
          }
        }
      }
    }
  }
`
