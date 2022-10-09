import React from "react";
import classes from "./dataTable.module.css";

interface Style {
  id: string;
  style: React.CSSProperties;
}

interface Table {
  head: string[];
  data: string[][];
  style?: {
    head?: Style[];
    body?: Style[];
  };
}

function DataTable(props: Table) {
  const { head, data, style } = props;
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {head?.map((e, i) => {
            return (
              <th
                key={e}
                style={
                  style?.head?.find(
                    (el) => el.id.toLowerCase() === e.toLowerCase()
                  )?.style || {}
                }
              >
                {e}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(10), (e, i) => {
          return (
            <tr key={i}>
              {head?.map((e, j) => {
                return (
                  <td
                    key={e}
                    style={
                      style?.body?.find(
                        (el) => el.id.toLowerCase() === e.toLowerCase()
                      )?.style || {}
                    }
                  >
                    {data ? (data[i] ? data[i][j] : "") : ""}
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
