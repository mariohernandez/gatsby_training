import { graphql } from 'gatsby';
export const MovieFragment = graphql`
  fragment MovieFragment on node__movie {
    path {
      alias
    }
    title
    relationships {
      field_main_image {
        localFile {
          childImageSharp {
            id
            fluid(maxWidth: 1600, maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      field_genres {
        name
      }
    }
  }
`;
