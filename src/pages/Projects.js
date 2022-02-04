import React from "react";
import styled from "styled-components";
import { projects } from "../constants/Data";
import Card from "../components/Card";

const Projects = () => {
  return (
    <main className="projects-page">
      <Container>
        <div className="title">
          <h2>my work</h2>
          <div className="underline"></div>
        </div>
        {projects.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Container>
    </main>
  );
};

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 6rem 20px;
  margin: 0 auto;
`;

export default Projects;
