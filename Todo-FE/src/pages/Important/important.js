import Todo from "../../components/todo/todo";

import dummyData from "../../data";

function Important(props) {
  return (
    <div className="display-todo">
      {
        dummyData
          .filter((task) => task.isImportant)
          .map((t) => (
            <Todo todo={t} key={t.id} />
          ))
      }
    </div>
  );
}

export default Important;
