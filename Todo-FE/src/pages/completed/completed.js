import Todo from "../../components/todo/todo";

import dummyData from "../../data";

function Completed(props){
    return (
        <div className="display-todo"> 
        {
          dummyData
          .filter((task) => task.status == "completed")
          .map((t) => (
            <Todo todo={t} key={t.id} />
          ))
        }
        </div>
    )

}

export default Completed;