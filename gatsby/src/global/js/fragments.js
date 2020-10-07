import { graphql } from 'gatsby';
export const MovieFragment = graphql`
  fragment MovieFragment on node__movie {
    id
    path {
      alias
    }
    title
    body {
      value
    }
    subtitle: field_promo_sentence
    rating: field_mpaa_rating
    stars: field_average_viewer_rating
    relationships {
      mainImage: field_main_image {
        localFile {
          childImageSharp {
            id
            fluid(maxWidth: 1600, maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      genres: field_genres {
        name
      }
    }
  }
`;
