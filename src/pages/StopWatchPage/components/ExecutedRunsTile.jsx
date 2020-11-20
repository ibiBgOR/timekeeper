import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import moment from "moment";

import Tile from "./Tile";
import { convertSecondsToDuration } from "../timerUtil";

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
`;

const TableData = styled.td`
  width: 33%;
`;

const TableHeadCell = styled.th`
  cursor: pointer;
  
  ::after {
    content: "${p => p.sortBy === p.id
      ? p.direction  === "asc" ? "⯅" : "⯆"
      : ""}";
  }
`;

const SortDirection = {
  ASC: "asc",
  DESC: "desc",
}

const ExecutedRunsTile = ({ className, executedRuns }) => {
  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC)

  const handleHeaderClick = useCallback((name) => {
    setSortBy(name);
    if (sortBy === name) {
      setSortDirection((direction) => direction === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC); // switch direction on double click
    } else {
      setSortDirection(SortDirection.ASC); // reset to default direction
    }
  }, [sortBy, setSortBy, setSortDirection]);

  const data = useMemo(() => (
    executedRuns
      .sort((left, right) => {
        if (left[sortBy] > (right[sortBy])) {
          return sortDirection === SortDirection.ASC ? -1 : 1;
        } else if (left[sortBy] < (right[sortBy])) {
          return sortDirection === SortDirection.ASC ? 1 : -1;
        } else {
          return 0;
        }
      })
  ), [executedRuns, sortBy, sortDirection]);

  return (
    <Tile title="Ausgeführte Zeiterfassungen" className={ className }>
      <Table>
        <thead>
          <TableRow>
            <TableHeadCell sortBy={ sortBy } id="name" direction={ sortDirection } onClick={ () => handleHeaderClick("name") }>Name</TableHeadCell>
            <TableHeadCell sortBy={ sortBy } id="date" direction={ sortDirection } onClick={ () => handleHeaderClick("date") }>Datum</TableHeadCell>
            <TableHeadCell sortBy={ sortBy } id="value" direction={ sortDirection } onClick={ () => handleHeaderClick("value") }>Dauer</TableHeadCell>
          </TableRow>
        </thead>
        <tbody>
          { data.map((executedRun) => (
            <TableRow key={ executedRun.name + executedRun.date }>
              <TableData>{ executedRun.name }</TableData>
              <TableData>{ moment(executedRun.date).format("DD.MM.YYYY HH:mm:ss.SSS") }</TableData>
              <TableData>{ convertSecondsToDuration(executedRun.value) }</TableData>
            </TableRow>
          )) }
        </tbody>
      </Table>
    </Tile>
  );
}

export default styled(ExecutedRunsTile)`
  .content {
    display: flex;
    flex-direction: column;
  }
`;
