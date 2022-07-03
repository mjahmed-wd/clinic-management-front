import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export default function Pagination({
  totalCount,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setPositionHandler,
  values,
}) {
  const handleChangePage = (event, newPage) => {
    setPageNo(newPage);
    setPositionHandler(newPage+1, pageSize, values);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPositionHandler(pageNo, parseInt(event.target.value, 10), values);
  };

  return (
    <div>
      <TablePagination
        sx={{ overflow: "hidden" }}
        rowsPerPageOptions={[15, 25, 50, 100, 200, 300, 400, 500]}
        component="div"
        count={totalCount}
        page={pageNo}
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
