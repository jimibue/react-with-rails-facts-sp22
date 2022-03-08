import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const Fact = (props) => {
  const { deleteFact } = useContext(DataContext);
  const navigate = useNavigate();
  const { id, username, text, source, stars } = props;
  return (
    <div className="border">
      <h1>Fact: {text}</h1>
      <p>{username}</p>
      <p>{id}</p>
      <a href={source}>{source}</a>
      <div
        className="border"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <p
          onClick={() =>
            navigate(`/facts/${id}/edit`, {
              state: { id, username, text, source, stars },
            })
          }
        >
          edit
        </p>
        <p onClick={() => deleteFact(id)}>delete</p>
        <p onClick={() => navigate(`/facts/${id}`, { state: props })}>show</p>
      </div>
    </div>
  );
};

export default Fact;
