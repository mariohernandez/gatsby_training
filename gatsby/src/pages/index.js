import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import GenreSection from '../components/GenreSection';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading level={1}>Nitflex</Heading>
    <Heading>Heading 2</Heading>
    <Heading level={4} uppercase>
      Uppercase Heading
    </Heading>
    <GenreSection title="Action" items={data.actionMovies.edges} />
    <GenreSection title="Family" items={data.familyMovies.edges} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    actionMovies: allNodeMovie(
      filter: {
        relationships: {
          field_genres: { elemMatch: { name: { eq: "Action" } } }
        }
      }
    ) {
      edges {
        node {
          ...MovieFragment
        }
      }
    }

    familyMovies: allNodeMovie(
      filter: {
        relationships: {
          field_genres: { elemMatch: { name: { eq: "Family" } } }
        }
      }
    ) {
      edges {
        node {
          ...MovieFragment
        }
      }
    }
  }
`;
