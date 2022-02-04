import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../Project";
import { projects } from "../../constants/Data";

const SelectedWork = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>selected work</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {projects.slice(0, 3).map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
      <Link to="/projects" className="btn">
        all projects
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding-top: 10rem;
  padding-bottom: 10rem;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default SelectedWork;
