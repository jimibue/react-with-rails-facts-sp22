import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const FactForm = (props) => {
  const navigate = useNavigate();
  const { addFact, updateFact } = useContext(DataContext);
  const { state } = useLocation();
  const [text, setText] = useState(state && state.text);
  const [username, setUsername] = useState(state && state.username);
  const [source, setSource] = useState(state && state.source);
  const [stars, setStars] = useState(state && state.stars);
  useEffect(() => {
    // runs when component mounts
    console.log("FactForm mounted");
  }, []);
  const handleSubmit = (e) => {
    console.log("handleSubmit called");
    e.preventDefault();
    if (stars <= 0 || stars >= 5) {
      alert("invalid stars");
      // stop this function here no need to continue
      return;
    }
    if (state && state.id) {
      // update case
      console.log("update");
      updateFact({ text, username, source, stars, id: state.id }, navigate);
    } else {
      // new case
      console.log("create");
      addFact({ text, username, source, stars }, navigate);
    }
  };
  return (
    <div className="border">
      <h1>FactForm</h1>
      <form onSubmit={handleSubmit}>
        <p>text</p>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>username</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>source</p>
        <input value={source} onChange={(e) => setSource(e.target.value)} />
        <p>stars</p>
        <input
          step="any"
          type="number"
          min="0"
          max="5"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        />
        <button>{state && state.id ? "Edit" : "New"}</button>
      </form>
      <p>-------------------------</p>
      <p>state: {JSON.stringify(state)}</p>
      <p>state && state.text: {JSON.stringify(state && state.text)}</p>
      <p>true || 'yo': {JSON.stringify(true || "yo")}</p>
      <p>false || 'yo': {JSON.stringify(false || "yo")}</p>
      <p>true && 'yo': {JSON.stringify(true && "yo")}</p>
      <p>false && 'yo': {JSON.stringify(false && "yo")}</p>
    </div>
  );
};

export default FactForm;
