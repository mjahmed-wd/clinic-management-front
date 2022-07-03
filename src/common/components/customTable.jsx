import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function CustomTable({
  headers,
  children,
  pageSize,
  loading,
  sx,
  styles,
}) {
  const [loop, setLoop] = useState([]);

  useEffect(() => {
    setLoop(Array.apply(null, Array(pageSize)));
  }, [pageSize]);

  return (
    <TableContainer
      component={Paper}
      sx={sx}
      style={{
        maxHeight: 535,
        boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.16)",
        borderRadius: "4px",
        ...styles,
      }}
    >
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers?.map((th, index) => (
              <TableCell
                sx={{ background: "#f5f5f5", padding: "6px 10px" }}
                align="left"
                style={th?.style}
                key={index}
              >
                {th?.isAll ? (
                  <div className="d-flex justify-content-around align-items-center">
                    <span>{th?.headerName}</span>
                    <span>{th?.isAll}</span>
                  </div>
                ) : (
                  `${th?.headerName}`
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {loading && (
          <>
            {loop?.map((th, index) => (
              <TableRow>
                {headers?.map((th, index) => (
                  <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </>
        )}
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}

//How to use this table:

// <CustomTable headers={headers} pageSize={15} loading={loading}>
// {rows?.map((item, i) => (
//   <TableRow key={i}>
//     <TableCell>{item?.sl}</TableCell>
//     <TableCell>{item?.title}</TableCell>
//     <TableCell>{item?.userId}</TableCell>
//     <TableCell>{item?.completed}</TableCell>
//   </TableRow>
// ))}
// </CustomTable>
