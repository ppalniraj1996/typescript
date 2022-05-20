import React from "react";
import { TableRow } from "./TableRow";
import styled from "styled-components";

type propsType = {
  data: {
    id: number;
    model: string;
    make_year: string;
    operating_system: string;
    price: number;
    screen_height: number;
    screen_width: number;
  }[];
};

export const Table = (props: propsType) => {
  return (
    <>
      <TableData>
        <thead>
          <tr>
            <td>ID</td>
            <td>Model</td>
            <td>Make_Year</td>
            <td>Operating_System</td>
            <td>Price</td>
            <td>Screen_Height</td>
            <td>Screen_Width</td>
          </tr>
        </thead>
      </TableData>
      <tbody>
        {props.data.map((elem) => {
          return <TableRow key={elem.id} value={elem} />;
        })}
      </tbody>
    </>
  );
};

export const TableData = styled.table`
  border: 1px solid #000;
  margin: 10px 0px;
  thead {
    td {
      border: 1px solid #000;
      padding: 5px 10px;
      font-weight: 600;
    }
  }
  tbody {
    td {
      border: 1px solid #000;
    }
  }
`;
