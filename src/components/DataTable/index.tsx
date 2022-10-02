import React from "react";
import classes from "./dataTable.module.css";

interface Cell {
  name: string;
  style?: React.CSSProperties;
}

export interface DataCell {
  row?: string[][];
  dataStyle?: Cell[];
}

interface Table {
  head: Cell[];
  data: DataCell;
}

function DataTable(props: Table) {
  const { head, data } = props;
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {head?.map((e, i) => {
            return <th key={e.name}>{e.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(10), (e, i) => {
          return (
            <tr key={i}>
              {head?.map((e, j) => {
                return (
                  <td key={e.name}>
                    {data.row ? (data.row[i] ? data.row[i][j] : " ") : ""}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
