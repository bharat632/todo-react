import Todo from "../../components/todo/todo";

import dummyData from "../../data";

function YetToStart(props){
    return (
        <div className="display-todo">
        {
          dummyData
          .filter((task) => task.status == "yettostart")
          .map((t) => (
            <Todo todo={t} key={t.id} />
          ))
        }
        </div>
    )

}

export default YetToStart;