import React from "react";
import styled from "styled-components";

const Tile = ({ children, className, title }) => (
  <div className={ className }>
    <h2 className="header">
      { title }
    </h2>
    <div className="content">
      { children }
    </div>
  </div>
);

export default styled(Tile)`
  background-color: lightblue;
  border-radius: 0.4em;
  display: flex;
  flex-direction: column;
  max-width: 75%;
  width: 75%;
  align-items: start;
  padding: 1em;
  
  .header {
    margin-top: 0;
  }
  
  .content {
    width: 100%;
  }
`;
