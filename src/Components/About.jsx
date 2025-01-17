import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function About() {
  let [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate(); // usenavigate is redirect the page
  console.log(searchParam.get("name"));
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          navigate("/contact/1");
        }}
      >
        Click Here
      </button>
    </div>
  );
}

export default About;
