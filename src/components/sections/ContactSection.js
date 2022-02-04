import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          Get in touch at <span>Jode200951@hotmail.com</span>
        </h4>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  text-align: center;
  h4 {
    text-transform: none;
  }
  span {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-primary-1);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default ContactSection;
