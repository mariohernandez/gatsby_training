import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Details from '../components/Details';
import AddToFavorite from '../components/AddToFavorite';

const MovieTemplate = ({ data }) => {
  const { movie } = data;
  return (
    <Layout>
      <Hero
        title={movie.title}
        subtitle={movie.subtitle}
        rating={movie.rating}
        stars={movie.stars}
        image={movie.relationships.mainImage.localFile.childImageSharp.fluid}
        path={movie.path.alias}
      />
      <AddToFavorite id={movie.id} />
      <Details>{movie.body.value}</Details>
    </Layout>
  );
};

export default MovieTemplate;

// Remember the `slug` context variable we passed in in gatsby-node?
// That's the $slug we are querying with here!
export const query = graphql`
  query($slug: String!) {
    movie: nodeMovie(path: { alias: { eq: $slug } }) {
      ...MovieFragment
    }
  }
`;

MovieTemplate.propTypes = {};
