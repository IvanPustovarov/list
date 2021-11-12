import "./app.scss";
import data from "./data.json";
import Task from "./components/Task";

const App = () => {
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
          <Task task={task} key={task.id} />
        ))}
      </div>
      <div className="table__pagination"></div>
    </div>
  );
};

export default App;
