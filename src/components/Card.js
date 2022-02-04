import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <StyledCard layout={props.id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <Link to={`/project/${props.id}`} className="btn">
          Details
        </Link>
      </div>

      <div>
        <img src={props.screenshot} alt="" />
      </div>
    </StyledCard>
  );
}

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export default Card;
