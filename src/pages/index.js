import React from "react";
import Link from "gatsby-link";
import Slider from 'react-slick';

export default class Index extends React.Component {
  render() {
    const data = this.props.data
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,
      adaptiveHeight: true,
      autoplaySpeed: 3000,
      autoplay: true
    };

    return (
      <div>
        <Link to="/portfolio/"><h2>Portfolio</h2></Link >
        <Slider {...settings}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div  style={{maxHeight: `25rem`}}>
            <h3 style={{fontSize: `calc(100.0% + 1vw)`, textAlign: `center`}}>{node.title}</h3>
            <a href={node.featured_media.source_url} >
              <img src={node.featured_media.source_url} width="" Height="" border="0" />
            </a>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
         </Slider>
      </div>
    )
  }
}

export const query = graphql`
  query indexQuery {
    allWordpressPost{
      edges{
        node{
          title
          date
          slug
          guid
          categories {
            name
          }
          featured_media{
            source_url
          }
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
