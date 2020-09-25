import React, { useState } from "react";
import { useTable } from "react-table";
import BTable from "react-bootstrap/Table";
import { ProgressBar, Card } from "react-bootstrap";

import makeData from "./makeData";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <BTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            //Cell manipulation is here
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log(cell);
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
};

export const SensorTable = ({ tableTitle, data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Time", accessor: "time", width: 70 },

      { Header: "Reading", accessor: "reading", width: 70 },
    ],
    []
  );

  return (
    <Card className="card-chart">
      <Card.Header>{tableTitle}</Card.Header>
      <Card.Body>
        <div className="chart-area">
          <Table columns={columns} data={data} />
        </div>
      </Card.Body>
    </Card>
  );
};

SensorTable.defaultProps = {
  tableTitle: 'Devices by "data"',
};
