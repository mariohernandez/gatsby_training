import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading>Nitflex</Heading>
    {data.movies.edges.map(({ node }) => (
      <div>
        <Link to={node.path.alias}>{node.title}</Link>
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
                }
              }
            }
          }
        }
      }
    }
  }
`;
