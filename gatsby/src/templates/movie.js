import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout';
import Heading from '../components/Heading';

const MovieTemplate = ({ data }) => {
  const { movie } = data;
  console.log(movie);

  return (
    <Layout>
      <Heading level={1}>{movie.title}</Heading>
      <Image
        fluid={
          movie.relationships.field_main_image.localFile.childImageSharp.fluid
        }
      />
    </Layout>
  );
};

export default MovieTemplate;

// Remember the `slug` context variable we passed in in gatsby-node?
// That's the $slug we are querying with here!
export const query = graphql`
  query($slug: String!) {
    movie: nodeMovie(path: { alias: { eq: $slug } }) {
      title
      relationships {
        field_main_image {
          localFile {
            childImageSharp {
              id
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

MovieTemplate.propTypes = {};
