import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Section = styled.div`
  text-align: center;
    height: 40rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  background: url("/images/home-banner.jpg");
  }
  .section{
   
  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />

        <Section className="section">
          <h1 className="title">We Ensure better education</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </Section>
      </Layout>
    );
  }
}
