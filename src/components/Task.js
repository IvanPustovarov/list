import React from "react";
import "../style/task.scss";

const Task = ({ task }) => {
  const user = task.created_user;
  const status = task.status;
  const dateConverter = (task) => {
    const unixTimestamp = task.created_date;
    const date = new Date(unixTimestamp);
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return `${day} ${time}`;
  };

  const statusConverter = (status) => {
    const statusType = new Map([
      ["new", "Новое"],
      ["assigned_to", "Назначено"],
      ["started", "Выполняется"],
      ["declined", "Отменено"],
      ["completed", "Завершено"],
    ]);
    const statusRus = (name) => statusType.get(name);
    return statusRus(status);
  };

  return (
    <div className="task">
      <div className="task__data-info">
        <div className="task__data-info_info"> №{task.id}</div>
        <div className="task__data-info_data">{dateConverter(task)}</div>
      </div>
      <div className="task__author-type">
        <div className="task__author-type_type"> {task.order_type.name}</div>
        <div className="task__author-type_author">
          {user.name} {user.surname} {user.patronymic}
        </div>
      </div>
      <div className="task__account-terminal">
        <div className="task__account-terminal_account">
          {task.account.name}
        </div>
        <div className="task__account-terminal_terminal">
          {task.terminal.name}
        </div>
      </div>
      <div className="task__status">
        <div className={`task__status_${status}`}>
          {statusConverter(status)}
        </div>
      </div>
    </div>
  );
};

export default Task;
