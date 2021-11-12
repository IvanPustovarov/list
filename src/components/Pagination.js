import React, { useState } from "react";
import "../style/pagination.scss";
const Pagination = ({ length }) => {
  const [paginationRange, setPaginationRange] = useState("25");
  const [page, setPage] = useState(1);

  const handleChangeValue = (e) => {
    setPaginationRange(e.target.value);
  };

  const handleChangePage = (direction) => {
    //TODO: logic for page and button
    if (direction === "prev") setPage(page - 1);
    if (direction === "next") setPage(page + 1);
  };

  return (
    <div className="pagination">
      {`${page > 1 ? paginationRange * page - paginationRange : page}-${
        page * paginationRange
      }`}
      <button onClick={() => handleChangePage("prev")}>Prev</button>
      {page}
      <button onClick={() => handleChangePage("next")}>Next</button>
      <select
        name="select"
        value={paginationRange}
        onChange={handleChangeValue}
      >
        <option value="25" defaultValue>
          25
        </option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Pagination;
