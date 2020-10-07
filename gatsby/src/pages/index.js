import React from 'react';
import { graphql } from 'gatsby';
import groupBy from 'lodash/groupBy';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import GenreSection from '../components/GenreSection';

const IndexPage = ({ data }) => {
  // Group movies by their genre name.
  const groups = groupBy(
    data.allNodeMovie.edges,
    ({ node }) => node.relationships.genres[0].name
  );

  // Get first movie from first genre to be featured for hero.
  const featuredNode = Object.values(groups)[0][0].node;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={featuredNode.title}
        subtitle={featuredNode.subtitle}
        rating={featuredNode.rating}
        stars={featuredNode.stars}
        path={featuredNode.path.alias}
        image={
          featuredNode.relationships.mainImage.localFile.childImageSharp.fluid
        }
      />
      {/* Map over groups and pass each group in to the section. */}
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
  }
`;
