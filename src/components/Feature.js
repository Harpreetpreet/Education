import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 36px;
    line-height: 30px;
    font-weight: bold;
    font-family: 'Rubik', sans-serif;
    color: #002347;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    font-size: 16px;
    margin-bottom: 0px;
    font-style: italic;
    margin-top: 0;
    line-height: 25px;
    font-family: 'Roboto', sans-serif;
    color: #7b838a !important;
    font-weight: 600;
  }
  .card {
    background: #f9f9ff;
  }
`;

const Feature = () => (
  <Container>
    <section className="section">
      {' '}
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <h1 className="mb-3">Awesome Features</h1>
          <p>Replenish man have thing gathering lights yielding shall you</p>
        </div>
      </div>
      <div className="columns">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <i class="fas fa-graduation-cap"></i>
              </div>
            </div>

            <div className="content">
              <h2>Scholarship Facility </h2>
              One make creepeth, man bearing theira firmament won't great heaven
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <i class="fas fa-book-open"></i>
              </div>
            </div>

            <div className="content">
              <h2>Sell Online Course </h2>
              One make creepeth, man bearing theira firmament won't great heaven
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <i class="fas fa-globe-asia"></i>
              </div>
            </div>

            <div className="content">
              <h2>Global Certification </h2>
              One make creepeth, man bearing theira firmament won't great heaven
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
);
export default Feature;
