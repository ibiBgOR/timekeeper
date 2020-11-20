import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { convertSecondsToDuration } from "../timerUtil";

const StopWatchTile = ({ className, onNewTimerEntry }) => {
  const [timerName, setTimerName] = useState("");
  const [timerValue, setTimerValue] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleTimerNameChange = useCallback((event) => {
    setTimerName(event.target.value);
  }, [setTimerName])

  const handleTimerStart = useCallback(() => {
    const interval = setInterval(() => {
      setTimerValue(value => value + 1);
    }, 1000);
    setTimer(interval);
  }, [setTimer, setTimerValue]);

  const handleTimerStop = useCallback(() => {
    clearInterval(timer);
    setTimer(null);
    onNewTimerEntry({
      date: new Date(),
      name: timerName,
      value: timerValue,
    });

    setTimerName("");
    setTimerValue(0);
  }, [onNewTimerEntry, timer, timerName, timerValue, setTimer, setTimerName, setTimerValue]);

  const timerRunning = useMemo(() => timer !== null, [timer]);

  return (
    <Tile title="Neue Zeiterfassung starten" className={ className }>
      Gib deinem Eintrag einen Namen:
      <input
        value={ timerName }
        maxLength={ 50 }
        onChange={ handleTimerNameChange }
      />
      <button onClick={ timerRunning ? handleTimerStop : handleTimerStart }>{ timerRunning ? "Stoppen" : "Starten"}</button>
      { convertSecondsToDuration(timerValue) }
    </Tile>
  );
};

export default styled(StopWatchTile)`
  .content {
    display: flex;
    flex-direction: column;
  }
`;
