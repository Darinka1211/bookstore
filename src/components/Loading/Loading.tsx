import React from "react";
import "./Loading.scss"
import { Spinner } from "react-bootstrap";

 const Loading = () => {
    return (
      <div className="div__loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };
  
  export default Loading;