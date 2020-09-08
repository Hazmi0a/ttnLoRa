import React, { useState } from "react";
import { useTable } from "react-table";
import BTable from "react-bootstrap/Table";
import { ProgressBar } from "react-bootstrap";

import makeData from "./makeData";

function Table({ columns, data }) {
  const [status, setStatus] = useState("info");
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

  var getStatus = (value) => {
    const status = "danger";

    if (value < 26) {
      return "success";
    } else if (value >= 26 && value < 35) {
      return "warning";
    } else {
      return "danger";
    }
  };
  const succ = "success";

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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                // console.log(cell);
                return cell.column.Header === "Avg" ? (
                  <td {...cell.getCellProps()}>
                    <ProgressBar
                      variant={getStatus(cell.value)}
                      now={cell.value}
                    />
                  </td>
                ) : (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

function Tableavg() {
  const columns = React.useMemo(
    () => [
      { Header: "Sensor", accessor: "name", width: 70 },

      { Header: "Min", accessor: "min", width: 70 },

      { Header: "Max", accessor: "max", width: 70 },

      { Header: "Avg", accessor: "avg", width: 70 },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} />;
}

export default Tableavg;
