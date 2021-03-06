import React, { useState } from "react";
import Link from "next/link";
import { useTable, useSortBy, useTableState } from "react-table";
import BTable from "react-bootstrap/Table";
import { ProgressBar, Card } from "react-bootstrap";

const Table = ({ columns, data, initialState }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useSortBy
  );

  var getStatus = (value) => {
    if (value < 30) {
      return "success";
    } else if (value >= 30 && value < 35) {
      return "warning";
    } else {
      return "danger";
    }
  };

  // Render the UI for your table
  return (
    <BTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(
                  column.getSortByToggleProps({ title: "Avg" })
                )}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            //Cell manipulation is here
            <Link href={"/chart/" + row.original.hardware_serial}>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return cell.column.Header === "Avg" ? (
                    <td {...cell.getCellProps()}>
                      <ProgressBar
                        variant={getStatus(cell.value)}
                        now={cell.value}
                        max="60"
                        label={cell.value}
                      />
                    </td>
                  ) : (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            </Link>
          );
        })}
      </tbody>
    </BTable>
  );
};

export const Tableavg = ({ tableTitle, data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Sensor", accessor: "name", width: 70 },

      { Header: "Min", accessor: "min", width: 70 },

      { Header: "Max", accessor: "max", width: 70 },

      { Header: "Avg", accessor: "avg", width: 70 },
    ],
    []
  );
  // const initialState = React.useMemo(() => {
  //   sortBy: [
  //     {
  //       id: "avg",
  //       desc: true,
  //     },
  //   ];
  // }, []);

  const initialState = {
    sortBy: [
      {
        id: "avg",
        desc: true,
      },
    ],
  };

  return (
    <Card className="card-chart">
      <Card.Header>{tableTitle}</Card.Header>
      <Card.Body>
        <div className="chart-area">
          <Table columns={columns} data={data} initialState={initialState} />
        </div>
      </Card.Body>
    </Card>
  );
};

Tableavg.defaultProps = {
  tableTitle: 'Devices by "data"',
};
