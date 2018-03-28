import React from "react";
import Link from "gatsby-link";
import Slider from 'react-slick';

class Index extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <h2>Portfolio</h2>
        <Slick />
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <a href={node.featured_media.source_url}>
              <h3>{node.title}</h3>
            </a>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </div>
    )
  }
}
export default Index

class Slick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [{name:'first'},{name:'second'},{name:'third'},{name:'forth'}],
      config: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    };
  }

  /** ↓ 本来なくて良いです**/
  componentDidMount() {
    setTimeout(() => {
      let updateSlides = this.state.slides;
      updateSlides.map((value, index) => {
        value.name = index + 1;
        return value;
      });
      this.setState({slides: updateSlides});
    },3000)
  }
  /** ↑ 本来なくて良いです**/

  render () {
    let config = this.state.config;
    let slides = this.state.slides;
    return (
      <Slider {...config}>
        {slides.map(slide => {
          return [<div><h3>{slide.name}</h3></div>];
        })}
      </Slider>
    );
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
