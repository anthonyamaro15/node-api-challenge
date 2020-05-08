import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  const { name, id } = data;
  return (
    <Link to={`/project/${id}`} className="Projects-container">
      <div className="Projects">
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default Projects;

//  <p>{description}</p>
//         <p>{completed ? "completed" : "not completed"}</p>
