import React from "react";
import styled from "styled-components";

const AppHeader = ({ className }) => (
  <header className={ className }>
    Time Tracker
  </header>
);

export default styled(AppHeader)`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex: 0 0 150px;
`;
