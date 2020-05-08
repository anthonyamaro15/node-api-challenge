import React from "react";
import { useParams, Link } from "react-router-dom";

const Project = ({ data }) => {
  const { id } = useParams();
  const obj = data.find((project) => project.id === Number(id));
  const { name, description, completed } = obj;
  return (
    <div className="Project">
      <h1>{name}</h1>
      <p>
        description: <span>{description}</span>
      </p>
      <p>
        status: <span>{completed ? "completed" : "not completed"}</span>
      </p>
      <Link to="/">go back</Link>
    </div>
  );
};

export default Project;
