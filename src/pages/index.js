import React from "react";

export default ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <table style={{ tableLayout: `fixed` }}>
        <thead>
          <tr>
            <th>title</th>
            <th>date</th>
            <th>guid</th>
            <th>source_url</th>
          </tr>
        </thead>
        <tbody>
          {data.allWordpressPost.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.title}
              </td>
              <td>
                {node.date}
              </td>
              <td>
                {node.guid}
              </td>
              <td>
                {node.featured_media.source_url}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allWordpressPost{
      edges{
        node{
          title
          date
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
   site {
      siteMetadata {
        title
      }
    }
  }
`
