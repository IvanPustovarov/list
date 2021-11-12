import React, { useState } from "react";
import "./app.scss";
import data from "./data.json";
import { Outlet, Link } from "react-router-dom";
import Task from "./components/Task";
import Pagination from "./components/Pagination";

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="table">
      <div className="table__condition">
        <div className="table__condition__data">Номер/Дата</div>
        <div className="table__condition__type">Тип задания/Автор</div>
        <div className="table__condition__account">Аккаунт/Терминал</div>
        <div className="table__condition__status">Статус </div>
      </div>
      <div className="table__tasks">
        {data.map((task) => (
          <Link to={`/${task.id}`} key={task.id} className="table__tasks__link">
            <Task task={task} />
          </Link>
        ))}
      </div>
      <div className="table__pagination">
        <Pagination length={data.length} settingPage={page} />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
