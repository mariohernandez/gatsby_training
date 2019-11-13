import React from 'react';
import { graphql } from 'gatsby';
import groupBy from 'lodash/groupBy';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Hero from '../components/Hero';

import GenreSection from '../components/GenreSection';

const IndexPage = ({ data }) => {
  const groups = groupBy(
    data.allNodeMovie.edges,
    ({ node }) => node.relationships.field_genres[0].name
  );

  const featuredNode = Object.values(groups)[0][0].node;
  console.log(groups);

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
      {Object.keys(groups).map((group) => (
        <GenreSection title={group} items={groups[group]} />
      ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allNodeMovie {
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
