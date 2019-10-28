import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading level={1}>Nitflex</Heading>
    <Heading>Heading 2</Heading>
    <Heading level={4} uppercase>
      Uppercase Heading
    </Heading>
    {data.movies.edges.map(({ node }) => (
      <div>
        <Link to={node.path.alias}>{node.title}</Link>
        <Image
          fluid={
            node.relationships.field_main_image.localFile.childImageSharp.fluid
          }
        />
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    movies: allNodeMovie {
      edges {
        node {
          path {
            alias
          }
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
    }
  }
`;
