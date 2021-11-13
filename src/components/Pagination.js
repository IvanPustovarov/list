import React from "react";
import "../style/pagination.scss";
const Pagination = ({
  length,
  settingPage,
  page,
  paginationRange,
  settingPaginationRange,
}) => {
  const handleChangeValue = (e) => {
    const range = e.target.value;
    settingPaginationRange(range);
  };

  const setUpPageNext = () => {
    const maxPage = length / paginationRange;
    if (page < maxPage) settingPage(page + 1);
  };

  const setUpPagePrev = () => {
    const minPage = 1;
    if (page > minPage) settingPage(page - 1);
  };

  return (
    <div className="pagination">
      {`${page > 1 ? paginationRange * page - paginationRange : page}-${
        page * paginationRange
      }`}
      <button onClick={setUpPagePrev}>Prev</button>
      {page}
      <button onClick={setUpPageNext}>Next</button>
      <select
        name="select"
        value={paginationRange}
        onChange={handleChangeValue}
      >
        <option value="25" defaultValue>
          25
        </option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Pagination;
