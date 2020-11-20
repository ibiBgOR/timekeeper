import styled from "styled-components";

import { StopWatchPage } from "./pages";
import AppHeader from "./components/AppHeader";

const StyledContent = styled.main`
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
`;

const App = ({ className }) => (
  <div className={ className }>
    <AppHeader />
    <StyledContent>
      <StopWatchPage />
    </StyledContent>
  </div>
);

export default styled(App)`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
