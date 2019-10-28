import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const MovieTemplate = ({ data }) => {
  const { movie } = data;
  return (
    <Layout>
      <h1>{movie.title}</h1>
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
    }
  }
`;

MovieTemplate.propTypes = {};
