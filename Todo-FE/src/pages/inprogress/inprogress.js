import Todo from "../../components/todo/todo";

import dummyData from "../../data";

function InProgress(props) {
  return (
    <div className="container">
      {
        // dummyData.filter((task)=>{
        //   if(task.status == 'inprogress'){
        //     return <Todo todo={task} />
        //   }
        // })

        dummyData
          .filter((task) => task.status == "inprogress")
          .map((t) => (
            <Todo todo={t} key={t.id} />
          ))
      }
    </div>
  );
}

export default InProgress;
