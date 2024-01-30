import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
     
    font-size: 2rem;
    color:#3f9fc5;
  }
  h2 {
     
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color:#3f9fc7;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
    
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </SectionTitleStyle>
  );
}