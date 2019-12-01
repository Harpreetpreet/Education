import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Feature from '../components/Feature';

const Container = styled.div`
  text-align: center;
  background: url("/images/home-banner.jpg");
  background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    overflow: hidden;
    min-height: 700px;
    margin-top:4rem;

  }
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
    font-size: 42px;
    font-family: "Playfair Display", serif;
    margin-bottom: 20px;
}
.text{
  margin-top: 12rem;
}
  p{
    padding:1rem;
    margin-top: -23px !important;
    font-size: 14px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    max-width: 620px;
    margin: auto;
    color:#FFFFFF  !important;
  }
  button{
    margin-top: 5rem;
    font-size: 22px;
    background-color:#F14668 !important;
    color: white !important;
    border-radius:5px solid black !important;
    transition-duration: .5s;
  }
  .button:hover{
    color:#F14668 !important;
    background-color:transparent !important;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />

        <Container>
          <div className="text">
            <h1 className="title">
              We Ensure better education
              <h1 className="title">for a better world</h1>
            </h1>
          </div>

          <p>
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building
            <span>and launch of the space telescope known as the Hubble.</span>
          </p>
          <button className="button is-danger is-outlined">Get Started</button>
        </Container>
        <Feature />
      </Layout>
    );
  }
}
