import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Nitflex</Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
