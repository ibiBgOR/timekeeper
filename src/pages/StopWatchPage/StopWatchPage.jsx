import React, { useCallback, useState } from "react";
import styled from "styled-components";

import StopWatchTile from "./components/StopWatchTile";
import ExecutedRunsTile from "./components/ExecutedRunsTile";

const StopWatchPage = ({ className }) => {
  const [executedRuns, setExecutedRuns] = useState([]);

  const handleNewTimerEntry = useCallback((timerEntry) => {
    setExecutedRuns(runs => [...runs, timerEntry]);
  }, [setExecutedRuns]);

  return (
    <div className={ className }>
      <StopWatchTile onNewTimerEntry={ handleNewTimerEntry } />
      <ExecutedRunsTile executedRuns={ executedRuns } />
    </div>
  );
};

export default styled(StopWatchPage)`
  margin: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
  > :not(:last-child) {
    margin-bottom: 1em;
  }
`;
