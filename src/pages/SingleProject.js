import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants/Data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../pages/Error";
const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const getProject = () => {
    setLoading(true);
    setErr(false);
    const currentProject = projects.filter(function (obj) {
      if (obj.id == id) {
        return obj;
      }
    });

    if (currentProject.length > 0) {
      setProject(currentProject[0]);
      setLoading(false);
    } else {
      console.log("error", currentProject);
      setLoading(false);
      setErr(true);
    }
  };
  useEffect(() => {
    getProject();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (err) {
    return <Error></Error>;
  }
  return (
    <Wrapper className="projects-page">
      <section className="section section-center page">
        <Link className="btn" to="/projects">
          Back to Projects
        </Link>
        <div className="project-center">
          <ProjectImg>
            <img className="main" src={project.screenshot} />
          </ProjectImg>
          <section className="content">
            <h2>{project.name}</h2>
            <p className="desc">{project.description}</p>
            <p className="info">
              <span>Fearures : </span>
              <ul>
                {project.fearures.map((fearure) => {
                  return <li>{fearure}</li>;
                })}
              </ul>
            </p>
            <p className="info">
              <span>Technologies : </span>
              <ul>
                {project.technologies.map((technology) => {
                  return <li>{technology}</li>;
                })}
              </ul>
            </p>

            <hr />
          </section>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5rem 0;
  .project-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;

    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .project-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;
const ProjectImg = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
export default SingleProject;
