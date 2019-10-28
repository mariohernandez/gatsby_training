import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Hero from '../components/Hero';

import GenreSection from '../components/GenreSection';

const IndexPage = ({ data }) => {
  const featuredNode = data.actionMovies.edges[0].node;
  return (
    <Layout>
      <SEO title="Home" />
      <Heading level={1}>Nitflex</Heading>
      <Hero
        title={featuredNode.title}
        image={
          featuredNode.relationships.field_main_image.localFile.childImageSharp
            .fluid
        }
      ></Hero>
      <GenreSection title="Action" items={data.actionMovies.edges} />
      <GenreSection title="Family" items={data.familyMovies.edges} />
    </Layout>
  );
};

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
